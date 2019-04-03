import AnimeItem from './AnimeItem'

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
        grid-column: 1/3;
        grid-row: 4/5;
        padding-top: 100px;
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
        padding: 15px;
        margin: 0;
      }
      .animelist {
        width: 100vw;
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        position: relative;
      }
      section:after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        width: 60px;
        background: linear-gradient(to left, #1f202c 20%, rgba(0, 0, 0, 0));
      }
      @media (max-width: 768px) {
        .root {
          padding-top: 40px;
        }
      }
    `}</style>
  </div>
);

export default AnimeCategories;
