import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useEffect, useState, Suspense, useRef } from 'react';
import * as API from '../../services/api';
import {
  Containter,
  BackLink,
  BackLinkIcon,
  BackLinkText,
  CastLink,
  ReviewsLink,
} from './MovieDetails.styled';
import DetailCard from 'components/DetailsCard';
import Loader from 'components/Loader';

const IMG_ORIGIN_URL = 'https://image.tmdb.org/t/p/original/';

function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setmovieDetails] = useState([]);

  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  const refbackLink = useRef(backLink);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const response = await API.getDetailsById(movieId);
        setmovieDetails(response);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieDetails();
  }, [movieId]);

  const backgroundImgURL = movieDetails.backdrop_path
    ? IMG_ORIGIN_URL + movieDetails.backdrop_path
    : null;

  return (
    <Containter backImg={backgroundImgURL}>
      <BackLink to={refbackLink.current}>
        <BackLinkIcon />
        <BackLinkText>Back</BackLinkText>
      </BackLink>
      <DetailCard movieInfo={movieDetails} />
      <CastLink to={'cast'}>Cast</CastLink>
      <ReviewsLink to={'reviews'}>Reviews</ReviewsLink>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Containter>
  );
}

export default MovieDetails;
