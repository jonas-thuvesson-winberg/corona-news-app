import { Component } from "@angular/core";

type Page = "statistics" | "news";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  currentMobilePage: Page = "statistics";

  moveToPage(page: Page): void {
    this.currentMobilePage = page;
  }
}
