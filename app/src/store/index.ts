import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: require('@/data/articles.json'),
    drawer: false,
    items: [
      {
        text: 'Home',
        href: '#!',
      },
      {
        text: 'About',
        href: '#about',
      },
    ],
  },
  getters: {
    categories: state => {
      const categories: any = []

      // * Not going to use the categories until needed as it just adds complexity to site at this time
      // * and I do not know the best way to group or show categories as of right now
      // for (const article of state.articles) {
      //   if (
      //     !article.category ||
      //     categories.find((category: any) => category.text === article.category)
      //   ) continue

      //   const text = article.category

      //   categories.push({
      //     text,
      //     href: '#!',
      //   })
      // }

      return categories.sort().slice(0, 4)
    },
    links: (state, getters) => {
      return state.items.concat(getters.categories)
    },
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer),
  },
  actions: {

  },
})
