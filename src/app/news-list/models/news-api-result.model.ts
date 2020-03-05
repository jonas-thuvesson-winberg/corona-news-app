import { Article } from "./article.model";

export interface NewsApiResult {
  status: string;
  totalResults: number;
  articles: Article[];
}
