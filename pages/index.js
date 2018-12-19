import Layout from "../components/MyLayout.js";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import AnimeHeader from "../components/AnimeHeader";
import AnimeContainer from "../components/AnimeContainer";

export const allAnimeQuery = gql`
  query getAnimeGenres {
    Action: Page(perPage: 10) {
      media(sort: TRENDING_DESC, genre: "Action", type: ANIME) {
        ...animeFields
      }
    }
    Adventure: Page(perPage: 10) {
      media(sort: TRENDING_DESC, genre: "Adventure", type: ANIME) {
        ...animeFields
      }
    }
    Comedy: Page(perPage: 10) {
      media(sort: TRENDING_DESC, genre: "comedy", type: ANIME) {
        ...animeFields
      }
    }
    Fantasy: Page(perPage: 10) {
      media(sort: TRENDING_DESC, genre: "fantasy", type: ANIME) {
        ...animeFields
      }
    }
    Scifi: Page(perPage: 10) {
      media(sort: TRENDING_DESC, genre: "Sci-Fi", type: ANIME) {
        ...animeFields
      }
    }
    Thriller: Page(perPage: 10) {
      media(sort: TRENDING_DESC, genre: "Thriller", type: ANIME) {
        ...animeFields
      }
    }
  }
  fragment animeFields on Media {
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
`;

export default function Index() {
  return (
    <Query query={allAnimeQuery}>
      {({ loading, error, data, fetchMore }) => {
        if (error) console.log(error);
        if (loading) return <div>Loading</div>;
        return (
          <Layout>
            <AnimeHeader data={data.Action.media[0]} />
            <AnimeContainer data={data} />
          </Layout>
        );
      }}
    </Query>
  );
}
