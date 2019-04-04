import Layout from "../components/Layout";
import axios from "axios";

import AnimeHeader from "../components/AnimeHeader.js";
import AnimeContent from "../components/AnimeContent";

import Tabs from "../components/Tabs";
import EpisodeList from "../components/EpisodeList";
import CharacterList from "../components/CharacterList";
import FeaturedReview from "../components/FeaturedReview";

const Post = ({ header, episodes, characters, review }) => {
  return (
    <Layout>
      <AnimeContent>
        <AnimeHeader data={header} />
        <div className="utilities">
          <FeaturedReview data={review} />
        </div>
        <Tabs>
          <div label="Episodes">
            <EpisodeList data={episodes} />
          </div>
          <div label="Characters">
            <CharacterList data={characters} />
          </div>
        </Tabs>
      </AnimeContent>
      <style jsx>{`
        .utilities {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-column: 3/4;
          grid-row: 4/5;
        }
      `}</style>
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

  async function getFeaturedReview() {
    try {
      let data = axios.get(
        `https://kitsu.io/api/edge/reviews?filter[mediaId]=${id}&sort=likesCount&page[limit]=1`
      );
      let review = await data;
      return review.data;
    } catch (error) {
      console.log(error);
    }
  }

  return {
    header: await getTrendingHeader(),
    episodes: await getEpisodeList(),
    characters: await getCharacterList(),
    review: await getFeaturedReview()
  };
};

export default Post;
