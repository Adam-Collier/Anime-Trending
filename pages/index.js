import { withAmp } from 'next/amp'
import { withRouter } from 'next/router'
import Layout from '../components/Layout'
import axios from 'axios'

import { saveData } from '../store'

import AnimeContent from '../components/AnimeContent'
import AnimeHeader from '../components/AnimeHeader'
import AnimeCategories from '../components/AnimeCategories.js'

const Index = ({ header, categories }) => {
  return (
    <Layout>
      <AnimeContent>
        <AnimeHeader data={header} />
        <AnimeCategories data={categories} />
      </AnimeContent>
    </Layout>
  )
}

Index.getInitialProps = async function({ reduxStore }) {
  console.log(reduxStore.getState().apiData)

  if (reduxStore.getState().apiData['0']) {
    return reduxStore.getState().apiData['0']
  } else {
    let obj = {
      comedy: 160,
      action: 150,
      fantasy: 156,
      thriller: 159,
      adventure: 157
    }

    let categories = Object.keys(obj)

    let promiseArray = Object.keys(obj).map(x =>
      axios.get(
        `https://kitsu.io/api/edge/trending/anime?limit=15&in_category=true&category=${
          obj[x]
        }`
      )
    )

    let data = await Promise.all(promiseArray)

    let categoryLists = categories.map((x, i) => {
      return { [categories[i]]: data[i].data.data }
    })

    async function getTrendingHeader() {
      try {
        let trendingData = axios.get(
          `https://kitsu.io/api/edge/trending/anime?limit=1`
        )
        let trendingHeader = await trendingData
        return trendingHeader.data.data[0]
      } catch (error) {
        console.log(error)
      }
    }

    let trendingHeader = await getTrendingHeader()

    reduxStore.dispatch(
      saveData([
        '0',
        {
          categories: await categoryLists,
          header: await trendingHeader
        }
      ])
    )

    return {
      categories: await categoryLists,
      header: await trendingHeader
    }
  }
}

export default withAmp(withRouter(Index, { hybrid: true }))
