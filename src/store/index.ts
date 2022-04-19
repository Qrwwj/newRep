import { createStore } from "vuex";
// import user_module from "./modules/user";
import getters from "./getters";

export default createStore({
  // modules: {
  //   user_module,
  // },
  state: {
    userMessage: {},
  },
  mutations: {
    USER_MESSAGE: (state, value) => {
      state.userMessage = value;
    },
  },
  actions: {
    setMessage: (context, value) => {
      context.commit("USER_MESSAGE", value);
    },
  },
  getters,
});
