import UserRating from '../components/UserRating'
import React, { Fragment } from 'react'
import ReadMore from '../components/ReadMore'
import HorizontalRule from '../components/HorizontalRule'

const ReviewsList = ({ data }) => {
  let reviews = data.reviews
  console.log(data)
  return (
    <div>
      {reviews.map(x => (
        <div className="review">
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
