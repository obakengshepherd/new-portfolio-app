export interface BaseEntity {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface SEO {
  metaDescription?: string;
  metaKeywords?: string[];
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  canonical?: string;
}

export interface Image {
  url: string;
  alt: string;
  caption?: string;
  isFeatured?: boolean;
}

export interface Link {
  label: string;
  href: string;
  external?: boolean;
  icon?: string;
}

export interface Analytics {
  users?: number;
  performance?: string;
  conversion?: number;
  engagement?: number;
}
