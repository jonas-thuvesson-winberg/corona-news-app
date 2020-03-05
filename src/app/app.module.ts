import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { NewsListComponent } from "./news-list/news-list.component";
import { NewsItemComponent } from "./news-list/news-item/news-item.component";

@NgModule({
  declarations: [AppComponent, NewsListComponent, NewsItemComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
