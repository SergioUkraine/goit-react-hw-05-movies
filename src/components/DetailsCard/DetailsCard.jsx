import { Container, PosterImg, Description } from './DetailsCard.styled';

const imgBaseURL = 'https://image.tmdb.org/t/p/w500/';

function DetailsCard({ movieInfo }) {
  if (!movieInfo.poster_path) return;
  const year = new Date(movieInfo.release_date).getFullYear();
  return (
    <Container>
      <PosterImg
        src={imgBaseURL + movieInfo.poster_path}
        alt={movieInfo.title}
      />
      <Description>
        <h2>{movieInfo.title}</h2>
        <h3>{year}</h3>
        <p>Рейтинг: {movieInfo.vote_average}</p>
        <p>{movieInfo.overview}</p>
      </Description>
    </Container>
  );
}

export default DetailsCard;
