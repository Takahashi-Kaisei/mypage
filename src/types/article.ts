export interface Article {
  id: string;
  title: string;
  description: string;
  speakerdeckUrl: string;
  thumbnailUrl?: string;
  tags: string[];
  date: string;
}
