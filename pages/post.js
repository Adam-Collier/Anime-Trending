import Layout from "../components/MyLayout.js";
import axios from "axios";
import AnimeHeader from "../components/AnimeHeader";
import AnimeContent from "../components/AnimeContent";
import EpisodeList from "../components/EpisodeList";

const Post = ({ header, episodes }) => {
  console.log(episodes);
  return (
    <Layout>
      <AnimeHeader data={header} />
      <AnimeContent>
        <EpisodeList data={episodes} />
      </AnimeContent>
    </Layout>
  );
};

Post.getInitialProps = async function(context) {
  const { id } = context.query;

  async function getTrendingHeader() {
    try {
      let trendingData = axios.get(`https://kitsu.io/api/edge/anime/${id}`);
      let trendingHeader = await trendingData;
      return trendingHeader.data.data;
    } catch (error) {
      console.log(error);
    }
  }

  async function getEpisodeList() {
    try {
      let data = axios.get(
        `https://kitsu.io/api/edge/episodes?filter%5BmediaType%5D=Anime&filter%5Bmedia_id%5D=${id}&sort=number&page[limit]=20`
      );
      let episodeList = await data;
      return episodeList.data.data;
    } catch (error) {
      console.log(error);
    }
  }

  return {
    header: await getTrendingHeader(),
    episodes: await getEpisodeList()
  };
};

export default Post;
