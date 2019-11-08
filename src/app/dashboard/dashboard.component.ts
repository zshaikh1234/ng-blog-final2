import { Component, OnInit } from '@angular/core';
import { ArticleOverviewComponent } from './article-overview/article-overview.component';
import {DashboardService} from './dashboard.service';
import { Article } from '../article';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  articles: Article[];

  constructor( private dashboardService: DashboardService ) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles(): void{
    this.dashboardService.getArticles().subscribe(result => this.articles = result);
  }

  togglePublishState(article: Article): void{

    article.published = !article.published;
    this.dashboardService.togglePublishedState(article).subscribe(result => {
      const index: number = this.articles.findIndex(
        currentArticle => currentArticle.id == result.id
      );
      this.articles[index] = result;
    },
    
    error => {
      article.published = !article.published;
      console.error(error);
    });
  }  



/***
  togglePublishedState(article : Article): void{
    //article.published = !article.published;
    this.dashboardService
    .togglePublishedState(article)
    .subscribe( 
      result => 
      {
        console.log(result)
      },
      error => 
      {
        console.log("Error Message " + error);
      }
    );

  }//Closing toggle Published state 
  **/

}

