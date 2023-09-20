import * as API from '../../services/api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState({});
  useEffect(() => {
    async function getReviews() {
      try {
        const response = await API.getMovieReviewsById(movieId);
        setReviews(response);
      } catch (error) {
        console.log(error);
      }
    }
    getReviews();
  }, [movieId]);

  useEffect(() => {
    console.log(reviews);
  }, [reviews]);

  if (!reviews) return;
  return (
    <div>
      {/* {credits.cast.map((actor, index) => {
        if (index > 9) return null;
        return <div key={actor.id}>{actor.name}</div>;
      })} */}
    </div>
  );
}

export default Reviews;
