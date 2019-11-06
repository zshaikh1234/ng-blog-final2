import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { SharedServiceService } from "../shared-service.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  title1 = "About";
  constructor(
    private title: Title,
    private sharedService: SharedServiceService
  ) {}

  ngOnInit() {
    this.title.setTitle(`${this.title1} - ${this.sharedService.blogTitle}`);
  }
}
