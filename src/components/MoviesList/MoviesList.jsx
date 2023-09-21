import React from 'react';
import PropTypes from 'prop-types';
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

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default MoviesList;
