// Appellée par action et modificat° de state / Store

export default {
  assignDreamDestinations(state, payload) {
    state.dreamDestinations = payload.data
  },
}
