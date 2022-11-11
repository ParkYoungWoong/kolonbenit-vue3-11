export default {
  namespaced: true,
  state: () => ({
    count: 7
  }),
  getters: {
    double(state) {
      return state.count * 2
    }
  },
  mutations: {
    increment(state) {
      state.count += 1
    }
  },
  actions: {
    hello(context) {
      // const { state, getters, commit, dispatch } = context
      console.log(context)
      return 123
    }
  }
}
