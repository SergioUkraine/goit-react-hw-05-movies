import { ListContainer } from './MoviesList.styled';
import MovieItem from './MovieItem';

function MoviesList({ movies }) {
  return (
    <ListContainer>
      {movies.map(movie => {
        return <MovieItem key={movie.id} item={movie} />;
      })}
    </ListContainer>
  );
}

export default MoviesList;
