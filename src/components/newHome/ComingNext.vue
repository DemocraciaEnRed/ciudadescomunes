<template>
  <section class="coming-next">
    <div v-if="showWillStart">
      <h1 class="title is-2 is-700 is-spaced">¡El stream comienza este viernes!</h1>
      <h1 class="subtitle is-4">Consultá la agenda, ¡te esperamos para el vivo!</h1>
    </div>
    <div v-if="showWillContinue">
      <h1 class="title is-2 is-700 is-spaced">Nos volvemos a conectar el sabado</h1>
      <h1 class="subtitle is-4">¡Te esperamos mañana! ¡No te olvides de consultar la agenda!</h1>
    </div>
    <div v-if="soonWeWillStart">
      <h1 class="title is-2 is-700 is-spaced">¡Comenzaremos muy pronto!</h1>
      <h1 class="subtitle is-4">¡Quedate en linea!</h1>
    </div>
    <div v-if="showEnded">
      <h1 class="title is-2 is-700 is-spaced">¡Gracias a todas y todos!</h1>
      <h1 class="subtitle is-4">¡Por habernos acompañado en este gran evento!</h1>
    </div>
     <div class="" v-if="happeningNow != null">
      <h1 class="title is-2 is-700">Ahora:</h1>
        <h2 class="type-text">{{theDay.agenda[happeningNow].type}}</h2>
        <div v-for="(subEvent,j) in theDay.agenda[happeningNow].schedule" class="subevent" :key="`currentEvent-schedule-${j}`">
          <p class="title-text" v-html="subEvent.title"></p>
          <p
            v-for="(who,k) in subEvent.with"
            class="who-text"
            :key="`currentEvent-schedule-${j}-who-${k}`"
          >
            <span v-if="who.mod">
              <i>Modera</i>:
            </span>
            <span v-html="who.name"></span>
            <span v-if="who.instagram" class="is-size-7">&nbsp;<a :href="`https://instagram.com/${who.instagram}`" target="_blank" class="has-text-dark" ><i class="fab fa-instagram fa-fw"></i></a>&nbsp;</span>
            <span v-if="who.twitter" class="is-size-7">&nbsp;<a :href="`https://twitter.com/${who.twitter}`" target="_blank" class="has-text-dark" ><i class="fab fa-twitter fa-fw"></i></a>&nbsp;</span>
            <span v-if="who.facebook" class="is-size-7">&nbsp;<a :href="`https://facebook.com/${who.facebook}`" target="_blank" class="has-text-dark" ><i class="fab fa-facebook-f fa-fw"></i></a>&nbsp;</span>
            <span class="who-org" v-if="who.org">&nbsp;{{who.org}}</span>
          </p>
          <p
            v-for="(hashtag,h) in subEvent.hashtags"
            class="hashtag-text"
            :key="`currentEvent-subevent-${j}-hashtag-${h}`"
          ><i>{{hashtag}}</i></p>
        </div>
        <div v-if="theDay.agenda[happeningNow].moderators">
          <p
            v-for="(who,k) in theDay.agenda[happeningNow].moderators"
            class="who-text"
            :key="`currentEvent-moderator-${k}`"
          >
            <span v-if="who.mod">
              <i>Modera</i>:
            </span>
            <span v-html="who.name"></span>
            <span v-if="who.instagram" class="is-size-7">&nbsp;<a :href="`https://instagram.com/${who.instagram}`" target="_blank" class="has-text-dark" ><i class="fab fa-instagram fa-fw"></i></a>&nbsp;</span>
            <span v-if="who.twitter" class="is-size-7">&nbsp;<a :href="`https://twitter.com/${who.twitter}`" target="_blank" class="has-text-dark" ><i class="fab fa-twitter fa-fw"></i></a>&nbsp;</span>
            <span v-if="who.facebook" class="is-size-7">&nbsp;<a :href="`https://facebook.com/${who.facebook}`" target="_blank" class="has-text-dark" ><i class="fab fa-facebook-f fa-fw"></i></a>&nbsp;</span>
            <span class="who-org" v-if="who.org">&nbsp;{{who.org}}</span>
          </p>
        </div>
          <p
          v-for="(hashtag,h) in theDay.agenda[happeningNow].hashtags"
          class="hashtag-text"
          :key="`currentEvent-hashtag-${h}`"
        ><i>{{hashtag}}</i></p>
         <img
          :src="`/img/agenda/${typeIcon}.png`"
          class="type-icon"
          v-for="typeIcon in theDay.agenda[happeningNow].icons"
          :key="typeIcon"
          alt
        />
     </div>
     <div v-if="happeningNext != null">
       <hr class="custom-hr">
        <h1 class="title is-2 is-700">Lo que sigue:</h1>
        <h2 class="type-text">{{theDay.agenda[happeningNext].type}}</h2>
        <div v-for="(subEvent,j) in theDay.agenda[happeningNext].schedule" class="subevent" :key="`nextEvent-schedule-${j}`">
          <p class="title-text" v-html="subEvent.title"></p>
          <p
            v-for="(who,k) in subEvent.with"
            class="who-text"
            :key="`nextEvent-schedule-${j}-who-${k}`"
          >
            <span v-if="who.mod">
              <i>Modera</i>:
            </span>
            <span v-html="who.name"></span>
            <span v-if="who.instagram" class="is-size-7">&nbsp;<a :href="`https://instagram.com/${who.instagram}`" target="_blank" class="has-text-dark" ><i class="fab fa-instagram fa-fw"></i></a>&nbsp;</span>
            <span v-if="who.twitter" class="is-size-7">&nbsp;<a :href="`https://twitter.com/${who.twitter}`" target="_blank" class="has-text-dark" ><i class="fab fa-twitter fa-fw"></i></a>&nbsp;</span>
            <span v-if="who.facebook" class="is-size-7">&nbsp;<a :href="`https://facebook.com/${who.facebook}`" target="_blank" class="has-text-dark" ><i class="fab fa-facebook-f fa-fw"></i></a>&nbsp;</span>
            <span class="who-org" v-if="who.org">&nbsp;{{who.org}}</span>
          </p>
          <p
            v-for="(hashtag,h) in subEvent.hashtags"
            class="hashtag-text"
            :key="`nextEvent-subevent-${j}-hashtag-${h}`"
          ><i>{{hashtag}}</i></p>
        </div>
        <div v-if="theDay.agenda[happeningNext].moderators">
          <p
            v-for="(who,k) in theDay.agenda[happeningNext].moderators"
            class="who-text"
            :key="`nextEvent-moderator-${k}`"
          >
            <span v-if="who.mod">
              <i>Modera</i>:
            </span>
            <span v-html="who.name"></span>
            <span v-if="who.instagram" class="is-size-7">&nbsp;<a :href="`https://instagram.com/${who.instagram}`" target="_blank" class="has-text-dark" ><i class="fab fa-instagram fa-fw"></i></a>&nbsp;</span>
            <span v-if="who.twitter" class="is-size-7">&nbsp;<a :href="`https://twitter.com/${who.twitter}`" target="_blank" class="has-text-dark" ><i class="fab fa-twitter fa-fw"></i></a>&nbsp;</span>
            <span v-if="who.facebook" class="is-size-7">&nbsp;<a :href="`https://facebook.com/${who.facebook}`" target="_blank" class="has-text-dark" ><i class="fab fa-facebook-f fa-fw"></i></a>&nbsp;</span>
            <span class="who-org" v-if="who.org">&nbsp;{{who.org}}</span>
          </p>
        </div>
          <p
          v-for="(hashtag,h) in theDay.agenda[happeningNext].hashtags"
          class="hashtag-text"
          :key="`nextEvent-hashtag-${h}`"
        ><i>{{hashtag}}</i></p>
         <img
          :src="`/img/agenda/${typeIcon}.png`"
          class="type-icon"
          v-for="typeIcon in theDay.agenda[happeningNext].icons"
          :key="typeIcon"
          alt
        />
     </div>
  </section>
</template>
<script>
import calendar from "@/data/calendar";

export default {
  data() {
    return {
      now: new Date(),
      fridayStarts: new Date(Date.UTC(2020,4,24,3,0,0)),
      fridayEnds: new Date(Date.UTC(2020,4,25,2,59,59)),
      saturdayStarts: new Date(Date.UTC(2020,4,25,3,0,0)),
      saturdayEnds: new Date(Date.UTC(2020,4,26,2,59,59)),
      intervalId: null,
    }
  },
  components: {
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
    theDay: function(){
      if(this.isFriday) return calendar[0]
      if(this.isSaturday) return calendar[1]
      return null
    },
    happeningNow: function(){
      if(!this.theDay) return null
      let indexHappeningNow = this.theDay.agenda.findIndex( (event) => {
        if(event.starts <= this.now && this.now < event.ends) return true
        return false
      })
      if(indexHappeningNow == -1) return null
      return indexHappeningNow
    },
    happeningNext: function(){
      if(this.happeningNow == null) return null
      if((this.happeningNow + 1) < this.theDay.agenda.length) return this.happeningNow + 1
      return null
    },
    showWillStart: function(){
      // let desde = zonedTimeToUtc('2020-04-24 00:00:00', 'America/Argentina/Buenos_Aires')
      // if(!this.theDay) return false
      let hasta = new Date(Date.UTC(2020,4,24,11,0,0))
      if(this.now < hasta) return true
      return false
    },
    showWillContinue: function(){
      if(!this.theDay) return false
      let desde = new Date(Date.UTC(2020,4,25,1,0,0))
      let hasta = new Date(Date.UTC(2020,4,25,11,0,0))
      if(desde <= this.now && this.now < hasta) return true
      return false
    },
    soonWeWillStart: function(){
      if(!this.theDay) return false
      let desdeFri = new Date(Date.UTC(2020,4,24,11,0,0))
      let hastaFri = new Date(Date.UTC(2020,4,24,12,0,0))
      let desdeSat = new Date(Date.UTC(2020,4,25,11,0,0))
      let hastaSat = new Date(Date.UTC(2020,4,25,12,0,0))
      if(desdeFri <= this.now && this.now < hastaFri) return true
      if(desdeSat <= this.now && this.now < hastaSat) return true
      return false
    },
    showEnded: function(){
      let desde = new Date(Date.UTC(2020,4,26,2,0,0))
      if(desde < this.now) return true
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
.coming-next{
  background-color: #FFF;
  padding: 25px;
  // max-height: 800px;
}
.the-time {
  text-align: center;
  margin-bottom: 10px;
  // font-weight: 800;
}
.media-left {
  width: 35px;
}
.type-icon {
  width: 20px;
  display: inline;
  margin: 15px 5px;
}
.type-text {
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 300;
  font-size: 0.8rem;
  // margin-left: -1px;
  margin-top: 2px;
}
.title-text {
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.5rem;
  margin-bottom: 6px;
  margin-top: 3px;
}
.who-text {
  font-size: 0.9rem;
  margin-bottom: 4px;
}
.icon-twitter {
  width: 20px;
  border-radius: 4px;
  vertical-align: top;
  margin-right: 4px;
}
.hashtag-text{
  font-size:0.9rem;
}
.who-org{
  font-size:0.9rem;
  // white-space: nowrap;
  color: rgb(100, 100, 100);
}
.custom-hr{
  background-color: #000;
  height: 1px;
  width: 35%;
}
</style>