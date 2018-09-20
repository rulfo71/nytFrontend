import { Component, OnInit } from '@angular/core';
import { Article } from '../Models/Article';
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
  showList: Boolean;
  isLoading: Boolean;

  constructor(
    private newsService: NewsService) { }

  ngOnInit() {
    this.noNews = false;
    this.wrongDate = false;
    // this.showList = true;
    this.isLoading = false;
    this.emptyData = false;
  }

  getNews(): void {
    if (this.validateInputs()) {

      this.noNews = false;
      this.wrongDate = false;
      this.isLoading = true;
      this.showList = true;
      this.emptyData = false;

      this.newsService.getNews(this.searchTheme, this.begin_date, this.end_date).subscribe(articles => {
        this.isLoading = false;
        this.showList = true;

        this.news = articles;
        this.validate0news(articles);
      });
    }
  }
  private validateInputs(): Boolean {
    // validate null or undefined
    if (this.validateNullOrUndefined()) {
      if (this.hasValidDates()) {
        this.wrongDate = false;
      }
      this.showList = false;
      this.emptyData = true;
      return false;
    }
    if (!this.hasValidDates()) {
      if (!this.validateNullOrUndefined){
        this.emptyData = false;
      }
      this.wrongDate = true;
      this.showList = false;
      this.noNews = false;
      return false;
    }
    return true;
  }

  private validateNullOrUndefined() {
    return (!this.searchTheme || !this.begin_date || !this.end_date)
  }
  private hasValidDates() {
    return (this.begin_date < this.end_date)
  }
  private validate0news(articles) {
    if (articles.length == 0) {
      this.noNews = true;
      this.showList = false;
    }
  }

}