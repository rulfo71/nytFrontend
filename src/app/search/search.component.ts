import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { RootObj } from '../RootObj';
import { NewsService } from '../news.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


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

  constructor(
    private newsService: NewsService) { }

  ngOnInit() {
  }

  getNews(): void {
    console.log('entre');
    console.log(this.searchTheme);
    console.log(this.begin_date);
    console.log(this.end_date);

    if (this.validations()) {

      this.newsService.getNews(this.searchTheme, this.begin_date, this.end_date).subscribe(rootObj => {

        this.news = rootObj.response.docs;
        this.checkValidUrl();
        console.log(this.news);
      },
        newsError => {
          console.error('Error: ' + newsError);
        });
    }
  }
  validations(): Boolean {
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
  private checkValidUrl() {

    // this.news.forEach(article => {
    //   console.log('..........');
    //   console.log('..........');
    //   console.log('..........');
    //   console.log('..........');
    //   console.log('..........');
    //   console.log('..........');
    //   //this.http.request(article.web_url).subscribe(response => this.friends = response.text());
    //   //console.log(this.http.get(article.web_url).subscribe)

    //   // console.log(this.http.get(article.web_url));
    //   // var response = this.http.get(article.web_url);
    //   // console.log(this.http.get(article.web_url).subscribe());
    //   //var hc = new HttpResponse()
      
    //   try {
       
    //     console.log("hawaii");
    //     console.log("hawaii");
    //     console.log("hawaii");
    //     console.log("hawaii");
    //     console.log("hawaii");
    //     console.log("hawaii");
    //   }
    //   catch (HttpRequestException) {
    //     console.log("alojaaa");
    //     console.log("alojaaa");
    //     console.log("alojaaa");
    //     console.log("alojaaa");
    //     console.log("alojaaa");
    //   }
    //   console.log('..........');
    //   console.log('..........');
    //   console.log('..........');
    //   console.log('..........');
    //   console.log('..........');
    //   console.log("*******");
    //   console.log("*******");
    //   console.log("*******");

    // // //   //console.log(result);
    // // //   console.log("*******");
    // // //   console.log("*******");
    // // //   console.log("*******");

    // });
  }
}
