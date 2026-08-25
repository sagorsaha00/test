"use client";
import { useQuery } from "@tanstack/react-query";
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
