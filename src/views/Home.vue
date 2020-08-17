<template>
  <div class="home">
    <!-- <p class="is-inline is-600 is-size-5" style="position: fixed; bottom: 0; left: 0;background-color: blue; color: white; padding: 5px 15px;">Hora: {{this.now}}</p> -->
    <intro v-if="!showtime" />
    <incubadora :event="showtime" :next="comingNext" />
    <sobre-ciudades-comunes />
    <!-- <numbers /> -->
    <videos />
    <!-- <what-is /> -->
    <!-- <contents /> -->
    <!-- <context /> -->
    <!-- <questions /> -->
    <about />
    <topic-mosaic/>
    <who-are-we />
    <register />
  </div>
</template>

<script>
// @ is an alias to /src
import calendar from "@/data/incubadoraCalendar";
import Intro from '@/components/home/Intro.vue'
import Incubadora from '@/components/home/Incubadora.vue'
import SobreCiudadesComunes from '@/components/home/SobreCiudadesComunes.vue'
// import Contents from '@/components/home/Contents.vue'
import About from '@/components/home/About.vue'
import Register from '@/components/home/Register.vue'
// import Questions from '@/components/home/Questions.vue'
// import Context from '@/components/home/Context.vue'
import TopicMosaic from '@/components/home/TopicMosaic.vue'
// import WhatIs from '@/components/home/WhatIs.vue'
import WhoAreWe from '@/components/home/WhoAreWe.vue'
// import Numbers from '@/components/home/Numbers.vue'
import Videos from '@/components/home/Videos.vue'

export default {
  name: 'Home',
  data() {
    return {
      now: new Date(),
      // now: new Date(Date.UTC(2020,7,20,12,0,0)),
      intervalId: null,
      calendar: calendar,
    };
  },
  components: {
    Intro,
    Incubadora,
    SobreCiudadesComunes,
    // Numbers,
    Videos,
    // Contents,
    About,
    Register,
    // Questions,
    // Context,
    TopicMosaic,
    // WhatIs,
    WhoAreWe
  },
  mounted: function () {
    this.intervalId = setInterval(this.updateTime, 30000);
    // this.intervalId = setInterval(this.updateTime, 300);
  },
  beforeDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  },
  methods: {
    updateTime: function () {
      this.now = new Date();
      // this.now = this.addMinutes(Math.floor(Math.random() * 10) + 80)
      // this.now = this.addSeconds(Math.floor(Math.random() * 30) + 10)
      // this.now = this.addSeconds(30)
    },
    addMinutes(minutes) {
      return new Date(this.now.getTime() + minutes * 60000);
    },
    addSeconds(seconds) {
      return new Date(this.now.getTime() + seconds * 1000);
    },
  },
  computed: {
    showtime: function () {
      let event = this.calendar.find( x => {
        return (x.starts <= this.now && this.now <= x.ends)
      })
      return event
      // let desde = new Date(Date.UTC(2020, 6, 31, 3, 0, 0));
      // let hasta = new Date(Date.UTC(2020, 6, 31, 20, 30, 0));
      // if (desde <= this.now && this.now < hasta) return true;
      // return false;
    },
    comingNext: function() {
      let event = this.calendar.find( (x,index,arr) => {
        if(index == 0 && this.now <= x.ends ) return true
        if(index > 0){
          if(arr[index-1].ends <= this.now && this.now <= x.starts) return true
        }
        return false
      })
      return event
    }
    // afterShowtime: function () {
    //   let desde = new Date(Date.UTC(2020, 6, 31, 20, 30, 0));
    //   if (desde <= this.now) return true;
    //   return false;
    // },
  },
}
</script>
