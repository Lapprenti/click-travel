// Appel depuis vue (distpatch) en général appel api
import apiService from '~/services/apiService'

export default {
  getDestinations(state) {
    apiService
      .get(
        '/destinations?filter=%7B%0A%20%20%22where%22%3A%20%7B%0A%20%20%20%20%22isDreamDestination%22%3A%20true%0A%20%20%7D%0A%7D'
      )
      .then((response) => {
        state.commit('assignDreamDestinations', response)
      })
  },
  getTickets(state, payload) {
    const p = {
      where: {
        to: payload,
      },
    }

    const uriEncP = encodeURI(JSON.stringify(p))
    apiService.get('tickets?filter=' + uriEncP).then((response) => {
      state.commit('assignTicketsForSelectedDestination', response)
    })
  },
  selectedTicket(state, payload) {
    state.commit('setCurrentTicket', payload)
  },
}
