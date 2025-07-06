export interface DataItem {
  id: string | number;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

export interface DataType {
  status: string;
  sources: DataItem[];
}

export interface ArticleItem {
  source: {
    id: string | number;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface NewsItem {
  status: string;
  totalResults: number;
  articles: ArticleItem[];
}

export interface ErrorType {
  message: string;
  code: string;
  status: number;
}
