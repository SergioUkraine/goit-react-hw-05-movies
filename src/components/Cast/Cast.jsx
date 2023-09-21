import * as API from '../../services/api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container, Title, CastList, CastItem } from './Cast.styled';

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
      <Title>У ролях:</Title>
      <CastList>
        {credits.cast.map((actor, index) => {
          if (index > 9) return null;
          return <CastItem key={actor.id}>{actor.name}</CastItem>;
        })}
      </CastList>
    </Container>
  );
}

export default Cast;
