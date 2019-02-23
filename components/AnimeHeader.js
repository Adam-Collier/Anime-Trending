import React, { Fragment } from "react";
import { withRouter } from "next/router";
import ReadMore from "./ReadMore";
import Link from "next/link";

const animeHeader = props => {
  let { data } = props;

  let ConditionalLink = ({ children }) => {
    return props.router.pathname === "/" ? (
      <Link as={`/anime/${data.id}`} href={`/post?id=${data.id}`}>
        <a>{children}</a>
      </Link>
    ) : (
      children
    );
  };

  let stickyCover = props.router.pathname === "/" ? "relative" : "sticky";

  return (
    <Fragment>
      <div className="banner">
        <img src={data.attributes.coverImage.large} alt="" />
      </div>
      <div className="cover">
        <ConditionalLink>
          <img src={data.attributes.posterImage.medium} alt="" />
        </ConditionalLink>
      </div>
      <div className="description">
        {props.router.pathname === "/" ? <h3>#1 in Trending</h3> : null}
        <ConditionalLink>
          <Fragment>
            <h1>{data.attributes.titles.en}</h1>
            <h2>{data.attributes.titles.ja_jp}</h2>
          </Fragment>
        </ConditionalLink>
        <ReadMore synopsis={data.attributes.synopsis} />
      </div>
      <style jsx>
        {`
          .banner {
            grid-row: 1/2;
            grid-column: 1/5;
            position: relative;
            z-index: -1;
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
            margin: 0 auto;
            margin-top: -220px;
            z-index: 3;
            display: flex;
          }
          .cover {
            width: 25%;
            width: 210px;
            grid-column: 2/3;
            grid-row: 2/4;
            margin-top: -220px;
          }
          .cover img {
            width: 100%;
            position: ${stickyCover};
            top: 10px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
          }
          .description {
            grid-row: 2/3;
            grid-column: 3/4;
            margin-top: -220px;
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
    </Fragment>
  );
};

export default withRouter(animeHeader);
