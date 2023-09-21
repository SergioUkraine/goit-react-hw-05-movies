import * as API from '../../services/api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    async function getReviews() {
      try {
        const response = await API.getMovieReviewsById(movieId);
        setReviews(response.results);
      } catch (error) {
        console.log(error);
      }
    }
    getReviews();
  }, [movieId]);

  if (!reviews) return;
  return (
    <>
      <h2>Огляди:</h2>
      {reviews.length ? (
        <div>
          {reviews.map((review, index) => {
            if (index > 9) return null;
            return <p key={index}>{review}</p>;
          })}
        </div>
      ) : (
        <p>Нажаль оглядів не знайдено :(</p>
      )}
    </>
  );
}

export default Reviews;
