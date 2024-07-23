import React, { useState } from "react";
import { StarIcon } from "../assets/star";

const StarRating = ({ numberOfStar = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function hanldeOnClick(index) {
    setRating(index);
  }

  function hanldeOnMouseMove(index) {
    setHover(index);
  }

  function hanldeOnMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="Parent h-screen">
      <div className="container text-center">
        <h1>Star Rating</h1>
        <div className="flex justify-center">
          {[...Array(numberOfStar)].map((_, index) => {
            index += 1;
            return (
              <StarIcon
                key={index}
                className={
                  index <= (hover || rating)
                    ? "fill-yellow-400"
                    : "fill-gray-400"
                }
                onClick={() => hanldeOnClick(index)}
                onMouseEnter={() => hanldeOnMouseMove(index)}
                onMouseLeave={() => hanldeOnMouseLeave()}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StarRating;
