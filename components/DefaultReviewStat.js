const DefaultReviewStat = ({ component }) => {
  return (
    <div className="default">
      <p>sorry but no data available</p>
      <style jsx>
        {`
          .default {
            padding: 0px 20px;
            background: #19191f;
            border-radius: 5px;
            grid-column: ${component === 'stats' ? 1 / 2 : 2 / 3};
            min-height: 230px;
          }
        `}
      </style>
    </div>
  )
}

export default DefaultReviewStat
