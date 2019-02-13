import Layout from "../components/MyLayout.js";
import axios from "axios";

import AnimeHeader from "../components/AnimeHeader";
import AnimeContainer from "../components/AnimeContainer";

export default function Index({ trending, data }) {
  return (
    <Layout>
      <AnimeHeader data={trending} />
      <AnimeContainer data={data} />
    </Layout>
  );
}

Index.getInitialProps = async function () {
  var query = `
  query ($genre: String){
    Page(perPage: 10) {
      media (sort: TRENDING_DESC, genre: $genre, type: ANIME){
        id
        coverImage {
          large
        }
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

  async function getListData() {
    try {
      let getAction = axios.post(url, addGenre("action"), headers);
      let getAdventure = axios.post(url, addGenre("adventure"), headers);
      let getComedy = axios.post(url, addGenre("comedy"), headers);
      let getFantasy = axios.post(url, addGenre("fantasy"), headers);
      let getThriller = axios.post(url, addGenre("thriller"), headers);
      let getScifi = axios.post(url, addGenre("sci-fi"), headers);

      console.log("starting to get the data");
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

      let dataCollection = await data;
      return dataCollection;
    } catch (error) {
      console.log(error);
    }
  }

  var trendingQuery = `
query {
  Media (sort: TRENDING_DESC, type: ANIME){
    id
    title {
      romaji
      native
    }
    bannerImage
    coverImage {
      large
    }
    description
  }
}
`;

  async function getTrendingHeader() {
    try {
      let trendingData = axios.post(url, { query: trendingQuery }, headers)
      let trendingHeader = await trendingData;
      return trendingHeader.data.data.Media;
    } catch (error) {
      console.log(error);
    }
  }

  return { trending: await getTrendingHeader(), data: await getListData() };
};