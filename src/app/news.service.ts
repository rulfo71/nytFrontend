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

  private articlesUrl = 'https://localhost:5001/news';  // URL to web api

  getNews(theme,begin_date,end_date): Observable<string> {
    this.articlesUrl += "?theme=" + theme + "&begin_date=" + begin_date + "&end_date=" + end_date;
    return this.http.get<string>(this.articlesUrl);
  }

}

