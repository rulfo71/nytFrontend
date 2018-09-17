export class Article{
    web_url: string;
    snippet: string;
    headline: Headline;
    pub_date: number;
    score: number;
    isValidUrl: Boolean;
}

export class Headline {
    
    main: string;
    kicker: string;
    content_kicker: string;
    print_headline: string;
    name: object;
    seo: object;
    sub: object;
}
