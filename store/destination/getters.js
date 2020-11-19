// Juste pour aller chercher depuis le store

export default {
  getIsDreamDestination(state) {
    // const out = []
    // state.destinations.forEach((d) => {
    //   if (d.IsDreamDestination) {
    //     out.push(d)
    //   }
    // })
    // return out
    return state.dreamDestinations
  },
}
