import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-statistics-panel",
  templateUrl: "./statistics-panel.component.html",
  styleUrls: ["./statistics-panel.component.scss"]
})
export class StatisticsPanelComponent implements OnInit {
  data: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    //   this.http
    //     .get("https://corona.lmao.ninja/all")
    //     .subscribe(data => console.log(data));
    //
  }
}
