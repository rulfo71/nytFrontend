import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { RootObj } from '../RootObj';
import { NewsService } from '../news.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { forEach } from '@angular/router/src/utils/collection';


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
    console.log('entre');
    console.log(this.searchTheme);
    console.log(this.begin_date);
    console.log(this.end_date);
    this.noNews = false;

    if (this.validateInputs()) {

      this.newsService.getNews(this.searchTheme, this.begin_date, this.end_date).subscribe(rootObj => {

        this.news = rootObj.response.docs;
        console.log(this.news);
        console.log("******");
        console.log("******");
        console.log("******");
        console.log("******");
        console.log(rootObj.response.meta.hits);
        console.log("******");
        console.log("******");
        console.log("******");
        console.log("******");
        this.validations(rootObj);
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
      console.log('End date must be greater than start date');
      this.wrongDate = true;
      return false;
    }
    return true;
  }
  private validations(rootObj){
    this.validate0news(rootObj);
    this.validateNoURL(rootObj);
  }
  private validate0news(rootObj){
    if (rootObj.response.meta.hits == 0){
      this.noNews = true;
    }
  }
  private validateNoURL(rootObj){
    rootObj.response.docs.forEach(article => {
      
    });
  }
}