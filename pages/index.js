import Layout from "../components/MyLayout.js";
import axios from "axios";

import AnimeHeader from "../components/AnimeHeader";
import AnimeContainer from "../components/AnimeContainer";

export default function Index({ data }) {
  return (
    <Layout>
      <AnimeHeader data={data.Action[0]} />
      <AnimeContainer data={data} />
    </Layout>
  );
}

Index.getInitialProps = async function() {
  var query = `
query ($genre: String){
  Page(perPage: 10) {
    media (sort: TRENDING_DESC, genre: $genre, type: ANIME){
      id
      title {
        romaji
        native
      }
      description
      coverImage {
        medium
        large
      }
      bannerImage
    }
  }
}
`;

  // Define the config we'll need for our Api request
  let url = "https://graphql.anilist.co";

  let headers = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  };

  let addGenre = genre => {
    return JSON.stringify({
      query: query,
      variables: {
        genre: genre
      }
    });
  };

  async function getData() {
    try {
      let getAction = axios.post(url, addGenre("action"), headers);
      let getAdventure = axios.post(url, addGenre("adventure"), headers);
      let getComedy = axios.post(url, addGenre("comedy"), headers);
      let getFantasy = axios.post(url, addGenre("fantasy"), headers);
      let getThriller = axios.post(url, addGenre("thriller"), headers);
      let getScifi = axios.post(url, addGenre("sci-fi"), headers);

      const [
        action,
        adventure,
        comedy,
        fantasy,
        thriller,
        scifi
      ] = await Promise.all([
        getAction,
        getAdventure,
        getComedy,
        getFantasy,
        getThriller,
        getScifi
      ]);

      let data = {
        Action: action.data.data.Page.media,
        Adventure: adventure.data.data.Page.media,
        Comedy: comedy.data.data.Page.media,
        Fantasy: fantasy.data.data.Page.media,
        Thriller: thriller.data.data.Page.media,
        Scifi: scifi.data.data.Page.media
      };

      // console.log(data);
      let dataCollection = await data;
      return dataCollection;
    } catch (error) {
      console.log(error);
    }
  }

  return { data: await getData() };
};
