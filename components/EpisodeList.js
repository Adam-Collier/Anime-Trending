import React, { Fragment } from "react";

const EpisodeList = ({ data }) => {
  return data.map((x, i) => {
    return (
      <Fragment>
        <div className="episode" key={i}>
          <div className="description">
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
        </div>
        <hr />
        <style jsx>
          {`
            .episode {
              padding: 15px 0px;
            }
            .episode,
            .description {
              display: flex;
              min-height: 100px;
            }
            .titles {
              line-height: 1.4;
              width: 35%;
              margin-right: 5%;
            }
            h2,
            h3,
            p {
              margin-top: 0;
            }
            h2 {
              margin-right: 2.5%;
            }
            h3 {
              margin-bottom: 10px;
            }
            h5 {
              color: #adadad;
              margin: 0px;
            }
            p {
              width: 65%;
            }
            hr {
              display: block;
              height: 1px;
              border: 0;
              border-top: 1px solid rgba(255, 255, 255, 0.3);
              margin: 1em 0;
              padding: 0;
            }
          `}
        </style>
      </Fragment>
    );
  });
};

export default EpisodeList;
