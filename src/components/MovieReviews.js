import PropTypes from 'prop-types';
import React from 'react';


function MovieReviews(props){

  const reviewList = () => {
     return props.reviews.map((review) =>{
       return <p className="review">{review.display_title}</p>
    })
  }
  return (
    <div className="review-list">
      {reviewList()}
    </div>
  );
}

MovieReviews.defaultProps = {
  reviews: PropTypes.string.isRequired
}

export default MovieReviews
