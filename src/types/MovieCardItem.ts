/* eslint-disable @typescript-eslint/no-explicit-any */
export interface MovieCardItem {
    imdb_id: string;
    title: string;
    year: number;
    popularity: number;
    description: string;
    content_rating: string;
    movie_length: number;
    rating: number;
    created_at: string;
    trailer: string;
    image_url: string;
    release: string;
    plot: string;
    banner: string;
    type: string;
    more_like_this?: any[];
    gen: [
        {id: number, genre: string},
    ];
    keywords: [
        {id: number, keyword: string}
    ];
}