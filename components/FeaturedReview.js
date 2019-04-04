import React from "react";

function FeaturedReview({ data }) {
  console.log(data);
  let review = data.data[0].attributes;
  console.log(review);
  return (
    <div>
      <h3>Featured Review</h3>
      <p>{review.content}</p>
      <style jsx>
        {`
          div {
            padding: 0px 20px;
            background: #19191f;
            border-radius: 5px;
            grid-column: 2/3;
          }
        `}
      </style>
    </div>
  );
}

export default FeaturedReview;
