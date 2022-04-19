const user_module = {
  state: {
    userMessage: {},
  },
  mutations: {
    USER_MESSAGE: (state: { userMessage: object }, value: object) => {
      state.userMessage = value;
    },
  },
  actions: {
    getMessage: (
      context: { commit: (arg0: string, arg1: never) => void },
      value: never
    ) => {
      context.commit("USER_MESSAGE", value);
    },
  },
};

export default user_module;
