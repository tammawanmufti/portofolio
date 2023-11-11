export interface ProjectInfo {
  title: string;
  description: string;
  tags: TagInfo[];
  imageSrc?: string;
  productUrl?: ProductURL[];
  allowRequestAccess?: boolean;
  repositoryUrl?: string;
  startedAt: Date;
  finishedAt?: Date;
  company?: string;
  contributedAs: string;
}

export interface ProductURL {
  url: string;
  publisher: Publisher;
}

export enum Publisher {
  AppStore,
  PlayStore,
  Website,
}

export interface TagInfo {
  title: string;
  url: string;
}
