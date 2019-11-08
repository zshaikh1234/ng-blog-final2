import { Component, OnInit } from "@angular/core";
import { Article } from "../article";
import { ArticleService } from "../article.service";
import { Title } from "@angular/platform-browser";
import { SharedServiceService } from "../shared-service.service";

@Component({
  selector: "app-article-list",
  templateUrl: "./article-list.component.html",
  styleUrls: ["./article-list.component.css"]
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [];

  constructor(
    private articleServive: ArticleService,
    private title: Title,
    private sharedService: SharedServiceService
  ) {}
 

  ngOnInit() {
    this.title.setTitle(`${this.sharedService.blogTitle}`);
    this.getArticles();
  }

  getArticles(): void {
    this.articleServive
      .getArticles()
      .subscribe(articles => (this.articles = articles));
  }
}
