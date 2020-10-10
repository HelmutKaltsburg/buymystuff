import React from "react";
import PropTypes from "prop-types";

// Displays star icons based on the product rating, displays number of reviews
const Rating = ({ productRating, productReviews, color }) => {
  return (
    <div className="rating">
      <span>
        <i
          style={{ color }}
          className={
            productRating >= 1
              ? "fas fa-star"
              : productRating >= 0.5
              ? "fas fa-star-half-alt"
              : "far fa-star-"
          }
        ></i>
        <i
          style={{ color }}
          className={
            productRating >= 2
              ? "fas fa-star"
              : productRating >= 1.5
              ? "fas fa-star-half-alt"
              : "far fa-star-"
          }
        ></i>
        <i
          style={{ color }}
          className={
            productRating >= 3
              ? "fas fa-star"
              : productRating >= 2.5
              ? "fas fa-star-half-alt"
              : "far fa-star-"
          }
        ></i>
        <i
          style={{ color }}
          className={
            productRating >= 4
              ? "fas fa-star"
              : productRating >= 3.5
              ? "fas fa-star-half-alt"
              : "far fa-star-"
          }
        ></i>
        <i
          style={{ color }}
          className={
            productRating >= 5
              ? "fas fa-star"
              : productRating >= 4.5
              ? "fas fa-star-half-alt"
              : "far fa-star-"
          }
        ></i>
      </span>
      <span>{productReviews && productReviews}</span>
    </div>
  );
};

// Assigns a default color(yellow) to the "color" prop
Rating.defaultProps = {
  color: "#f8e825",
};

// Type checks props and determines whether they are required, throws warning
Rating.propTypes = {
  productRating: PropTypes.number.isRequired,
  productReviews: PropTypes.number.isRequired,
  color: PropTypes.string,
};

export default Rating;
