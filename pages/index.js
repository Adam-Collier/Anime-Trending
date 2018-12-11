import Layout from "../components/MyLayout.js";
import Link from "next/link";
let fetch = require("isomorphic-unfetch");

const AnimeList = ({ show }) => (
  <div className="anime">
    <Link as={`/anime/${show.id}`} href={`/post?id=${show.id}`}>
      <div>
        <a>
          <img src={show.coverImage.large} alt="" />
          <p>{show.title.romaji}</p>
        </a>
      </div>
    </Link>
    <style jsx>{`
      .anime {
        display: inline-block;
        vertical-align: top;
        margin-right: 50px;
        border-radius: 5px;
        width: 20%;
      }
      a {
        cursor: pointer;
      }
      img {
        display: block;
        width: 100%;
        border-radius: 5px;
      }
      p {
        white-space: normal;
      }
    `}</style>
  </div>
);

function Index({ animeGenres }) {
  console.log(animeGenres);
  // Object.entries(animeGenres).map(x => console.log(x));
  // Object.entries(props.animeGenres).map(x => console.log(x));
  // console.log(props.animeGenres);

  return (
    <Layout>
      <h1>My Blog</h1>
      <div>
        {Object.entries(animeGenres).map(animeGenre => (
          <div key={animeGenre[0]}>
            {console.log(animeGenre)}
            <h1>{animeGenre[0]}</h1>
            {animeGenre[1].media.map(anime => (
              <AnimeList key={anime.id} show={anime} />
            ))}
          </div>
        ))}

        {/* {props.shows.map(show => (
        <AnimeList key={show.id} show={show} />
      ))} */}
      </div>
      <style jsx>{`
        h1,
        a {
          font-family: "Arial";
        }
        div {
          width: 100%;
          overflow-x: auto;
          overflow-y: visible;
          -webkit-overflow-scrolling: touch;
          white-space: nowrap;
        }
      `}</style>
    </Layout>
  );
}

Index.getInitialProps = async function(context) {
  var query = `
query getAnimeGenres{  
  action: Page (perPage: 10){ 
    media (sort: TRENDING_DESC, genre: "Action" ) {
      ...animeFields
    }
  }
  adventure: Page (perPage: 10){ 
    media (sort: TRENDING_DESC, genre: "Adventure" ) {
      ...animeFields
    }
  }
}

fragment animeFields on Media{
  id
  title {
    romaji
  }
  coverImage {
    medium
  }
}
`;

  // Define the config we'll need for our Api request
  var url = "https://graphql.anilist.co",
    options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        query: query
        // variables: variables
      })
    };

  // Make the HTTP Api request
  return fetch(url, options)
    .then(handleResponse)
    .then(handleData)
    .catch(handleError);

  function handleResponse(response) {
    return response.json().then(function(json) {
      return response.ok ? json : Promise.reject(json);
    });
  }

  function handleData(data) {
    console.log(data.data);
    return { animeGenres: data.data };
  }

  function handleError(error) {
    alert("Error, check console");
    console.error(error);
  }
};

export default Index;
