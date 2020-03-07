import { Observable } from "rxjs";
import { NewsApiResult } from "../news-list/models/news-api-result.model";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export abstract class NewsApiServiceContract {
  abstract get(): Observable<NewsApiResult>;
}
