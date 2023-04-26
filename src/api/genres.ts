import { Genre } from '../types/Genre';
import { client } from '../utils/fetchClient';

export const getGenres = () => {
  return client.get<{results: Genre[]}>('genres');
};
