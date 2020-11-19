<template>
  <div>
    <h1>Details of your ticket</h1>
    <br />
    <div class="contain">
      <div class="blue_container_out">
        <div class="blue_content">
          <h3 class="white_text title">Bording Pass</h3>
          <p class="white_text">{{ selectedTicket.class }}</p>
          <img src="" />
        </div>
      </div>
    </div>
    <div class="contain">
      <div class="white_container_out">
        <div class="topleft content">
          <p class="head">PASSENGER</p>
          <p class="value">{{ selectedTicket.passenger }}</p>
        </div>
        <div class="secondrow">
          <div>
            <p class="head">FLIGHT</p>
            <p class="value">{{ selectedTicket.flight }}</p>
          </div>
          <div>
            <p class="head">FROM</p>
            <p class="value">{{ selectedTicket.from }}</p>
          </div>
          <div>
            <p class="head">TO</p>
            <p class="value">{{ selectedTicket.to }}</p>
          </div>
          <div>
            <p class="head">CLASS</p>
            <p class="value">{{ selectedTicket.class }}</p>
          </div>
        </div>
        <div class="thirdrow">
          <div>
            <p class="head">GATE</p>
            <p class="value">{{ selectedTicket.gate }}</p>
          </div>
          <div>
            <p class="head">TIME</p>
            <p class="value">{{ selectedTicket.time.split(' ')[1] }}</p>
          </div>
          <div>
            <p class="head">SEAT</p>
            <p class="value">{{ selectedTicket.seat }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="contain">
      <div class="blue_container_out_bottom"></div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    t: '',
  }),
  computed: mapGetters({
    selectedTicket: 'destination/getSelectedTicket',
  }),
  created() {
    // ttt
  },
}
</script>

<style lang="scss">
.contain {
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.blue_container_out {
  background-color: #31a8e3;
  width: 90%;
  border-radius: 15px 15px 0px 0px;
  display: flex;
}

.blue_container_out_bottom {
  background-color: #31a8e3;
  width: 90%;
  border-radius: 0px 0px 15px 15px;
  display: flex;
  height: 20px;
}

.title {
  margin-left: 5px;
}

.white_container_out {
  background-color: #ffffff;
  width: 90%;
}

.white_text {
  color: white;
}

.head {
  color: #595959;
}

.topleft {
  width: 15%;
}

.content {
  text-align: left;
  margin-left: 5px;
}

.secondrow {
  margin-top: 25px;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  margin-left: 5px;
  margin-right: 5px;
}

.thirdrow {
  margin-top: 25px;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  margin-left: 5px;
  margin-right: 5px;
  width: 40%;
}
</style>
