import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Article } from "../news-list/models/article.model";
import { NewsApiResult } from "../news-list/models/news-api-result.model";
import { NewsApiServiceContract } from "./news-api.service-contract";

const gorillaArticle: Article = {
  title: "Some News Article",
  publishedAt: "2020-12-20T00:00:00Z",
  content: "Dummy article content",
  url:
    "https://www.africanews.com/2019/06/17/nigeria-probing-how-gorilla-swallowed-over-19000-zoo-funds//",
  urlToImage:
    "https://storage.googleapis.com/afs-prod/media/e2a9aae4ddfc460eab6ca9c36ae0b3df/2000.jpeg"
};

@Injectable({ providedIn: "root" })
export class NewsApiMockService implements NewsApiServiceContract {
  get(): Observable<NewsApiResult> {
    const articles: Article[] = [
      gorillaArticle,
      gorillaArticle,
      gorillaArticle
    ];
    return of({
      status: "200",
      totalResults: 3,
      articles: articles
    });
  }
}
