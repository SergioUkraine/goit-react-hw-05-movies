import * as API from '../../services/api';
import { useEffect, useState } from 'react';
import MoviesList from 'components/MoviesList';

function Home() {
  const [trendMovies, setTrendMovies] = useState([]);
  useEffect(() => {
    async function getMovies() {
      try {
        const response = await API.getTrending();
        setTrendMovies(response.results);
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, []);
  return <MoviesList movies={trendMovies} />;
}

export default Home;
