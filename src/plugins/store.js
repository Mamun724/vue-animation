import {createStore} from "vuex";

export default createStore({
  state: {
    authenticatedUser: null,
    registeredUsers: [
      {
        fullName: "User 1",
        username: "user1",
        email: "user1@email.com",
        password: "123456",
        profilePicture: "/assets/user1.jfif"
      }
    ],
    showSplashScreen: true
  },
  getters: {
    findUser: (state) => {
      return (email) => state.registeredUsers.find((user) => user.email === email);
    },
    isAuthenticated: (state) => state.authenticatedUser,
    showSplashScreen: (state) => state.showSplashScreen
  },
  mutations: {
    registerUser(state, user) {
      state.registeredUsers.push(user);
    },
    setAuthUser(state, authUser) {
      state.authenticatedUser = authUser;
    },
    setShowSplashScreen: (state, payload) => state.showSplashScreen = payload,
  },
  actions: {
    async registerUser({commit}, user) {
      commit("registerUser", user);
    },
    async loginUser({commit, getters}, loginData) {
      const user = getters.findUser(loginData.email);
      if (!user || user.password !== loginData.password) {
        return null;
      }

      commit("setAuthUser", user);

      return user;
    },
  }
});
