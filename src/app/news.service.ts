import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RootObj } from './RootObj';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {
  }

  private articlesUrl = 'https://localhost:5001/news';  // URL to web api

  getNews(theme, begin_date, end_date): Observable<RootObj> {
    this.articlesUrl = 'https://localhost:5001/news';
    this.articlesUrl += '?theme=' + theme + '&begin_date=' + begin_date + '&end_date=' + end_date;
    console.log('Desde el servicio: ' + this.articlesUrl);
    return this.http.get<RootObj>(this.articlesUrl).pipe(
      catchError(this.handleError('getNews'))
    );
  }
  private  handleError<T>(operation  =  'operation',  result?:  RootObj) {
    return  (error: RootObj):  Observable<RootObj>  =>  {
      alert('Oops! This is embarassing. Our server is not working. Please try again later.');
      return  of(result  as  RootObj);
    }
  }
}

// const url = `${this.usersUrl}/${id}`;
//     return this.http.get<User>(url).pipe();