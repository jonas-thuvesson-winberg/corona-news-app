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
      .get("https://glacial-escarpment-56967.herokuapp.com/all")
      // .get("http://localhost:3000/all")
      .subscribe(data => {
        console.log(data);
        this.data = data;
      });

    this.http
      .get("https://glacial-escarpment-56967.herokuapp.com/countries")
      // .get("http://localhost:3000/countries")
      .subscribe(d => {
        console.log(d);
        this.countryData = d;
      });
  }
}
