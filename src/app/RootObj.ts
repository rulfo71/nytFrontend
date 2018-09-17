export class RootObj {
    status: string;
    copyright: string;
    response: Response;
}

export class Response {
    docs: Doc[];
    meta: Meta;
}

export class Doc {
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

export class Meta {
    hits: number;
    offset: number;
    time: number;
}


