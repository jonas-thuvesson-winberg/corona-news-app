import { NewsApiServiceContract } from "./news-api.service-contract";
import { Observable } from "rxjs";
import { NewsApiResult } from "../news-list/models/news-api-result.model";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

const apiRoot = "https://newsapi.org/v2/";
const apiKey = "bb462d9defb2428e84b7e1695ca767f6";

type Params = {
  [key: string]: string;
};

@Injectable({ providedIn: "root" })
export class NewsApiService implements NewsApiServiceContract {
  constructor(private http: HttpClient) {}

  get(): Observable<NewsApiResult> {
    const params = {
      qInTitle: '"corona" OR "covid-19" OR "coronavirus" OR "corona virus"',
      language: "en",
      sortBy: "publishedAt",
      pageSize: "100"
    };

    const url = this.constructRequestUrl(["everything"]);
    const httpParams = this.constructParams(params);
    console.log(url);
    console.log(httpParams);
    return this.http.get(url, { params: httpParams }) as Observable<
      NewsApiResult
    >;
  }

  private constructRequestUrl(endpoint: string[]): string {
    return `${apiRoot}${endpoint.join("/")}`;
  }

  private constructParams(params: Params): HttpParams {
    let httpParams = new HttpParams().set("apiKey", apiKey);
    Object.entries(params).forEach(([key, value]) => {
      console.log(key);
      console.log(value);
      httpParams = httpParams.set(key, value);
    });
    return httpParams;
  }
}
