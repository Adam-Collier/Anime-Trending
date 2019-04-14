const UserRating = ({ review }) => {
  let rating = review.reviewer.scores.overall * 10
  let username = review.reviewer.username
  let avatar = review.reviewer.image_url

  return (
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
      <style jsx>
        {`
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
        `}
      </style>
    </div>
  )
}

export default UserRating
