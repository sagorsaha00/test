"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ShieldCheck,
  Store,
  UserPlus,
  Package,
  Truck,
} from "lucide-react";

import { useHelpContent } from "@/lib/getData";
import { Article, Step } from "@/lib/type";
import GlobalShowData from "@/app/components/globalShow";
import HelpArticleSkeleton from "@/app/components/helpArticleSkeleton";

const STEP_ICONS = [UserPlus, Store, Package, ShieldCheck, Truck];

export default function DynamicHelpArticle() {
  const catKey = "sellOnMarkood";
  const itemKey = "addProducts";
  const { data, isPending, isError, isFetching } = useHelpContent(
    catKey,
    itemKey,
  );

  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedSlug, setSelectedSlug] = useState<string>("");

  useEffect(() => {
    if (!data || !Array.isArray(data)) {
      return;
    }

    setArticles(data);

    if (data.length > 0) {
      setSelectedSlug((currentSlug) => {
        const currentArticle = data.find(
          (article: Article) => article.slug === currentSlug,
        );

        if (currentArticle) {
          return currentSlug;
        }

        return data[0].slug;
      });
    }
  }, [data]);

  const selectedArticle = useMemo<Article | null>(() => {
    if (!selectedSlug || articles.length === 0) {
      return null;
    }

    return articles.find((article) => article.slug === selectedSlug) || null;
  }, [articles, selectedSlug]);

  const handleArticleClick = (slug: string) => {
    setSelectedSlug(slug);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (isPending) {
    return <HelpArticleSkeleton />;
  }

  if (isError) {
    return (
      <div className="flex min-h-[500px] items-center justify-center px-6 text-center">
        <div>
          <p className="text-sm font-semibold text-red-500">
            Failed to load help content.
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Please refresh the page or try again shortly.
          </p>
        </div>
      </div>
    );
  }

  if (!articles.length || !selectedArticle) {
    return (
      <div className="flex min-h-[500px] items-center justify-center">
        <div className="text-sm font-semibold text-slate-500">
          No help article found.
        </div>
      </div>
    );
  }

  const formattedDate = selectedArticle.updatedAt
    ? new Date(selectedArticle.updatedAt).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })
    : "";

  const nextArticle = selectedArticle.nextArticle?.slug
    ? articles.find(
        (article) => article.slug === selectedArticle.nextArticle?.slug,
      ) || null
    : null;

  return (
    <GlobalShowData
      selectedArticle={selectedArticle}
      articles={articles}
      selectedSlug={selectedSlug}
      nextArticle={nextArticle}
      formattedDate={formattedDate}
      handleArticleClick={handleArticleClick}
      stepIcons={STEP_ICONS}
      isRefetching={isFetching && !isPending}
    />
  );
}
