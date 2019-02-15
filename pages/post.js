import Layout from "../components/MyLayout.js";
let fetch = require("isomorphic-unfetch");
import axios from "axios";
import AnimeHeader from "../components/AnimeHeader";

const Post = ({ header }) => (
  <Layout>
    <AnimeHeader data={header} />
  </Layout>
);

Post.getInitialProps = async function (context) {
  const { id } = context.query;

  async function getTrendingHeader() {
    try {
      let trendingData = axios.get(`https://kitsu.io/api/edge/anime/${id}`)
      let trendingHeader = await trendingData;

      console.log(trendingHeader.data.data)
      return trendingHeader.data.data;
    } catch (error) {
      console.log(error);
    }
  }

  return {
    header: await getTrendingHeader()
  }
}

export default Post;
