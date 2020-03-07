import { Component, OnInit } from "@angular/core";
import { NewsApiResult } from "./models/news-api-result.model";
import { Article } from "./models/article.model";
import { NewsApiServiceContract } from "../services/news-api.service-contract";

@Component({
  selector: "app-news-list",
  templateUrl: "./news-list.component.html",
  styleUrls: ["./news-list.component.scss"]
})
export class NewsListComponent implements OnInit {
  articles: Article[];

  constructor(private newsApiService: NewsApiServiceContract) {}

  ngOnInit(): void {
    this.newsApiService.get().subscribe((data: NewsApiResult) => {
      this.articles = data.articles;
    });
  }
}
