const FeaturedReview = ({ data }) => {
  let featuredReview = data.reviews[0]
  let review = featuredReview.content
  review = review.substr(0, review.lastIndexOf(' ', 240))
  let rating = featuredReview.reviewer.scores.overall * 10
  let username = featuredReview.reviewer.username
  let avatar = featuredReview.reviewer.image_url

  return (
    <div className="featuredRating">
      <h3>Featured Review</h3>
      <div className="user">
        <div className="rating">
          <div className="stars">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
        </div>
        <div className="profile">
          <p>{username}</p>
          <img src={avatar} alt="" />
        </div>
      </div>

      <p>{review}...</p>
      <style jsx>
        {`
          .featuredRating {
            padding: 0px 20px;
            background: #19191f;
            border-radius: 5px;
            grid-column: 2/3;
          }
          .user {
            display: flex;
            justify-content: space-between;
          }
          .rating {
            display: inline-block;
            position: relative;
            color: #ffffff;
          }
          .stars {
            --rating-width: 0%;
            overflow: hidden;
            width: ${rating}%;
          }
          span {
            padding: 0 1px;
          }
          .profile {
            display: flex;
          }
          .profile p {
            margin: 0;
            color: #ccc;
          }
          img {
            width: 25px;
            height: 25px;
            border-radius: 50%;
            margin-left: 10px;
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
