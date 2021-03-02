import { createStore } from 'vuex';
import firebase from 'firebase/app';
import 'firebase/auth';

export default createStore({
  state: {
    user: {}
  },
  mutations: {
    setUser: (state, user) => (state.user = user)
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
        console.log(userCredential);
        commit('setUser', user);
      } catch (e) {
        console.log(e);
      }
    }
  },
  modules: {}
});
