<template>
  <div class="section">
    <div class="container">
    <h1 class="title is-1 is-size-2-touch is-700">exponen</h1>
    <br>
    <br>
    <div class="columns is-multiline is-mobile is-centered">

    <div class="column is-2-desktop is-3-tablet is-4-mobile has-text-centered speaker-container" v-for="(s,i) in speakers" :key="`speaker${i}`">
      <router-link :to="{name:'Exponen', query: { id: s.picture.replace('.jpg','')}}"><img :src="`/img/exponen/${s.picture}`" class="image speaker-avatar" alt=""></router-link>
      <h1 class="title is-5 is-700 is-marginless">{{s.name}}</h1>
      <h1 class="subtitle special-size is-marginless">{{s.org}}</h1>
      <br>
      <div>
          <span v-if="s.instagram" ><span v-for="j in s.instagram.split(',')" :key="`instagram${j}`">&nbsp;<a :href="`https://instagram.com/${j}`" target="_blank" class="has-text-dark" ><i class="fab fa-instagram fa-lg fa-fw"></i></a>&nbsp;</span></span>
            <span v-if="s.twitter" ><span v-for="j in s.twitter.split(',')" :key="`twitter${j}`">&nbsp;<a :href="`https://twitter.com/${j}`" target="_blank" class="has-text-dark" ><i class="fab fa-twitter fa-lg fa-fw"></i></a>&nbsp;</span></span>
            <span v-if="s.facebook" ><span v-for="j in s.facebook.split(',')" :key="`facebook${j}`">&nbsp;<a :href="`https://facebook.com/${j}`" target="_blank" class="has-text-dark" ><i class="fab fa-facebook-f fa-lg fa-fw"></i></a>&nbsp;</span></span>
      </div>
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
      speakers: exponen
    }
  }
}
</script>

<style lang="scss" scoped>
.speaker-avatar{
  // width: 300px;
  // height: 300px;
  margin-bottom: 20px;
  border-radius: 200px;
}
.speaker-container {
  // min-height: 300px;
}
.special-size{
  font-size: 0.9rem;
}
</style>