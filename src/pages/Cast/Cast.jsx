import * as API from '../../services/api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container } from './Cast.styled';

function Cast() {
  const { movieId } = useParams();
  const [credits, setCredits] = useState({});
  useEffect(() => {
    async function getMovieCast() {
      try {
        const response = await API.getMovieCreditsById(movieId);
        setCredits(response);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieCast();
  }, [movieId]);

  if (!credits.cast) return;
  return (
    <Container>
      {credits.cast.map((actor, index) => {
        if (index > 9) return null;
        return <div key={actor.id}>{actor.name}</div>;
      })}
    </Container>
  );
}

export default Cast;
