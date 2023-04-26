import { MovieFromGenre } from '../types/MovieFromGenre';
import Movie from './Movie';

// eslint-disable-next-line no-unused-vars
const MoviesList = ({movies}: {movies: MovieFromGenre[]}) => {
  return (
    <div className="flex flex-wrap w-5/6 gap-4">
      {movies.map(item => (
        <Movie key={item.imdb_id} data={item}/>
      ))}
    </div>
  );
};

export default MoviesList;