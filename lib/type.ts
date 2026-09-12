import { ElementType } from "react";

export interface BlockItem {
  title?: string;
  description?: string;
  [key: string]: any;
}
export interface HelpCategoryItem {
  key: string;
  label: string;
}

export interface HelpCategory {
  key: string;
  title: string;
  description: string;
  items: HelpCategoryItem[];
}
export interface Block {
  type: "paragraph" | "steps" | "list" | "tip" | "image";
  data: {
    text?: string;
    items?: string[] | BlockItem[];
    label?: string;
    title?: string;
    body?: string;
    url?: string;
    caption?: string;
  };
}

export interface HelpPost {
  _id: string;
  categoryKey: string;
  itemKey: string;
  title: string;
  slug: string;
  summary: string;
  readTime: string;
  blocks: Block[];
  nextArticle?: {
    label: string;
    title: string;
    description: string;
    href: string;
  };
  status: string;
  createdAt: string;
  updatedAt: string;
}
export interface Step {
  title: string;
  description: string;
}
export interface Block {
  type: "paragraph" | "steps" | "list" | "tip" | "image";
  data: {
    text?: string | undefined;
    items?: string[] | BlockItem[] | undefined;
    label?: string | undefined;
    title?: string | undefined;
    body?: string | undefined;
    url?: string | undefined;
    caption?: string | undefined;
  };
}
export interface NextArticle {
  label: string;
  title: string;
  description: string;
  href?: string;
  slug?: string;
}
export interface Article {
  _id: string;
  categoryKey: string;
  itemKey: string;
  title: string;
  slug: string;
  summary: string;
  readTime: string;
  blocks: Block[];
  nextArticle?: NextArticle;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v?: number;
}

type HelpItem = {
  title: string;
  description: string;
};

export type SellerHelpPageProps = {
  title: string;
  description: string;
  category: string;
  items: HelpItem[];
};
export interface UpdatePost {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse {
  success: boolean;
  data: UpdatePost[];
  message?: string;
}

type CategoryItem = {
  key: string;
  label: string;
};

export type CategoryConfig = {
  key: string;
  title: string;
  description: string;
  icon: ElementType;
  items: CategoryItem[];
};

export interface PageProps {
  params: Promise<{
    locale: string;
    category: string;
    article: string;
  }>;
}
export type MenuType = "Dashboard" | "Articles" | "Managecontent";
