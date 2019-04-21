import UserRating from '../components/UserRating'
import React, { Fragment } from 'react'
import ReadMore from '../components/ReadMore'
import HorizontalRule from '../components/HorizontalRule'
import shortid from 'shortid'

const ReviewsList = ({ data }) => {
  let reviews = data.reviews
  return (
    <div>
      {reviews.map(x => (
        <div className="review" key={shortid.generate()}>
          <UserRating review={x} />
          <ReadMore data={x.content} />
          <HorizontalRule />
        </div>
      ))}
      <style jsx>
        {`
          .review {
            margin-bottom: 50px;
            position: relative;
            padding: 0 40px;
          }
          :global(.description:after) {
            grid-column: 3/4;
            --gradient-background: linear-gradient(
              to top,
              rgba(25, 25, 31, 0.8) 10%,
              rgba(25, 25, 31, 0)
            );
          }
          @media (max-width: 768px) {
            .review {
              padding: 0 15px;
            }
          }
        `}
      </style>
    </div>
  )
}

export default ReviewsList
