// Juste pour aller chercher depuis le store

export default {
  getIsDreamDestination(state) {
    return state.dreamDestinations
  },
  getTicketsForSelectedDestination(state) {
    return state.ticketsForSelectedDestination
  },
}
