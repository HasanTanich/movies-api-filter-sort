import { useNavigate } from 'react-router-dom';
import { MovieFromGenre } from '../types/MovieFromGenre';

// eslint-disable-next-line no-unused-vars
const Movie = ({data}: {data: MovieFromGenre}) => {
  const navigate = useNavigate();

  return (
    <div className="p-3 border border-gray-500 movie-card shadow-md shadow-gray-400">
      <a className="text-xl font-semibold text-gray-900 cursor-pointer" onClick={() => navigate(data.imdb_id)}>
        Title: {data.title}
      </a>
      <br />
      <br />
      <a className="text-sm font-semibold text-blue-600 cursor-pointer">
        <span className="text-gray-800 cursor-default">Imdb ID: </span>{data.imdb_id}
      </a>
    </div>
  );
};

export default Movie;