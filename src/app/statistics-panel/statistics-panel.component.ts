import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CoronaApiResponse } from "./models/corona-api-response.model";

@Component({
  selector: "app-statistics-panel",
  templateUrl: "./statistics-panel.component.html",
  styleUrls: ["./statistics-panel.component.scss"]
})
export class StatisticsPanelComponent implements OnInit {
  data: CoronaApiResponse;
  countryData: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get("https://sleepy-reef-17157.herokuapp.com/all")
      .subscribe(data => {
        console.log(data);
        this.data = data;
      });

    this.http
      .get("https://sleepy-reef-17157.herokuapp.com/countries")
      .subscribe(d => {
        console.log(d);
        this.countryData = d;
      });
  }
}
