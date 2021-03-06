import { Fragment } from 'react'
import shortid from 'shortid'

const Stats = ({ data }) => {
  let arr = [],
    average
  if (data) {
    let scores = Object.values(data.scores)
    let weight = 0
    let sum = 0

    let percentage = 0

    scores.forEach((x, i) => {
      percentage += x.percentage
      if (i % 2) {
        arr.push(percentage)
        percentage = 0
      }
      weight += x.votes * i + 1
      sum += x.votes
    })

    average = weight / sum / 2
  }

  return (
    <div className="stats">
      <Fragment>
        <h3>Ratings</h3>
        <h1>
          {average.toFixed(1)} <span>out of 5</span>
        </h1>
        <div className="grid">
          <div>
            1<span className="left">★</span>
          </div>
          {arr.map(x => (
            <span key={shortid.generate()} style={{ height: x + '%' }} />
          ))}
          <div>
            5<span className="right">★</span>
          </div>
        </div>
      </Fragment>
      <style jsx>
        {`
          .stats {
            padding: 0px 20px;
            background: #19191f;
            border-radius: 5px;
            grid-column: 1/2;
            padding: 0px 20px 20px 20px;
          }
          .grid {
            display: grid;
            grid-template-columns: 30px 1fr 1fr 1fr 1fr 1fr 30px;
            grid-template-rows: auto;
            height: 43%;
            grid-gap: 10px;
          }
          .grid div {
            align-self: end;
          }
          .grid div {
            display: inline-block;
            font-size: 15px;
            padding-right: 2px;
          }
          .grid div:first-child {
            justify-self: end;
          }
          .grid > span {
            background: #ffffff;
            align-self: end;
            margin-bottom: 3px;
          }
          .left {
            padding-left: 3px;
          }
          .right {
            padding-left: 3px;
          }
          h1 {
            font-size: 44px;
            text-align: center;
            margin-bottom: 0;
          }
          h1 span {
            font-size: 14px;
          }
          @media (max-width: 767px) {
            .stats {
              grid-column: 1/3;
            }
            .grid {
              height: 80px;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Stats
