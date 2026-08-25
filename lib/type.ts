export interface BlockItem {
  title?: string;
  description?: string;
  [key: string]: any;
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
