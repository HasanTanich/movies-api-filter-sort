import { MovieCardItem } from '../types/MovieCardItem';
import { MovieFromGenre } from '../types/MovieFromGenre';
import { client } from '../utils/fetchClient';

export const getMoviesByGenre = (genre: string) => {
  return client.get<{results: MovieFromGenre[]}>(`movie/byGen/${genre}`);
};

export const getMoviesByRating = () => {
  return client.get<{results: MovieFromGenre[]}>('movie/order/byRating');
};

export const getMovieByImdbId = (imdb_id: string) => {
  return client.get<{results: MovieCardItem}>(`movie/id/${imdb_id}`);
};