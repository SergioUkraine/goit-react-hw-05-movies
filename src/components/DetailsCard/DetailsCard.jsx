import { Container, PosterImg, Description, Inner } from './DetailsCard.styled';
import noPosterImage from '../../images/poster.jpg';

const imgBaseURL = 'https://image.tmdb.org/t/p/w500/';

function DetailsCard({ movieInfo, children }) {
  const year = new Date(
    movieInfo.release_date ? movieInfo.release_date : null
  ).getFullYear();
  return (
    <Container>
      <div>
        {movieInfo.poster_path ? (
          <PosterImg
            src={imgBaseURL + movieInfo.poster_path}
            alt={movieInfo.title}
          />
        ) : (
          <PosterImg src={noPosterImage} alt={'image no found'} />
        )}
      </div>
      <Description>
        <h2>{movieInfo.title}</h2>
        <h3>{year}</h3>
        {movieInfo.vote_average ? (
          <p>Рейтинг: {movieInfo.vote_average.toFixed(1)}</p>
        ) : null}

        {movieInfo.overview ? (
          <>
            <h3>Опис</h3>
            <p>{movieInfo.overview}</p>
          </>
        ) : null}
      </Description>
      <Inner>{children}</Inner>
    </Container>
  );
}

export default DetailsCard;
