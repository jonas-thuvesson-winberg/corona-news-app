import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsApiResult } from './models/news-api-result.model';
import { Article } from './models/article.model';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  articles: Article[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get(
        'https://newsapi.org/v2/everything?apiKey=bb462d9defb2428e84b7e1695ca767f6&qInTitle=%22corona%22%20OR%20%22covid-19%22%20OR%20%22coronavirus%22%20OR%20%22corona%20virus%22&language=en&sortBy=publishedAt&pageSize=100'
      )
      .subscribe((data: NewsApiResult) => {
        this.articles = this.order(data.articles);
        console.log(data.articles);
      });
  }
  order(articles: Article[]): Article[] {
    return articles.slice().sort((a, b) => {
      const date1 = new Date(a.publishedAt);
      const date2 = new Date(b.publishedAt);
      if (date1 < date2) return 1;
      else if (date1 > date2) return -1;
      else return 0;
    });
  }
}
