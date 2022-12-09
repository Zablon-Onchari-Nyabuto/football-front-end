import React, { useState } from "react";

function NewReview({ addRev }) {
  const [newReviewData, setNewReviewData] = useState({
    username: "",
    match: "",
    date: "",
    description: "",
  })

  function handleChange(e) {
    const key = e.target.id
    setNewReviewData({
      ...newReviewData,
      [key]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch(`http://127.0.0.1:3000/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReviewData),
    })
      .then((res) => res.json())
      .then((data) => addRev(data));
  }


  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields" >
          <input type="text" name="username" value={newReviewData.username} id="username" placeholder="Username" onChange={handleChange} />
          <input type="text" name="match" value={newReviewData.match} id="match" placeholder="Match" onChange={handleChange} />
          <input type="date" name="date" value={newReviewData.date} id="date" placeholder="Date" onChange={handleChange} />
          <input type="text" name="description" value={newReviewData.description} id="description" placeholder="Description" onChange={handleChange} />
        
        </div>
        <button className="ui button" type="submit" onSubmit={handleSubmit} >
          Add Review
        </button>
      </form>
    </div>
  );
}

export default NewReview;