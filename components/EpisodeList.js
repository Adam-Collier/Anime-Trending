import React, { Fragment } from "react";

const EpisodeList = ({ data }) => {
  return (
    <Fragment>
      {data.map(x => (
        <div className="episode" key={x.id}>
          <h2>{x.attributes.number}</h2>
          <div className="titles">
            <h3>{x.attributes.titles.en_us}</h3>
            <h5>{x.attributes.titles.ja_jp}</h5>
          </div>
          <p>
            {x.attributes.synopsis
              ? x.attributes.synopsis
              : "No description found..."}
          </p>
        </div>
      ))}
      <style jsx>
        {`
          .episode {
            display: grid;
            grid-template-columns: 60px 2fr 5fr;
            grid-template-rows: auto;
            min-height: 150px;
          }
          .titles {
            grid-column: 2/3;
            line-height: 1.4;
            padding-right: 15px;
          }
          h2,
          h3,
          p {
            margin-top: 0;
          }
          h2 {
            grid-column: 1/2;
            justify-self: center;
          }
          h3 {
            margin-bottom: 10px;
          }
          h5 {
            color: #adadad;
            margin: 0px;
          }
          p {
            grid-column: 3/4;
            padding-right: 10px;
          }
          @media (max-width: 768px) {
            .episode {
              grid-template-columns: 50px 3fr 5fr;
              padding: 0 5px 20px 0;
            }
          }
        `}
      </style>
    </Fragment>
  );
};

export default EpisodeList;
