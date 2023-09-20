import * as API from '../../services/api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList';

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') ? searchParams.get('q') : '';

  const [movies, setMovies] = useState();
  useEffect(() => {
    async function getMovieCast() {
      try {
        const response = await API.getSearchMovieByName(searchQuery);
        setMovies(response.results);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieCast();
  }, [searchQuery]);

  const handleChangeInput = e => {
    const query = e.currentTarget.value.toLowerCase();
    setSearchParams(query ? { q: query } : {});
  };

  if (!movies) return;
  return (
    <div>
      <input onChange={handleChangeInput} value={searchQuery} />
      <MoviesList movies={movies} />
    </div>
  );
}

export default Movies;
