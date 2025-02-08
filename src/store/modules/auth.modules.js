import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {error} from '../../utils/error'

const TOKEN_KEY = "jwt-token";

export default {
  namespaced: true,

  state() {
    return {
      token: localStorage.getItem(TOKEN_KEY),
    };
  },

  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem(TOKEN_KEY, token);
    },
    logout(state) {
      state.token = null;
      localStorage.removeItem(TOKEN_KEY);
    },
  },

  actions: {
    async login({ commit }, payload) {
      try {
        const auth = getAuth(); 
        const userCredential = await signInWithEmailAndPassword(
          auth,
          payload.email,
          payload.password
        );
        const token = await userCredential.user.getIdToken(); 

        commit("setToken", token);
      } catch (e) {
        console.log(error);
      }
    },
  },

  getters: {
    token(state) {
      return state.token;
    },
    isAuthenticated(_, getters) {
      return !!getters.token;
    },
  },
};
