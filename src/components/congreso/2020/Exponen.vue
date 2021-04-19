<template>
  <div class="hero is-azul is-medium">
      <div class="hero-body">

    <div class="container">
    <h1 class="title is-1 is-size-2-touch is-700 has-text-centered mb-6">oradores</h1>
    <div class="columns is-multiline is-mobile is-centered">
      <div class="column is-1-desktop is-1-tablet is-2-mobile has-text-centered speaker-container mb-2" v-for="(s,i) in speakers" :key="`speaker${i}`">
          <b-tooltip position="is-bottom" multilined>
             <template v-slot:content>
                <b>{{s.name}}</b><br><span class="is-size-7"><i>{{s.org}}</i></span>
            </template>
        <a @click="scrollTo(s.picture.replace('.jpg',''))"><img :src="`/img/exponen/${s.picture}`" class="image small-speaker" alt=""></a>
          </b-tooltip>
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