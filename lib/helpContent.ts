export type BlockType = "paragraph" | "list" | "steps" | "tip" | "image";

export interface ParagraphBlockData {
  text: string;
}

export interface ListBlockData {
  items: string[];
}

export interface StepItem {
  title: string;
  description: string;
}

export interface StepsBlockData {
  items: StepItem[];
}

export interface TipBlockData {
  label: string;
  title: string;
  body: string;
  text: string;
}

export interface ImageBlockData {
  url: string;
  caption?: string;
}

export type BlockData =
  | ParagraphBlockData
  | ListBlockData
  | StepsBlockData
  | TipBlockData
  | ImageBlockData;

export interface ContentBlock {
  id: string;
  type: BlockType;
  data: BlockData;
}

export interface NextArticleLink {
  label: string;
  title: string;
  description: string;
  href: string;
}

export interface HelpPost {
  id: string;
  categoryKey: string;
  itemKey: string;
  title: string;
  slug: string;
  summary: string;
  readTime: string;
  blocks: ContentBlock[];
  nextArticle?: NextArticleLink;
  status: "draft" | "published";
  createdAt: string;
  updatedAt: string;
}

export type HelpPostInput = Omit<HelpPost, "id" | "createdAt" | "updatedAt">;
