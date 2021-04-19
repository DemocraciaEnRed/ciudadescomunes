<template>
<div class="card">
  <div class="card-content">

  <div class="media">
      <div class="media-left is-hidden-touch">
        <img :src="`/img/exponen/${subject.picture}`" class="image speaker-avatar" :alt="subject.name">
      </div>
      <div class="media-content">
      <div class="is-pulled-right is-hidden-touch">
          <span v-if="subject.instagram" class="is-size-5" ><span v-for="j in subject.instagram.split(',')" :key="`instagram${j}`">&nbsp;<a :href="`https://instagram.com/${j}`" target="_blank" class="has-text-dark" ><i class="fab fa-instagram fa-lg fa-fw"></i></a>&nbsp;</span></span>
            <span v-if="subject.twitter" class="is-size-5" ><span v-for="j in subject.twitter.split(',')" :key="`twitter${j}`">&nbsp;<a :href="`https://twitter.com/${j}`" target="_blank" class="has-text-dark" ><i class="fab fa-twitter fa-lg fa-fw"></i></a>&nbsp;</span></span>
            <span v-if="subject.facebook" class="is-size-5" ><span v-for="j in subject.facebook.split(',')" :key="`facebook${j}`">&nbsp;<a :href="`https://facebook.com/${j}`" target="_blank" class="has-text-dark" ><i class="fab fa-facebook-f fa-lg fa-fw"></i></a>&nbsp;</span></span>
      </div>
        <img :src="`/img/exponen/${subject.picture}`" class="image speaker-avatar is-hidden-desktop" :alt="subject.name">

        <h1 class="title is-2 is-size-3-touch is-700">{{subject.name}}</h1>
        <h1 class="subtitle is-4 is-size-5-touch">{{subject.org}}</h1>
      <div class="is-hidden-desktop">
          <span v-if="subject.instagram" class="is-size-5" ><span v-for="j in subject.instagram.split(',')" :key="`instagram${j}`">&nbsp;<a :href="`https://instagram.com/${j}`" target="_blank" class="has-text-dark" ><i class="fab fa-instagram fa-lg fa-fw"></i></a>&nbsp;</span></span>
            <span v-if="subject.twitter" class="is-size-5" ><span v-for="j in subject.twitter.split(',')" :key="`twitter${j}`">&nbsp;<a :href="`https://twitter.com/${j}`" target="_blank" class="has-text-dark" ><i class="fab fa-twitter fa-lg fa-fw"></i></a>&nbsp;</span></span>
            <span v-if="subject.facebook" class="is-size-5" ><span v-for="j in subject.facebook.split(',')" :key="`facebook${j}`">&nbsp;<a :href="`https://facebook.com/${j}`" target="_blank" class="has-text-dark" ><i class="fab fa-facebook-f fa-lg fa-fw"></i></a>&nbsp;</span></span>
      <br>
      <br>
      </div>
      <p v-html="subject.bio"></p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['subject']
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