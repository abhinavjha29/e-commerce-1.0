import React from "react";
import { CiStar } from "react-icons/ci";
import { FaStarHalf } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import style from "./Review.module.css";
const Review = ({ star, reviews }) => {
  const rating = Array.from({ length: 5 }, (elm, idx) => {
    let number = idx + 0.5;
    return (
      <span key={idx}>
        {star >= idx + 1 ? (
          <FaStar className={style.icon} />
        ) : star >= number ? (
          <FaStarHalf className={style.icon} />
        ) : (
          <CiStar className={style.icon} />
        )}
      </span>
    );
  });

  return (
    <div className={style.icon_style}>
      {rating}
      <p>({reviews} customer rating)</p>
    </div>
  );
};

export default Review;
