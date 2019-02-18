import React from "react";
import { withRouter } from "next/router";
import ReadMore from "./ReadMore";

const animeHeader = props => {
  let data = props.data;
  return (
    <div>
      <div className="banner">
        <img src={data.attributes.coverImage.large} alt="" />
      </div>
      <div className="content">
        <div className="cover">
          <img src={data.attributes.posterImage.medium} alt="" />
        </div>
        <div className="description">
          {props.router.pathname === "/" ? <h3>#1 in Trending</h3> : null}
          <h1>{data.attributes.titles.en}</h1>
          <h2>{data.attributes.titles.ja_jp}</h2>
          <ReadMore synopsis={data.attributes.synopsis} />
        </div>
      </div>
      <style jsx>
        {`
          .banner {
            position: relative;
          }
          .banner:after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 100%;
            background: linear-gradient(to top, #1f202c 20%, rgba(0, 0, 0, 0));
          }
          .banner img {
            width: 100%;
            height: 400px;
            object-fit: cover;
          }
          .content {
            position: relative;
            width: 80%;
            margin: 0 auto;
            margin-top: -220px;
            z-index: 3;
            display: flex;
          }
          .cover {
            width: 25%;
            min-width: 170px;
            max-width: 240px;
            margin-right: 30px;
          }
          .cover img {
            width: 100%;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
          }
          h1 {
            margin-top: 0px;
            margin-bottom: 0px;
          }
          h2 {
            margin-top: 8px;
            margin-bottom: 0px;
          }
          h3 {
            margin: 0;
            margin-bottom: 6px;
          }
          p {
            margin-top: 8px;
            width: 60%;
          }
        `}
      </style>
    </div>
  );
};

export default withRouter(animeHeader);
