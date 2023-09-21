import React from 'react';
import PropTypes from 'prop-types';
import {
  Item,
  ItemLink,
  Image,
  Thumb,
  Place,
  Name,
  RateBlock,
  RateIcon,
} from './MovieItem.styled';
import { useLocation } from 'react-router-dom';
import noPosterImage from '../../../images/poster.jpg';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

function MovieItem({ item, place }) {
  const location = useLocation();
  const addPath = location.pathname === '/movies' ? '' : 'movies/';
  return (
    <Item>
      <ItemLink to={`${addPath}${item.id}`} state={{ from: location }}>
        {item.poster_path ? (
          <Image src={IMG_BASE_URL + item.poster_path} alt={item.title} />
        ) : (
          <Image src={noPosterImage} alt={'image no found'} />
        )}

        <Thumb>
          <Place>
            <RateBlock>
              <RateIcon />
              {item.vote_average.toFixed(1)}
            </RateBlock>
            {location.pathname === '/' ? <span>#{place}</span> : null}
          </Place>
          <Name>{item.title}</Name>
        </Thumb>
      </ItemLink>
    </Item>
  );
}

MovieItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
  place: PropTypes.number.isRequired,
};

export default MovieItem;
