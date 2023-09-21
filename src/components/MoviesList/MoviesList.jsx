import { ListContainer } from './MoviesList.styled';

import MovieItem from './MovieItem';
import MovieEmpty from './MovieEmpty';

function MoviesList({ movies }) {
  return movies.length ? (
    <ListContainer>
      {movies.map((movie, index) => {
        return movie.id ? (
          <MovieItem key={movie.id} item={movie} place={index + 1} />
        ) : null;
      })}
    </ListContainer>
  ) : (
    <MovieEmpty />
  );
}

export default MoviesList;
