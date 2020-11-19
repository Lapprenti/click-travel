// Appellée par action et modificat° de state / Store

export default {
  assignDreamDestinations(state, payload) {
    state.dreamDestinations = payload.data
  },
  assignTicketsForSelectedDestination(state, payload) {
    state.ticketsForSelectedDestination = payload.data
  },
  setCurrentTicket(state, payload) {
    state.selectedTicket = payload
  },
}
