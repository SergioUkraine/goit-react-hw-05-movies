import * as API from '../../services/api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList';
import SearchBar from 'components/SearchBar';
import Loader from 'components/Loader';

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const searchQuery = searchParams.get('q') ? searchParams.get('q') : '';

  const [movies, setMovies] = useState();
  useEffect(() => {
    async function getMovieCast() {
      setIsLoading(true);
      try {
        const response = await API.getSearchMovieByName(
          searchQuery.toLowerCase()
        );
        setMovies(response.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieCast();
  }, [searchQuery]);

  const handleChangeInput = e => {
    const query = e.currentTarget.value;
    setSearchParams(query ? { q: query } : {});
  };

  return (
    <div>
      <SearchBar handleChange={handleChangeInput} setValue={searchQuery} />
      {movies ? <MoviesList movies={movies} /> : null}
      {isLoading ? <Loader /> : null}
    </div>
  );
}
export default Movies;
