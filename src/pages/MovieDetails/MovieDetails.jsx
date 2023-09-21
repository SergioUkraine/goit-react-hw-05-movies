import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useEffect, useState, Suspense, useRef } from 'react';
import * as API from '../../services/api';
import { Containter } from './MovieDetails.styled';
import DetailCard from 'components/DetailsCard';
import Loader from 'components/Loader';
import BackLink from 'components/BackLink';
import DetailsControls from 'components/DetailsControls';

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
      <BackLink backRef={refbackLink.current} />
      <DetailCard movieInfo={movieDetails}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </DetailCard>
      <DetailsControls />
    </Containter>
  );
}

export default MovieDetails;
