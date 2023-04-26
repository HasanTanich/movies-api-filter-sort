import { useEffect, useState } from 'react';

import { getGenres } from '../api/genres';
import { MovieFromGenre } from '../types/MovieFromGenre';
import { sortData } from '../utils/dataUtils';
import { getMoviesByGenre } from '../api/movies';
import { Loader, MoviesList, MySelect } from './';

export interface SelectOption {
  label: string,
  value: string
}

const MoviesPage = () => {
  const [genres, setGenres] = useState<Array<SelectOption>>([]);
  const [moviesFromGenre, setMoviesFromGenre] = useState<Array<MovieFromGenre>>([]);
  const [selectedGenre, setSelectedGenre] = useState({label: 'Adventure', value: 'Adventure'});
  const [sortKey, setSortKey] = useState({label: 'Title', value: 'title'});
  const [isLoading, setIsLoading] = useState(true);
  
  const sortOptions : SelectOption[] = [
    {label: 'Title', value: 'title'},
    {label: 'Release Year', value: 'release_year'},
    {label: 'Actor', value: 'actor'},
    {label: 'Rating', value: 'rating'},
  ];
  
  useEffect(() => {
    fetchGenresFromServer();
    setIsLoading(true);
    fetchMoviesByGenre();
  }, [selectedGenre]);
  
  const fetchGenresFromServer = async () => {
    try {
      const response = await getGenres();      
      const transformedGenres = response.results.map((item: {genre: string}) => ({ label: item.genre, value: item.genre }));
      setGenres(transformedGenres);
    } catch (err) {
      console.log(err);
      throw new Error('failed to fetch data');
    }
  };

  const fetchMoviesByGenre = async () => {
    try {
      const response = await getMoviesByGenre(selectedGenre.value);
      sortData(response.results, sortKey.value as keyof MovieFromGenre, false);
      setMoviesFromGenre(response.results);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      throw new Error('failed to fetch data');
    }
  };

  return (
    <>
      <div className="flex gap-10">
        <MySelect 
          options={genres}
          onSelectedValue={setSelectedGenre} 
          defaultValue={selectedGenre}
          label='Genre'
        />
        <MySelect 
          options={sortOptions}
          onSelectedValue={setSortKey} 
          defaultValue={sortKey}
          label='Sort By'
        />
      </div>
      <div className="mt-6">
        {(moviesFromGenre && !isLoading) && 
      <MoviesList movies={moviesFromGenre}/>}
        {isLoading && 
      <Loader />}
        {(moviesFromGenre.length === 0 && !isLoading) && 
      <h1>No movies in this genre</h1>}
      </div>
    </>
  );
};

export default MoviesPage;