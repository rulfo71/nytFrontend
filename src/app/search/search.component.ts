import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { NewsService } from '../news.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  news: string;
  theme: string;
  begin_date: string;
  end_date: string;

  constructor(
    private newsService: NewsService) { }

  ngOnInit() {
  }

  getNews(): void {
    console.log('entre');
    console.log(this.theme);
    console.log(this.begin_date);
    console.log(this.end_date);

    this.newsService.getNews(this.theme,this.begin_date,this.end_date).subscribe(news => {
      this.news = news;
      console.log(news);
    },
      newsError => {
        console.error("Error: " + newsError);
      });
  }
}
