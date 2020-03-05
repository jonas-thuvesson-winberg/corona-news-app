import { Component, OnInit, Input } from "@angular/core";
import { Article } from "../models/article.model";

@Component({
  selector: "app-news-item",
  templateUrl: "./news-item.component.html",
  styleUrls: ["./news-item.component.scss"]
})
export class NewsItemComponent implements OnInit {
  @Input() article: Article;

  constructor() {}

  ngOnInit() {}
}
