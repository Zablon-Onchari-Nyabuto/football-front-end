import React, { useEffect, useState } from "react";
import NewReview from "./NewReview";
import ReviewList from "./ReviewList";

function Forum() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://127.0.0.1:3000/reviews`)
      .then((r) => r.json())
      .then(data => setReviews(data))
  }, []);

  function addReview(newReview) {
    // const updatedReview = setReviews(reviews => [...reviews, newReview])
  }

  return (
    <div>
      <NewReview addRev={addReview} />
      <ReviewList reviews={reviews}  />
    </div>
  );
}

export default Forum;