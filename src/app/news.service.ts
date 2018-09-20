import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Article } from './Models/Article';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {
  }

  private articlesUrl = 'https://localhost:5001/news';  

  getNews(theme, begin_date, end_date): Observable<Article[]> {
    this.articlesUrl = 'https://localhost:5001/news';
    this.articlesUrl += '?theme=' + theme + '&begin_date=' + begin_date + '&end_date=' + end_date;
    
    return this.http.get<Article[]>(this.articlesUrl).pipe(
      catchError(this.handleError('getNews'))
    );
  }
  private  handleError<T>(operation  =  'operation',  result?: Article[]) {
    return  (error: Article[]):  Observable<Article[]>  =>  {

      alert('Oops! This is embarassing. Our server is not working. Please try again later.');
      return  of(result  as  Article[]);
    };
  }
}
