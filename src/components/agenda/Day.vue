<template>
  <section>
    <h1 class="title is-1 is-size-2-touch is-700">{{day.title}}</h1>
    <div class="media" v-for="(event,i) in day.agenda" :key="`agenda${i}`">
      <div class="media-left">
        <p class="the-time">{{getTimeEvent(event.starts)}}</p>
        <img
          :src="`/img/agenda/${typeIcon}.png`"
          class="type-icon"
          v-for="typeIcon in event.icons"
          :key="typeIcon"
          alt
        />
      </div>
      <div class="media-content">
        <h2 class="type-text">{{event.type}}</h2>
        <div v-for="(subEvent,j) in event.schedule" class="subevent" :key="`event-${i}-schedule-${j}`">
          <p class="title-text" v-html="subEvent.title"></p>

          <p
            v-for="(who,k) in subEvent.with"
            class="who-text"
            :key="`event-${i}-schedule-${j}-who-${k}`"
          >
            <span v-if="who.mod">
              <i>Modera</i>:
            </span>
              <img
                :src="`https://avatars.io/twitter/${who.twitter}`"
                class="icon-twitter"
                v-if="who.twitter"
                alt
              />
            <span v-html="who.name"></span>
            <span v-if="who.instagram" class="is-size-7">&nbsp;<a :href="`https://instagram.com/${who.instagram}`" target="_blank" class="has-text-dark" ><i class="fab fa-instagram fa-fw"></i></a>&nbsp;</span>
            <span v-if="who.twitter" class="is-size-7">&nbsp;<a :href="`https://twitter.com/${who.twitter}`" target="_blank" class="has-text-dark" ><i class="fab fa-twitter fa-fw"></i></a>&nbsp;</span>
            <span v-if="who.facebook" class="is-size-7">&nbsp;<a :href="`https://facebook.com/${who.facebook}`" target="_blank" class="has-text-dark" ><i class="fab fa-facebook-f fa-fw"></i></a>&nbsp;</span>
            <span class="who-org" v-if="who.org">&nbsp;{{who.org}}</span>
          </p>
          <hr class="divide-if-necesary">
        </div>
        <div v-if="event.moderators">
          <p
            v-for="(who,k) in event.moderators"
            class="who-text"
            :key="`event-${i}-moderator-${k}`"
          >
            <span v-if="who.mod">
              <i>Modera</i>:
            </span>
              <img
                :src="`https://avatars.io/twitter/${who.twitter}`"
                class="icon-twitter"
                v-if="who.twitter"
                alt
              />
            <span v-html="who.name"></span>
            <span v-if="who.instagram" class="is-size-7">&nbsp;<a :href="`https://instagram.com/${who.instagram}`" target="_blank" class="has-text-dark" ><i class="fab fa-instagram fa-fw"></i></a>&nbsp;</span>
            <span v-if="who.twitter" class="is-size-7">&nbsp;<a :href="`https://twitter.com/${who.twitter}`" target="_blank" class="has-text-dark" ><i class="fab fa-twitter fa-fw"></i></a>&nbsp;</span>
            <span v-if="who.facebook" class="is-size-7">&nbsp;<a :href="`https://facebook.com/${who.facebook}`" target="_blank" class="has-text-dark" ><i class="fab fa-facebook-f fa-fw"></i></a>&nbsp;</span>
            <span class="who-org" v-if="who.org">&nbsp;{{who.org}}</span>
          </p>
        </div>
           <p
            v-for="(hashtag,l) in event.hashtags"
            class="hashtag-text"
            :key="`event-${i}-schedule-${j}-hashtag-${l}`"
          ><i>{{hashtag}}</i></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["day"],
  methods: {
    getTimeEvent: function(eventStarts) {
      if (eventStarts.getMinutes() == "0") {
        return eventStarts.getHours();
      }
      return `${eventStarts.getHours()}.${eventStarts.getMinutes()}`;
    }
  }
};
</script>

<style lang="scss" scoped>
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
  display: block;
  margin: 0 auto 5px;
}
.type-text {
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 300;
  font-size: 0.8rem;
  // margin-left: -1px;
  margin-top: 2px;
}
.media-content > .subevent:not(:only-of-type){
    margin: 5px 0 5px;
    .divide-if-necesary{
      display: block;
      height:1px;
      width:50px;
      margin: 12px 0;
      background-color: #cacaca;
    }
}
.media-content > .subevent:only-of-type{
    .divide-if-necesary{
      display: none;
    }
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
.has-text-custom-link{
  color: #F26522;
  &:hover{
    color: rgb(184, 69, 16)
  }
}
</style>