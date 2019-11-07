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
}
