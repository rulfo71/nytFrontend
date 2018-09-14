import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    this.articlesUrl += "?theme=" + theme + "&begin_date=" + begin_date + "&end_date=" + end_date;
    console.log("Desde el servicio: " + this.articlesUrl);
    return this.http.get<RootObj>(this.articlesUrl).pipe(catchError(this.handleError('getHeroes', [])));
  }
  /**
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

// const url = `${this.usersUrl}/${id}`;
//     return this.http.get<User>(url).pipe();