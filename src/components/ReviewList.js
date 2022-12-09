import React from "react";
import ReviewTable from "./ReviewTable";

function ReviewList({ reviews, setReviews, updatedReview }) {

  function handleDelete( deletedReview ) {
    setReviews(reviews.filter(review => review.id !== deletedReview.id))
  }

  function handleUpdateReview (updatedReview) {
    setReviews(reviews.map(review => {
      if(review.id === updatedReview.id){
        return updatedReview
      }else{
        return review
      }
    }
    ))
  }
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Username</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Match</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
        </tr>
        {reviews.map((review) => (
          <ReviewTable key={review.id} setReviews={handleUpdateReview} onDelete={handleDelete} />))}
      </tbody>
    </table>
  )
}

export default ReviewList;