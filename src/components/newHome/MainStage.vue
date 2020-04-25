<template>
  <div class="hero is-custom">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2 is-size-4-touch has-text-black is-700" >ciudades comunes<br></h1>
        <h1 class="subtitle is-4 is-size-6-touch has-text-black" >24 y 25 de abril 2020<br></h1>
        <div class="columns">
          <div class="column">
            <div class="videoWrapper">
             <iframe width="560" height="315" :src="`https://www.youtube.com/embed/${getStreamId}`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <br>
            <br>
            <h1 class="title is-3 is-700">Hacé tu pregunta a las y los expositores, participá activamente de la conversación en vivo:</h1>
            <br>
            <iframe src="https://app.sli.do/event/lmuuloon" height="100%" width="100%" style="min-height: 560px;"></iframe>
          </div>
          <div class="column is-4">
            <ComingNext />
            <br>
            <div class="buttons">
              <a v-if="!showEnded" href="https://docs.google.com/forms/d/e/1FAIpQLSe18mgHqJPUof9o4U2z2MOuAaakrmKd7ddhe1-h575etxlyAQ/viewform" target="_blank" class="button is-black is-outlined is-medium is-fullwidth">Clic para inscribirte <i class="fas fa-external-link-alt fa-fw"></i></a>
              <a href="https://join.slack.com/t/ciudadescomunes/shared_invite/zt-dtwxeqmt-xU1Mwiq7WimmA7mVrv~IQw" target="_blank" class="button is-black is-outlined is-medium is-fullwidth">Únite a nuestro <i class="fab fa-slack fa-fw"></i> Slack</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// const { zonedTimeToUtc } = require('date-fns-tz')
// import calendar from "@/data/calendar";

import ComingNext from "./ComingNext.vue"
export default {
  data() {
    return {
      now: new Date(),
      fridayStarts: new Date(Date.UTC(2020,3,24,3,0,0)),
      fridayEnds: new Date(Date.UTC(2020,3,25,2,59,59)),
      saturdayStarts: new Date(Date.UTC(2020,3,25,3,0,0)),
      saturdayEnds: new Date(Date.UTC(2020,3,26,2,59,59)),
      intervalId: null,
    }
  },
  components: {
    ComingNext
  },
  mounted: function(){
    this.intervalId = setInterval(this.updateTime, 30000);
  },
  beforeDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  },
  methods: {
    updateTime: function(){
      this.now = new Date()
    }
  },
  computed: {
    isFriday: function(){
      if(this.fridayStarts < this.now && this.now < this.fridayEnds) return true
      return false
    },
    isSaturday: function(){
      if(this.saturdayStarts < this.now && this.now < this.saturdayEnds) return true
      return false
    },
    getStreamId: function() {
      if(this.now < this.saturdayStarts){
        return 'eAnDFgyt7Zs'
      } else {
        return 'GOJHd0CI1p4'
      }
    },
    showEnded: function(){
      let desde = new Date(Date.UTC(2020,3,26,1,0,0))
      if(desde <= this.now) return true
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
.hero.is-custom{
  background-color: #f8adcc;
}
.videoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}
.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>