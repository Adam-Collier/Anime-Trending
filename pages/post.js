import Layout from "../components/Layout";
import axios from "axios";

import AnimeHeader from "../components/AnimeHeader.js";
import AnimeContent from "../components/AnimeContent";

import Tabs from "../components/Tabs";
import EpisodeList from "../components/EpisodeList";
import CharacterList from "../components/CharacterList";
import FeaturedReview from "../components/FeaturedReview";

const Post = ({ header, episodes, characters, reviews }) => {
  return (
    <Layout>
      <AnimeContent>
        <AnimeHeader data={header} />
        <div className="utilities">
          <FeaturedReview data={reviews} />
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
        @media (max-width: 767px) {
          .utilities {
            grid-template-rows: auto auto;
            grid-column: 2/4;
          }
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

  async function getReviews() {
    try {
      let data = axios.get(
        `https://kitsu.io/api/edge/anime/${id}/mappings?filter[externalSite]=myanimelist/anime`
      );
      let { data: mapping } = await data;
      let malId = mapping.data[0].attributes.externalId;
      let reviewData = axios.get(
        `https://api.jikan.moe/v3/anime/${malId}/reviews/1`
      );
      let reviews = await reviewData;
      return reviews.data;
    } catch (error) {
      console.log(error);
    }
  }

  return {
    header: await getTrendingHeader(),
    episodes: await getEpisodeList(),
    characters: await getCharacterList(),
    reviews: await getReviews()
  };
};

export default Post;
