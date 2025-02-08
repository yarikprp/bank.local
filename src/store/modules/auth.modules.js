import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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
    async login({ commit, dispatch }, payload) {
      try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(
          auth,
          payload.email,
          payload.password
        );
        const token = await userCredential.user.getIdToken();

        commit("setToken", token);
        commit('clearMessage', null, { root: true });
      } catch (e) {
        let errorMessage = 'Произошла ошибка. Попробуйте снова.';
        
        if (e.code === 'auth/wrong-password') {
          errorMessage = 'Неверный пароль.';
        } else if (e.code === 'auth/invalid-email') {
          errorMessage = 'Неверный формат электронной почты.';
        } else if (e.code === 'auth/user-not-found') {
          errorMessage = 'Пользователь не найден.';
        }

        dispatch(
          "setMessage",
          {
            value: errorMessage,
            type: 'danger',
          },
          { root: true }
        );
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
