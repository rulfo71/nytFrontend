import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RootObj } from './RootObj';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {
  }

  private articlesUrl = 'https://localhost:5001/news';  // URL to web api

  getNews(theme,begin_date,end_date): Observable<RootObj> {
    this.articlesUrl += "?theme=" + theme + "&begin_date=" + begin_date + "&end_date=" + end_date;
    console.log("Desde el servicio: " + this.articlesUrl);
    return this.http.get<RootObj>(this.articlesUrl);
  }
}

// const url = `${this.usersUrl}/${id}`;
//     return this.http.get<User>(url).pipe();