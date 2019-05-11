const DefaultReviewStat = ({ component }) => {
  return (
    <div className="default">
      <div>
        <img src="/static/sad-face.png" alt="" />
      </div>
      <p>Oh no! no data available!</p>
      <style jsx>
        {`
          .default {
            padding: 0px 20px;
            background: #19191f;
            border-radius: 5px;
            grid-column: ${component === 'stats' ? '1 / 2' : '2 / 3'};
            min-height: 230px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
          img {
            width: 40%;
            height: auto;
            display: block;
            margin: 0 auto;
            margin-bottom: 15px;
          }
          p {
            margin: 0px;
          }
          @media (max-width: 767px) {
            .default {
              grid-column: 1/3;
              padding: 10px 20px;
            }
          }
        `}
      </style>
    </div>
  )
}

export default DefaultReviewStat
