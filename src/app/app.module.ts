import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { NewsListComponent } from "./news-list/news-list.component";
import { NewsItemComponent } from "./news-list/news-item/news-item.component";
import { StatisticsPanelComponent } from "./statistics-panel/statistics-panel.component";
import { FooterComponent } from "./footer/footer.component";
import { NewsApiServiceContract } from "./services/news-api.service-contract";
import { NewsApiService } from "./services/news-api.service";
import { NewsApiMockService } from "./services/news-api.mock-service";

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    NewsItemComponent,
    StatisticsPanelComponent,
    FooterComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    { provide: NewsApiServiceContract, useClass: NewsApiMockService },
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
