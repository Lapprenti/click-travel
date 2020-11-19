<template>
  <div class="container">
    <div class="toolbar">
      <Logo />
    </div>
    <div class="content">
      <div>
        <h1 class="title">Tickets list</h1>
        <h4>Destination : {{ destinationCode }}</h4>
        <div class="links">
          <hr />
          <div v-for="t in tickets" :key="t" @click="goToDetail(t)">
            <h5>Passenger name : {{ t.passenger }}</h5>
            <ul>
              <li>Flight ref : {{ t.flight }}</li>
              <li>On boarding location : {{ t.from }}</li>
              <li>Landing location : {{ t.to }}</li>
              <li>Class : {{ t.class }}</li>
              <li>Gate : {{ t.gate }}</li>
              <li>Date and time departure : {{ t.time }}</li>
              <li>Seat number : {{ t.seat }}</li>
              <li>Number : {{ t.number }}</li>
            </ul>
            <button class="btn_details">See details</button>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    destinationCode: '',
  }),
  computed: mapGetters({
    tickets: 'destination/getTicketsForSelectedDestination',
  }),
  created() {
    this.destinationCode = this.$route.query.code
    this.getDestinationTickets()
  },
  methods: {
    getDestinationTickets() {
      this.$store.dispatch('destination/getTickets', this.destinationCode)
    },
    goToDetail(t) {
      const tc = {
        class: t.class,
        flight: t.flight,
        from: t.from,
        gate: t.gate,
        number: t.number,
        passenger: t.passenger,
        seat: t.seat,
        time: t.time,
        to: t.to,
      }
      this.$store.dispatch('destination/selectedTicket', tc)
      this.$router.push('/ticket')
    },
  },
}
</script>
<style lang="scss">
.btn_details {
  position: relative;
}
</style>
