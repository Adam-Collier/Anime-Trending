import React, { Fragment } from 'react'
import { withRouter } from 'next/router'
import ReadMore from './ReadMore'
import Link from 'next/link'

const animeHeader = props => {
  let { attributes: data } = props.data

  let ConditionalLink = ({ children }) => {
    return props.router.pathname === '/' ? (
      <Fragment>
        <Link as={`/anime/${props.data.id}`} href={`/post?id=${props.data.id}`}>
          <a aria-label="Read more about the biggest trending anime">
            {children}
          </a>
        </Link>
      </Fragment>
    ) : (
      children
    )
  }

  let stickyCover = props.router.pathname === '/' ? 'relative' : 'sticky'
  const fallback = `/static/default-cover.jpg`

  return (
    <Fragment>
      <div className="banner">
        <img src={data.coverImage ? data.coverImage.small : fallback} alt="" />
      </div>
      <div className="cover">
        <ConditionalLink>
          <img src={data.posterImage.small} alt="" />
        </ConditionalLink>
      </div>
      <div className="titles">
        {props.router.pathname === '/' ? <h3>#1 in Trending</h3> : null}
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
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 400px;
            background: linear-gradient(
              to top,
              rgba(32, 32, 44, 1) 20%,
              rgba(32, 32, 44, 0)
            );
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
            grid-row: 2/5;
          }
          .cover img {
            width: 100%;
            position: ${stickyCover};
            top: 10px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
          }
          .cover a img {
            margin-top: -10px;
          }
          :global(a > img) {
            margin-top: -10px;
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
            position: absolute;
            top: -26px;
          }
          p {
            margin-top: 8px;
            width: 60%;
          }
          .titles {
            position: relative;
            grid-column: 3/4;
            grid-row: 2/3;
          }
          :global(.read-more p:after) {
            grid-column: 3/4;
            --gradient-background: linear-gradient(
              to top,
              rgba(32, 32, 44, 0.95) 20%,
              rgba(32, 32, 44, 0)
            );
          }
          .read-more {
            grid-column: 3/4;
            grid-row: 3/4;
          }
          @media (min-width: 768px) {
            h1 {
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }
          }
          @media (max-width: 767px) {
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
  )
}

export default withRouter(animeHeader)
