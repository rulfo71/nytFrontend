import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Article } from './Models/Article';
import { environment } from './../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {
  }

  getNews(theme, begin_date, end_date): Observable<Article[]> {
   // environment.articlesUrl = 'https://localhost:5001/news'; //esto es porque sino se pone dos veces 
    environment.articlesUrl += `?theme=${theme}&begin_date=${begin_date}&end_date=${end_date}`;

    return this.http.get<Article[]>(environment.articlesUrl).pipe(
      catchError(this.handleError('getNews'))
    );
  }
  private handleError<T>(operation = 'operation', result?: Article[]) {
    return (error: HttpErrorResponse): Observable<Article[]> => {
      this.validateErrors(error.status);
      return of(result as Article[]);
    };
  }
  private validateErrors(error) {
    switch (error) {
      case 404:
        alert("Internal problem: The Web API's url is wrong ");
        break;
      case 500:
      case 0:
        alert("The web api is down. You should talk to the web api's administrator ");
        break;
      case 503:
        alert("The New York Times API is down.");
        break;
      default:
        alert('There is a weird error, try again later..');
        break;
    }
  }
}
