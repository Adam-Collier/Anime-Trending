import UserRating from '../components/UserRating'

const FeaturedReview = ({ data }) => {
  let featuredReview = data.reviews[0]
  let review = featuredReview.content
  review = review.substr(0, review.lastIndexOf(' ', 240))

  return (
    <div className="featuredRating">
      <h3>Featured Review</h3>
      <UserRating review={featuredReview} />
      <p>{review}...</p>
      <style jsx>
        {`
          .featuredRating {
            padding: 0px 20px;
            background: #19191f;
            border-radius: 5px;
            grid-column: 2/3;
          }
          @media (max-width: 767px) {
            .featuredRating {
              padding: 0px 20px;
              background: #19191f;
              border-radius: 5px;
              grid-column: 1/3;
              grid-row: 2/3;
            }
          }
        `}
      </style>
    </div>
  )
}

export default FeaturedReview
