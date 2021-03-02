import { createStore } from 'vuex';
import firebase from 'firebase/app';
import 'firebase/auth';
import router from '../router';

export default createStore({
  state: {
    user: null,
    authError: ''
  },
  mutations: {
    setUser: (state, user) => (state.user = user),
    setAuthError: (state, error) => (state.authError = error)
  },
  actions: {
    // Create a user
    async createUser({ commit }, user) {
      const email = user.email;
      const password = user.password;

      // Firebase function to create new user
      try {
        const userCredential = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        commit('setUser', userCredential.user);
        commit('setAuthError', '');
        router.push('dashboard');
      } catch (e) {
        commit('setAuthError', e.message);
      }
    },
    // Sign user in
    async signUserIn({ commit }, user) {
      const email = user.email;
      const password = user.password;

      // Firebase function to sign user in
      try {
        const userCredential = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        commit('setUser', userCredential.user);
        commit('setAuthError', '');
        router.push('dashboard');
      } catch (e) {
        console.log(e);
        commit('setAuthError', e.message);
      }
    },
    // Log user out
    async logout({ commit }) {
      try {
        await firebase.auth().signOut();
        commit('setUser', null);
        router.push('/');
      } catch (e) {
        console.log(e);
      }
    }
  },
  getters: {
    getUser: (state) => state.user,
    getAuthError: (state) => state.authError
  }
});
