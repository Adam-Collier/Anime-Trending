import Layout from "../components/MyLayout.js";
let fetch = require("isomorphic-unfetch");

const Post = ({ show }) => (
  <Layout>
    {console.log(show[0].coverImage.medium)}
    {/* <h1>{props.router.query.id}</h1> */}
    <img className="banner" src={show[0].bannerImage} alt="" />
    <img src={show[0].coverImage.large} alt="" />

    <style jsx global>{`
      .banner {
        width: 100%;
      }
    `}</style>
  </Layout>
);

Post.getInitialProps = async function(context) {
  console.log(context);
  const { id } = context.query;

  var query = `
query ($id: Int){
  Page{
    media (id: $id, type: ANIME){
      id
      title {
        romaji
        english
        native
        userPreferred
      }
      bannerImage
      coverImage {
        extraLarge
        large
        medium
      }
      rankings {
        id
        context
      }
      stats{
        scoreDistribution {
          score
          amount
        }
      }
    }
    pageInfo {
      total
      perPage
      currentPage
      lastPage
      hasNextPage
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
    return { show: data.data.Page.media };
  }

  function handleError(error) {
    alert("Error, check console");
    console.error(error);
  }
};

export default Post;
