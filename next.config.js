const axios = require("axios");

module.exports = {
  async exportPathMap() {
    // we fetch our list of posts, this allow us to dynamically generate the exported pages
    let obj = {
      comedy: 160,
      action: 150,
      fantasy: 156,
      thriller: 159,
      adventure: 157
    };

    let promiseArray = Object.keys(obj).map(x =>
      axios
        .get(
          `https://kitsu.io/api/edge/trending/anime?limit=15&in_category=true&category=${
            obj[x]
          }`
        )
        .then(res => res.data.data)
    );

    let data = await Promise.all(promiseArray);
    let animeIds = [].concat(...data).map(x => x.id);

    // tranform the list of posts into a map of pages with the pathname `/post/:id`
    const pages = animeIds.reduce(
      (pages, id) =>
        Object.assign({}, pages, {
          [`/post/${id}`]: {
            page: "/post",
            query: { id: id }
          }
        }),
      {}
    );

    // combine the map of post pages with the home
    return Object.assign({}, pages, {
      "/": { page: "/" }
    });
  }
};
