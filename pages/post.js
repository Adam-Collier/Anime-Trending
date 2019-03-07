import Layout from "../components/MyLayout.js";
import axios from "axios";

import AnimeHeader from "../components/AnimeHeader.js";
import AnimeContent from "../components/AnimeContent";

import Tabs from "../components/Tabs";
import EpisodeList from "../components/EpisodeList";
import CharacterList from "../components/CharacterList";

const Post = ({ header, episodes, characters }) => {
  return (
    <Layout>
      <AnimeContent>
        <AnimeHeader data={header} />
        <Tabs>
          <div label="Episodes">
            <EpisodeList data={episodes} />
          </div>
          <div label="Characters">
            <CharacterList data={characters} />
          </div>
          <div label="Croc">
            After 'while, <em>Crocodile</em>!
          </div>
          <div label="Sarcosuchus">
            Nothing to see here, this tab is <em>extinct</em>!
          </div>
        </Tabs>
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

  async function getCharacterList() {
    try {
      let data = axios.get(
        `https://kitsu.io/api/edge/castings?filter%5Bmedia_type%5D=Anime&filter%5Bmedia_id%5D=${id}&filter%5Bis_character%5D=true&filter%5Blanguage%5D=Japanese&include=character&sort=-featured`
      );
      let episodeList = await data;
      return episodeList.data.included;
    } catch (error) {
      console.log(error);
    }
  }

  return {
    header: await getTrendingHeader(),
    episodes: await getEpisodeList(),
    characters: await getCharacterList()
  };
};

export default Post;
