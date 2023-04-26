import { useEffect, useState } from 'react';
import { getMovieByImdbId } from '../api/movies';
import { MovieCardItem } from '../types/MovieCardItem';
import { useParams } from 'react-router-dom';
import Loader from './Loader/Loader';

const MovieDetails= () => {
  const {id} = useParams();
  const [movie, setMovie] = useState<MovieCardItem>();
  const [isLoading, setIsLoading] = useState(true);

  const fetchMoviesByImdbId = async () => {
    try {
      const response = await getMovieByImdbId(id as string);
      setMovie(response.results);
      setIsLoading(false);
    } catch (err) {
      throw new Error('failed to fetch data');
    }
  };

  useEffect(() => {
    fetchMoviesByImdbId();
  }, []);
  
  if(isLoading){
    return <Loader />;
  }

  if(!movie) {
    return <h1>Data not found!</h1>;
  }
  
  const {imdb_id, title, year, popularity, description, content_rating, rating, 
    created_at, trailer, image_url, release, plot, type, gen, keywords, movie_length} 
    = movie;

  const genres = gen.reduce((joined: string, currentValue: { genre: string; }) => joined + (currentValue.genre+ ', '), '');
  const movieKeywords = keywords.reduce((joined: string, currentValue: { keyword: string }) => joined + (currentValue.keyword+ ', '), '');
  
  const pElementsArray = [
    {title: 'Title', value: title}, 
    {title: 'type', value: type},
    {title: 'Movie Length', value: movie_length+' minutes'},
    {title: 'Rating', value: rating}, 
    {title: 'popularity', value: popularity}, 
    {title: 'Year', value: year},
    {title: 'Created At', value: created_at},
    {title: 'release', value: release},
    {title: 'Content Rating', value: content_rating}, 
    {title: 'Genre', value: genres},
    {title: 'Keywords', value: movieKeywords},
    {title: 'plot', value: plot},
    {title: 'description', value: description},
    {title: 'ID', value: imdb_id},
  ];

  return (
    <div className="flex flex-col items-center border border-gray-500 rounded shadow-md shadow-gray-800">
      <img src={image_url} alt={title+' image'} />
      {pElementsArray.map((item, index) => (
        <p className="self-stretch p-2" key={index}>
          <span className="font-semibold capitalize">{item.title+': '} </span> 
          {item.value}
        </p>
      ))}
      <a href={trailer} className="p-2 text-blue-500 cursor-pointer self-start">
        Trailer
      </a>
    </div>
  );
};

export default MovieDetails;