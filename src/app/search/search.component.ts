import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { RootObj } from '../RootObj';
import { NewsService } from '../news.service';




@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  news: Article[];
  theme: string;
  begin_date: Date;
  end_date: Date;

  constructor(
    private newsService: NewsService) { }

  ngOnInit() {
  }

  getNews(): void {
    console.log('entre');
    console.log(this.theme);
    console.log(this.begin_date);
    console.log(this.end_date);
    if (Validator.validate(this.theme, this.begin_date, this.end_date)) {

      this.newsService.getNews(this.theme, this.begin_date, this.end_date).subscribe(rootObj => {
        this.news = rootObj.response.docs;
        console.log("..........");
        console.log(this.news);
      },
        newsError => {
          console.error("Error: " + newsError);
        });
    }
  }
}

export class Validator {

  static validate(theme, begin_date, end_date): Boolean {
    if (theme == null || begin_date == null || end_date == null) {
      console.log("Hay algun undefined");
      return false;
    }

    return true;
  }
  // private validateUndefineds()

}
