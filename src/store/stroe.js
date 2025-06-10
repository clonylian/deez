import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      headcon: "Welcome Swap Dashboard",
    };
  },
  mutations: {
    updateData(state, payload) {
      state.headcon = payload;
    },
  },
  actions: {},
});

export default store;
