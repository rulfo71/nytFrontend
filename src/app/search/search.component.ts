import { Component, OnInit } from '@angular/core';
import { Article } from '../Models/Article';
import { SearchValidator } from '../Models/SearchValidator';
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
  validator: SearchValidator;
  noNews: Boolean;
  showList: Boolean;
  isLoading: Boolean;

  constructor(
    private newsService: NewsService) { }

  ngOnInit() {
    this.validator = new SearchValidator();
    this.showList = true;
  }

  getNews(): void {
    this.isLoading = true;
    this.showList = false;
      this.newsService.getNews(this.searchTheme, this.begin_date, this.end_date).subscribe(articles => {
        this.isLoading = false;
        this.showList = true;
        this.news = articles;
        this.validate0news(articles);
        // this.validator.validate0news(articles);
      });
    }
  validate0news(articles) {
    if (articles.length == 0) {
      this.noNews = true;
      this.showList = false;
    }
  }
}
