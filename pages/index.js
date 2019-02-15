import Layout from "../components/MyLayout.js";
import axios from "axios";

import AnimeHeader from "../components/AnimeHeader";
import AnimeContainer from "../components/AnimeContainer";

export default function Index({ header, data }) {
  return (
    <Layout>
      <AnimeHeader data={header} />
      <AnimeContainer data={data} />
    </Layout>
  );
}

Index.getInitialProps = async function () {
  let obj = {
    comedy: 160,
    action: 150,
    fantasy: 156,
    thriller: 159,
    adventure: 157,
  }

  let categories = Object.keys(obj)

  let promiseArray = Object.keys(obj).map((x) => axios.get(`https://kitsu.io/api/edge/trending/anime?limit=15&in_category=true&category=${obj[x]}`))

  let data = await Promise.all(promiseArray)

  let categoryLists = categories.map((x, i) => {
    return { [categories[i]]: data[i].data.data };
  })

  async function getTrendingHeader() {
    try {
      let trendingData = axios.get(`https://kitsu.io/api/edge/trending/anime?limit=1`)
      let trendingHeader = await trendingData;
      return trendingHeader.data.data[0];
    } catch (error) {
      console.log(error);
    }
  }

  return {
    data: await categoryLists,
    header: await getTrendingHeader()
  }
};