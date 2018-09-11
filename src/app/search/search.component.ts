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

  constructor(
    private newsService: NewsService) { }

  ngOnInit() {
  }

  getNews(): void {
    console.log('entre');


    this.newsService.getNews().subscribe(news => {
      this.news = news;
    },
      newsError => {
        console.error("Error: " + newsError);
      });
  }
}
