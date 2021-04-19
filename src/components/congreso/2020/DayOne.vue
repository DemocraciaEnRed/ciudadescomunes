<template>
  <section class="section">
  <section class="container">
    <h1 class="title is-1 is-size-2-touch is-700">{{day.title}}</h1>
    <div v-for="(event,i) in day.agenda" :key="`agenda-${i}`" >

    <div class="columns mb-6" v-if="event.videoId">
        <div class="column is-7">
            <div class="has-background-primary p-3">

            <div class="videoWrapper" v-if="event.videoId">
                <iframe
                width="853"
                height="480"
                :src="`https://www.youtube.com/embed/${event.videoId}`"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                ></iframe>
            </div>
            <div v-else class="p-4 has-background-white">

            </div>
            </div>
        </div>
        <div class="column">
            <div class="media m-4" >
            <div class="media-left">
                <!-- <p class="the-time mt-1">{{getTimeEvent(event.starts)}}</p> -->
                <img
                :src="`/img/agenda/${typeIcon}.png`"
                class="type-icon mt-1"
                v-for="typeIcon in event.icons"
                :key="typeIcon"
                alt
                />
            </div>
            <div class="media-content">
                <h2 class="type-text is-size-6-touch is-size-5-desktop mt-0">{{event.type}}</h2>
                <div v-for="(subEvent,j) in event.schedule" class="subevent" :key="`event-${i}-schedule-${j}`">
                <p class="title is-4 is-700" v-html="subEvent.title"></p>
                  <div class="display-pictures">

                  <img :src="`/img/exponen/${who.picture}`" class="image small-speaker"  v-for="(who,k) in filterDisplayPicture(subEvent.with)"
                    :key="`event-${i}-schedule-${j}-who-image-${k}`" :alt="who.name">
                  </div>
                <p
                    v-for="(who,k) in subEvent.with"
                    class="who-text"
                    :key="`event-${i}-schedule-${j}-who-${k}`"
                >
                    <span v-if="who.mod">
                    <i>Modera</i>:
                    </span>
                    <!-- <img
                        :src="`https://avatars.io/twitter/${who.twitter}`"
                        class="icon-twitter"
                        v-if="who.twitter"
                        alt
                    /> -->
                    <span v-html="who.name"></span>
                    <span v-if="who.instagram" class="is-size-7">&nbsp;<a :href="`https://instagram.com/${who.instagram}`" target="_blank" class="has-text-dark" ><i class="fab fa-instagram fa-fw"></i></a>&nbsp;</span>
                    <span v-if="who.twitter" class="is-size-7">&nbsp;<a :href="`https://twitter.com/${who.twitter}`" target="_blank" class="has-text-dark" ><i class="fab fa-twitter fa-fw"></i></a>&nbsp;</span>
                    <span v-if="who.facebook" class="is-size-7">&nbsp;<a :href="`https://facebook.com/${who.facebook}`" target="_blank" class="has-text-dark" ><i class="fab fa-facebook-f fa-fw"></i></a>&nbsp;</span>
                    <span class="who-org" v-if="who.org">&nbsp;{{who.org}}</span>
                </p>
                <p
                    v-for="(hashtag,h) in subEvent.hashtags"
                    class="hashtag-text"
                    :key="`event-${i}-subevent-${j}-hashtag-${h}`"
                ><i>{{hashtag}}</i></p>
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
                    <!-- <img
                        :src="`https://avatars.io/twitter/${who.twitter}`"
                        class="icon-twitter"
                        v-if="who.twitter"
                        alt
                    /> -->
                    <span v-html="who.name"></span>
                    <span v-if="who.instagram" class="is-size-7">&nbsp;<a :href="`https://instagram.com/${who.instagram}`" target="_blank" class="has-text-dark" ><i class="fab fa-instagram fa-fw"></i></a>&nbsp;</span>
                    <span v-if="who.twitter" class="is-size-7">&nbsp;<a :href="`https://twitter.com/${who.twitter}`" target="_blank" class="has-text-dark" ><i class="fab fa-twitter fa-fw"></i></a>&nbsp;</span>
                    <span v-if="who.facebook" class="is-size-7">&nbsp;<a :href="`https://facebook.com/${who.facebook}`" target="_blank" class="has-text-dark" ><i class="fab fa-facebook-f fa-fw"></i></a>&nbsp;</span>
                    <span class="who-org" v-if="who.org">&nbsp;{{who.org}}</span>
                </p>
                </div>
                <p
                v-for="(hashtag,h) in event.hashtags"
                class="hashtag-text has-text-link"
                :key="`event-${i}-hashtag-${h}`"
                ><i>{{hashtag}}</i></p>
            </div>
            </div>
        </div>
    </div>
    </div>
  </section>
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
    },
    filterDisplayPicture: function(arr){
      return  arr.filter(w => w.picture)
    }
  }
};
</script>

<style lang="scss" scoped>
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

.the-time {
  text-align: center;
  margin-bottom: 10px;
  // font-weight: 800;
}
.media-left {
  width: 35px;
}
.type-icon {
  width: 30px;
  display: block;
  margin: 0 auto 10px;
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
.display-pictures{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 20px;
  .small-speaker{
    width: 85px;
    display: inline-block;
    border-radius: 100px;
    border: 3px solid #F26522;
    margin: 5px 5px;
    // &:first-child{
    //   margin-left: 0;
    // }
    // &:last-child{
    //   margin-right: 0;
    // }
  }  
}
// .title-text {
//   font-weight: 600;
//   font-size: 1.2rem;
//   line-height: 1.5rem;
//   margin-bottom: 6px;
//   margin-top: 3px;
// }
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