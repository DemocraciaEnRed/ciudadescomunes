<template>
  <div class="section">
    <div class="container">
    <h1 class="title is-1 is-size-2-touch is-700">oradores</h1>
    <br>
    <br>
    <div class="columns is-multiline is-mobile is-centered">
      <div class="column is-1-desktop is-1-tablet is-2-mobile has-text-centered speaker-container" v-for="(s,i) in speakers" :key="`speaker${i}`">
        <a @click="scrollTo(s.picture.replace('.jpg',''))"><img :src="`/img/exponen/${s.picture}`" class="image small-speaker" alt=""></a>
      </div>
    </div>
    <br>
    <br>
    <br>
    <div class="media" :id="s.picture.replace('.jpg','')" v-for="(s,i) in speakers" :key="`speaker${i}`">
      <div class="media-left is-hidden-touch">
        <img :src="`/img/exponen/${s.picture}`" class="image speaker-avatar" :alt="s.name">
      </div>
      <div class="media-content">
      <div class="is-pulled-right is-hidden-touch">
          <span v-if="s.instagram" class="is-size-5" ><span v-for="j in s.instagram.split(',')" :key="`instagram${j}`">&nbsp;<a :href="`https://instagram.com/${j}`" target="_blank" class="has-text-dark" ><i class="fab fa-instagram fa-lg fa-fw"></i></a>&nbsp;</span></span>
            <span v-if="s.twitter" class="is-size-5" ><span v-for="j in s.twitter.split(',')" :key="`twitter${j}`">&nbsp;<a :href="`https://twitter.com/${j}`" target="_blank" class="has-text-dark" ><i class="fab fa-twitter fa-lg fa-fw"></i></a>&nbsp;</span></span>
            <span v-if="s.facebook" class="is-size-5" ><span v-for="j in s.facebook.split(',')" :key="`facebook${j}`">&nbsp;<a :href="`https://facebook.com/${j}`" target="_blank" class="has-text-dark" ><i class="fab fa-facebook-f fa-lg fa-fw"></i></a>&nbsp;</span></span>
      </div>
        <img :src="`/img/exponen/${s.picture}`" class="image speaker-avatar is-hidden-desktop" :alt="s.name">

        <h1 class="title is-2 is-size-3-touch is-700">{{s.name}}</h1>
        <h1 class="subtitle is-4 is-size-5-touch">{{s.org}}</h1>
      <div class="is-hidden-desktop">
          <span v-if="s.instagram" class="is-size-5" ><span v-for="j in s.instagram.split(',')" :key="`instagram${j}`">&nbsp;<a :href="`https://instagram.com/${j}`" target="_blank" class="has-text-dark" ><i class="fab fa-instagram fa-lg fa-fw"></i></a>&nbsp;</span></span>
            <span v-if="s.twitter" class="is-size-5" ><span v-for="j in s.twitter.split(',')" :key="`twitter${j}`">&nbsp;<a :href="`https://twitter.com/${j}`" target="_blank" class="has-text-dark" ><i class="fab fa-twitter fa-lg fa-fw"></i></a>&nbsp;</span></span>
            <span v-if="s.facebook" class="is-size-5" ><span v-for="j in s.facebook.split(',')" :key="`facebook${j}`">&nbsp;<a :href="`https://facebook.com/${j}`" target="_blank" class="has-text-dark" ><i class="fab fa-facebook-f fa-lg fa-fw"></i></a>&nbsp;</span></span>
      <br>
      <br>
      </div>
      <p v-html="s.bio"></p>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import exponen from "@/data/exponenArray";

export default {
  data(){
    return {

    }
  },
  mounted: function(){
    setTimeout(() => this.scrollTo(this.$route.query.id), 500)
    // this.scrollTo(this.$route.query.id)
  },
  methods: {
    scrollTo: function(id) {
      let rect = document.getElementById(id).getBoundingClientRect()
      window.scrollTo({
        top: ((rect.top) + window.scrollY - 80),
        left: 0,
        behavior: 'smooth'
      })
    },
  },
  computed: {
    speakers: function(){
      return exponen.filter( x => {
        return x.type != 'staff'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.small-speaker{
  border-radius: 400px;
}
.speaker-avatar{
  width: 200px;
  border-radius: 300px; 
  margin-bottom: 25px; 
  // @media only screen and (max-width: 600px) {
  // width: 100px;
  // }
}
.speaker-container {
  // min-height: 300px;
}
.special-size{
  font-size: 0.9rem;
}
</style>