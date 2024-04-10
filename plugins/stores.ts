import { defineNuxtPlugin } from "#imports";
import { createStore } from "vuex";

export default defineNuxtPlugin((nuxtApp) => {
  const store = createStore({
    state: () => ({
      count: 1,
      anotherData: "Hello world"
    }),
    mutations: {
      SET_COUNT(state){
        state.count++
      }
    },
    actions: {
      /* hypothetical async processing returning a value */
      async fetchCount({ commit }){
        console.log('called')
        commit('SET_COUNT')
        return "yo"
      }
    }
  });

  nuxtApp.vueApp.use(store);

  if (process.server) {
    nuxtApp.payload.vuex = store.state
  } else if (nuxtApp?.payload?.vuex) {
    store.replaceState(nuxtApp.payload.vuex)
  }
});