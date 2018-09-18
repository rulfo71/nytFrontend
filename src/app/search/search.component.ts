import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  news: Article[];
  searchTheme: string;
  begin_date: Date;
  end_date: Date;
  wrongDate: Boolean;
  emptyData: Boolean;
  noNews: Boolean;

  constructor(
    private newsService: NewsService) { }

  ngOnInit() {
  }

  getNews(): void {
    if (this.validateInputs()) {
    
    this.newsService.getNews(this.searchTheme, this.begin_date, this.end_date).subscribe(rootObj => {
        this.noNews = false;
        this.wrongDate = false;

        this.news = rootObj.response.docs;
        this.validate0news(rootObj);
      },
        newsError => {
           console.error('Error: ' + newsError);
        });
    }
  }
  private validateInputs(): Boolean {
    // validate null or undefined
    if (!this.searchTheme || !this.begin_date || !this.end_date) {
      this.emptyData = true;
      return false;
    }
    if (this.begin_date > this.end_date) {
      this.wrongDate = true;
      return false;
    }
    return true;
  }

  private validate0news(rootObj){
    if (rootObj.response.meta.hits == 0){
      this.noNews = true;
    }
  }

}