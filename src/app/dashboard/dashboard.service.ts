import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Article } from '../article';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

getArticles(): Observable <Article[]>{
  return this.http.get<Article[]>("http://localhost:8000/dashboard/overview");
}

}
