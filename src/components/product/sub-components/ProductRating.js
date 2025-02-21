import PropTypes from "prop-types";
import React, { Fragment } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";


const ProductRating = ({ ratingValue }) => {
  let rating = [];

  for (let i = 0; i < 5; i++) {
    rating.push(<i className="fa fa-star-o" key={i}></i>);
  }
  if (ratingValue && ratingValue > 0) {
    for (let i = 0; i <= ratingValue - 1; i++) {
      rating[i] = <i className="fas fa-star yellow" key={i} style={{fontSize : "14px"}}></i>
      ;
    }
  }
  return <Fragment>{rating}</Fragment>;
};

ProductRating.propTypes = {
  ratingValue: PropTypes.number
};

export default ProductRating;
