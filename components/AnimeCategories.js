import Link from "next/link";

const AnimeItem = ({ anime }) => (
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
        flex: 0 0 auto;
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

const AnimeCategories = ({ data }) => (
  <div className="root">
    {data.map((category, index) => {
      let categoryName = Object.keys(category)[0];
      return (
        <section key={index}>
          <h1>Trending in {categoryName}</h1>
          <div className="animelist" key={categoryName}>
            {category[categoryName].map(anime => (
              <AnimeItem key={anime.id} anime={anime} />
            ))}
          </div>
        </section>
      );
    })}
    <style jsx>{`
      .root {
        position: relative;
        padding-top: 100px;
        grid-column: 1/3;
        grid-row: 3/4;
      }
      section {
        margin-bottom: 50px;
        border-radius: 5px;
        position: relative;
        width: 100vw;
      }
      section:before {
        content: "";
        position: absolute;
        left: 0;
        width: 100vw;
        bottom: -25px;
        height: 50%;
        z-index: 1;
        background: linear-gradient(to top, #1f202c 20%, rgba(0, 0, 0, 0));
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
      .animelist {
        width: 100vw;
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        position: relative;
      }
      section:after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        width: 60px;
      }
      section:after {
        background: linear-gradient(to left, #1f202c 20%, rgba(0, 0, 0, 0));
        right: 0;
      }
    `}</style>
  </div>
);

export default AnimeCategories;
