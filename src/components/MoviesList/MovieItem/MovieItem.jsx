import { ItemLink, Image } from './MovieItem.styled';
import { useLocation } from 'react-router-dom';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

function MovieItem({ item }) {
  const location = useLocation();
  const addPath = location.pathname === '/movies' ? '' : 'movies/';

  return (
    <ItemLink to={`${addPath}${item.id}`} state={{ from: location }}>
      <Image src={IMG_BASE_URL + item.poster_path} alt={item.title} />
    </ItemLink>
  );
}

export default MovieItem;
