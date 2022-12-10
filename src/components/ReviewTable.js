import React from "react";

function ReviewTable({ reviews, onDelete, handleUpdateReview }) {
  function handleDelete(e) {
    e.preventDefault()
    fetch(`football.up.railway.app/reviews`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => onDelete(reviews));
  }
  return (
    <tr>
      <td>{reviews.username}</td>
      <td>{reviews.match}</td>
      <td>{reviews.date}</td>
      <td>{reviews.description}</td>
      <td><button className="ui button" type="submit" onClick={handleUpdateReview}>
        Update Review
      </button>
        <button className="ui button" type="submit" onClick={handleDelete}>
          Delete Review
        </button></td>
    </tr>
  );
}

export default ReviewTable;