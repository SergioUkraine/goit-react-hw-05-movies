import * as API from '../../services/api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container, Title, CastList, CastItem } from './Cast.styled';

function Cast() {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);
  useEffect(() => {
    async function getMovieCast() {
      try {
        const response = await API.getMovieCreditsById(movieId);
        setCredits(response.cast);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieCast();
  }, [movieId]);

  if (!credits) return;
  return (
    <Container>
      <Title>У ролях:</Title>
      {credits.length ? (
        <CastList>
          {credits.map((actor, index) => {
            if (index > 9) return null;
            return <CastItem key={actor.id}>{actor.name}</CastItem>;
          })}
        </CastList>
      ) : (
        <p>Нажаль акторського складу знайдено :(</p>
      )}
    </Container>
  );
}

export default Cast;
