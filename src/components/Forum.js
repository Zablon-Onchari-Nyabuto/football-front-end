import React, { useEffect, useState } from "react";
import NewReview from "./NewReview";
import ReviewList from "./ReviewList";

function Forum() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`football.up.railway.app/reviews/`)
      .then((r) => r.json())
      .then(reviews => setReviews(reviews))
  }, []);

  function addReview(newReview) {
    const updatedReview = setReviews(reviews => [...reviews, newReview])
  }

  return (
    <div>
      <NewReview addRev={addReview} />
      <ReviewList reviews={reviews}  />
    </div>
  );
}

export default Forum;