import { Container } from './MovieEmpty.styled';
import { useSearchParams, useLocation } from 'react-router-dom';

function MovieEmpty() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') ? searchParams.get('q') : '';
  const { pathname } = useLocation();
  if (pathname === '/') return null;
  return searchQuery ? (
    <Container>Нічого не знайдено :(</Container>
  ) : (
    <Container>Чекаю на запит :)</Container>
  );
}

export default MovieEmpty;
