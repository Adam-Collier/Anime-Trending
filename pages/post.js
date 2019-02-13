import Layout from "../components/MyLayout.js";
let fetch = require("isomorphic-unfetch");
import AnimeHeader from "../components/AnimeHeader";

const Post = ({ show }) => (
  <Layout>
    <AnimeHeader data={show} />
  </Layout>
);

Post.getInitialProps = async function (context) {
  const { id } = context.query;

  var query = `
query ($id: Int){
  Media (id: $id, type: ANIME){
    id
    title {
      romaji
      english
      native
      userPreferred
    }
    bannerImage
    coverImage {
      medium
      large
    }
    description
    rankings {
      id
      context
    }
    stats {
      scoreDistribution {
        score
        amount
      }
    }
  }
}
`;

  // Define our query variables and values that will be used in the query request
  var variables = {
    id: id
  };

  // Define the config we'll need for our Api request
  var url = "https://graphql.anilist.co",
    options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        query: query,
        variables: variables
      })
    };

  fetch(`https://kitsu.io/api/edge/episodes?filter%5BmediaType%5D=Anime&filter%5Bmedia_id%5D=13209&sort=number`)
    .then((response) => response.json())
    .then(data => console.log(data));

  // Make the HTTP Api request
  return fetch(url, options)
    .then(handleResponse)
    .then(handleData)
    .catch(handleError);

  function handleResponse(response) {
    return response.json().then(function (json) {
      return response.ok ? json : Promise.reject(json);
    });
  }

  function handleData(data) {
    return { show: data.data.Media };
  }

  function handleError(error) {
    alert("Error, check console");
    console.error(error);
  }
};

export default Post;
