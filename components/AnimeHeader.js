import React, { Fragment } from "react";
import { withRouter } from "next/router";
import ReadMore from "./ReadMore";
import Link from "next/link";

const animeHeader = props => {
  let { attributes: data } = props.data;

  let ConditionalLink = ({ children }) => {
    return props.router.pathname === "/" ? (
      <Link as={`/anime/${props.data.id}`} href={`/post?id=${props.data.id}`}>
        <a aria-label="Read more about the biggest trending anime">
          {children}
        </a>
      </Link>
    ) : (
      children
    );
  };

  let stickyCover = props.router.pathname === "/" ? "relative" : "sticky";

  return (
    <Fragment>
      <div className="banner">
        <img
          src={
            data.coverImage
              ? data.coverImage.large
              : `/static/default-cover.jpg`
          }
          alt=""
        />
      </div>
      <div className="cover">
        <ConditionalLink>
          <img src={data.posterImage.medium} alt="" />
        </ConditionalLink>
      </div>
      <div className="titles">
        {props.router.pathname === "/" ? <h3>#1 in Trending</h3> : null}
        <ConditionalLink>
          <Fragment>
            <h1>{data.titles.en}</h1>
            <h2>{data.titles.ja_jp}</h2>
          </Fragment>
        </ConditionalLink>
      </div>
      <div className="read-more">
        <ReadMore data={data.synopsis} />
      </div>
      <style jsx>
        {`
          .banner {
            grid-row: 1/4;
            grid-column: 1/5;
            position: relative;
            z-index: -1;
          }
          .banner:after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 400px;
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
            z-index: 3;
            display: flex;
          }
          .cover {
            width: 25%;
            width: 210px;
            grid-column: 2/3;
            grid-row: 2/4;
          }
          .cover img {
            width: 100%;
            position: ${stickyCover};
            top: 10px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
          }
           {
            /* .description {
            grid-row: 2/3;
            grid-column: 3/4;
            margin-top: -220px;
            --gradient-background: linear-gradient(
              to top,
              #1f202c 20%,
              rgba(31, 32, 44, 0)
            );
          } */
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
          .titles {
            grid-column: 3/4;
            grid-row: 2/3;
          }
          .read-more {
            grid-column: 3/4;
            grid-row: 3/4;
          }
          @media (max-width: 768px) {
            .cover {
              grid-column: 3/4;
              grid-row: 2/3;
              width: 100%;
            }
            .cover img {
              position: relative;
            }
            .titles {
              grid-column: 2/3;
              grid-row: 2/3;
              width: calc(100% - 10px);
              align-self: end;
            }
            .read-more {
              padding-top: 20px;
              grid-column: 2/4;
              grid-row: 3/4;
            }
          }
        `}
      </style>
    </Fragment>
  );
};

export default withRouter(animeHeader);
