import Link from "next/link";

const AnimeList = ({ anime }) => (
  <div className="anime">
    <Link as={`/anime/${anime.id}`} href={`/post?id=${anime.id}`}>
      <div>
        <a>
          <img src={anime.attributes.posterImage.medium} alt="" />
        </a>
      </div>
    </Link>
    <style jsx>{`
      .anime {
        display: inline-block;
        vertical-align: top;
        margin-right: 20px;
        border-radius: 5px;
        width: 200px;
      }
      a {
        cursor: pointer;
      }
      img {
        width: 100%;
        height: 260px;
        object-fit: cover;
        border-radius: 5px;
      }
      p {
        color: rgba(255, 255, 255, 0.8);
        white-space: normal;
        font-size: 1rem;
      }
    `}</style>
  </div>
);

const AnimeContainer = ({ data }) => (
  <div className="root">
    {data.map((category, index) => {
      let categoryName = Object.keys(category)[0]
      return (
        <section key={index}>
          <h1>Trending in {categoryName}</h1>
          <div key={categoryName}>
            {category[categoryName].map(anime => (
              <AnimeList key={anime.id} anime={anime} />
            ))}
          </div>
        </section>
      );
    })}
    <style jsx>{`
      .root {
        width: 80%;
        margin: 0 auto;
        position: relative;
        padding-top: 50px;
      }
      h1 {
        font-weight: 600;
        font-size: 2rem;
        position: absolute;
        left: 0;
        bottom: -13px;
        z-index: 2;
        padding-left: 30px;
        margin: 0;
      }
      div {
        width: 100%;
        overflow-x: auto;
        overflow-y: visible;
        -webkit-overflow-scrolling: touch;
        white-space: nowrap;
        position: relative;
      }
      div:before,
      div:after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        width: 60px;
      }
      div:after {
        background: linear-gradient(to left, #1f202c 20%, rgba(0, 0, 0, 0));
        right: 0;
      }
      section {
        margin-bottom: 100px;
        border-radius: 5px;
        position: relative;
      }
      section:before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -25px;
        height: 50%;
        z-index: 1;
        background: linear-gradient(to top, #1f202c 20%, rgba(0, 0, 0, 0));
      }
    `}</style>
  </div>
);

export default AnimeContainer;
