"use client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { HelpPost } from "./type";

// 1. Core Fetcher Function
const fetchHelpContent = async (
  categoryKey: string,
  itemKey: string,
): Promise<HelpPost> => {
  const response = await fetch(
    `http://localhost:5000/api/help/${categoryKey}/${itemKey}`,
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch help content: ${response.statusText}`);
  }
  const result = await response.json();
  return result.data;
};

export const useHelpContent = (categoryKey: string, itemKey: string) => {
  return useQuery({
    // Unique query key per category & item
    queryKey: ["helpContent", categoryKey, itemKey],
    queryFn: () => fetchHelpContent(categoryKey, itemKey),
    enabled: Boolean(categoryKey && itemKey),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
  });
};

export const getHelpArticle = async (id: string) => {
  const response = await fetch(`http://localhost:5000/api/article/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch help article");
  }
  const result = await response.json();

  if (!result.success) {
    throw new Error(result.message || "Article not found");
  }
  console.log("result", result.data);
  return result.data;
};
export const useHelpArticle = (id: string) => {
  return useQuery({
    queryKey: ["help-article", id],
    queryFn: () => getHelpArticle(id),
    enabled: Boolean(id),
  });
};

export const useUpdateHelpArticle = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (updateData: Record<string, any>) => {
      const response = await fetch(
        `http://localhost:5000/api/update-articles/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateData),
        },
      );

      const result = await response.json();
      console.log("result", result);

      if (!response.ok) {
        throw new Error(result.message || "Failed to update article");
      }

      return result.data;
    },

    onSuccess: (updatedArticle) => {
      queryClient.setQueryData(["help-article", id], updatedArticle);

      queryClient.invalidateQueries({
        queryKey: ["help-articles"],
      });
    },
  });
};

const getAllPosts = async () => {
  const response = await fetch("http://localhost:5000/api/allData", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch updates");
  }

  const result = await response.json();
  console.log("result", result);

  if (!result.success) {
    throw new Error(result.message || "Failed to fetch updates");
  }

  return result.data || [];
};

export const useAllPosts = () => {
  return useQuery({
    queryKey: ["all-posts"],
    queryFn: getAllPosts,
  });
};
