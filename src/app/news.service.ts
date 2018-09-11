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

  getNews(theme,begin_date,end_date): Observable<Article[]> {
    https://localhost:5001/news?theme=trump&begin_date=20160901&end_date=20160905
    this.articlesUrl += "?theme=" + theme + "&begin_date=" + begin_date + "&end_date=" + end_date;
    return this.http.get<Article[]>(this.articlesUrl);
  }

}

