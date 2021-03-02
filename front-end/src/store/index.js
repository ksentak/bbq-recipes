import { createStore } from 'vuex';
import firebase from 'firebase/app';
import 'firebase/auth';

export default createStore({
  state: {
    user: {},
    authError: ''
  },
  mutations: {
    setUser: (state, user) => (state.user = user),
    setAuthError: (state, error) => (state.authError = error)
  },
  actions: {
    async createUser({ commit }, user) {
      const email = user.email;
      const password = user.password;
      // Firebase function to create new user
      try {
        const userCredential = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        commit('setUser', userCredential.user);
      } catch (e) {
        commit('setAuthError', e.message);
      }
    }
  },
  getters: {
    getAuthError: (state) => state.authError
  }
});
