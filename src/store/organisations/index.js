export default {
  state: {
    organisations: []
  },
  mutations: {
    loadOrganisations (state, payload) {
      state.organisations = payload
    }
  },
  actions: {
    getAllOrganisations ({ commit }) {
      const organisations = [
        { id: '465464646', name: 'ОСББ Володимира Великого 8', active: true },
        { id: '46546464232', name: 'ОСББ Володимира Великого 10', active: true },
        { id: '46546464232', name: 'ОСББ Володимира Великого 12', active: true }
      ]
      commit('loadOrganisations', organisations)
    }
  },
  getters: {
    organisations (state) {
      return state.organisations
    }
  }
}
