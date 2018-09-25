import { Article } from '../Models/Article';
import { Component, OnInit } from '@angular/core';


export class SearchValidator implements OnInit {
    articles: Article [];

    ngOnInit(): void {
        this.articles = [];
    }
    public InvalidDates(begin_date: Date, end_date: Date): Boolean {
        return (begin_date > end_date);
    }
    public EmptyData(searchTheme: string, begin_date: Date, end_date: Date): Boolean {
        return (!searchTheme || !begin_date || !end_date);
    }
    public everythingOk(searchTheme: string, begin_date: Date, end_date: Date): Boolean {
        return (!this.InvalidDates(begin_date, end_date) && !this.EmptyData(searchTheme, begin_date, end_date));
    }
    // public validate0news(articles) {
    //     return articles.length == 0;
    // }
}



