export default {
  state: {
    organisations: []
  },
  mutations: {
    loadOrganisations (state, payload) {
      state.organisations = payload
    },
    updateOrg (state, payload) {
      let org = state.organisations.find(org => org.id === payload.id)
      org.name = payload.name
      org.code = payload.code
      org.services = payload.services
      org.active = payload.active
    },
    createOrg (state, payload) {
      const newOrg = { ...payload, id: Math.random() }
      state.organisations.push(newOrg)
    },
    deleteOrg (state, payload) {
      const filtered = state.organisations.filter(item => item !== payload)
      console.log(payload)
      console.log(filtered)
    }
  },
  actions: {
    getAllOrganisations ({ commit }) {
      const organisations = [
        { id: '465464646', name: 'ОСББ Володимира Великого 8', active: true, code: '11111111', services: '100, 101, 102' },
        { id: '46546464232', name: 'ОСББ Володимира Великого 10', active: false, code: '11111111', services: '100, 101, 102' },
        { id: '46546464233', name: 'ОСББ Володимира Великого 12', active: true, code: '11111111', services: '100, 101, 102' },
        { id: '46546464', name: 'ОСББ Володимира Великого 15', active: true, code: '11111111', services: '100, 101, 102' },
        { id: '456456', name: 'ОСББ Тарнавського 8', active: true, code: '11111111', services: '100, 101, 102' },
        { id: '1213131', name: 'ОСББ Білецька 18', active: false, code: '11111111', services: '100, 101, 102' },
        { id: '212131414', name: 'ОСББ Виговського 10а', active: true, code: '2222222', services: '100, 101, 102' }
      ]
      commit('loadOrganisations', organisations)
    },
    updateOrg ({ commit }, payload) {
      commit('updateOrg', payload)
    },
    createOrg ({ commit }, payload) {
      commit('createOrg', payload)
    },
    deleteOrg ({ commit }, payload) {
      commit('deleteOrg', payload)
    }
  },
  getters: {
    organisations (state) {
      return state.organisations
    }
  }
}
