import { createStore } from 'vuex'

export default createStore({
  state: {
    characters: [], //Almacenar todos los personajes
    charactersFilter: [] //Hacer consultas y filtros para no hacer peticiones al api
  },
  getters: {
  },
  mutations: {
    setCharacters(state, payload) {
      state.characters = payload
    },
    setCharactersFilter(state, payload) {
      state.charactersFilter = payload
    }
  },
  actions: {
    async getCharacters({ commit }) {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character?page=1');
        const data = await response.json();
        commit('setCharacters', data.results);
        commit('setCharactersFilter', data.results);
        console.log(data.info);
      } catch (error) {
        console.error(error);
      }
    },

    FilterbyStatus({ commit, state }, status) {
      const results = state.characters.filter((character) => {
        return character.status.includes(status)
      });
      commit('setCharactersFilter', results);
    },

    FilterByName({ commit, state }, name) {
      const formatName = name.toLowerCase();
      const results = state.characters.filter((character) => {
        const characterName = character.name.toLowerCase();

        if (characterName.includes(formatName)) {
          return character
        }
      })
      commit('setCharactersFilter', results);
    },

    async NextPage({ commit }, page) {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character?page='+page);
        const data = await response.json();
        commit('setCharacters', data.results);
        commit('setCharactersFilter', data.results);
        console.table(data.info);
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {
  }
})
