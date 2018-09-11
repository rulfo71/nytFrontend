import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './article';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {
  }

  private articlesUrl = 'http://localhost:5001/news';  // URL to web api

  getNews(): Observable<Article[]> {
    return this.http.get<Article[]>(this.articlesUrl);
  }

}

