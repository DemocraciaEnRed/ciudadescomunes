<template>
  <section class="hero is-black is-medium">
    <div class="hero-body">
      <div class="container">
       <h1 class="title is-1 is-size-2 is-700">facilitan</h1>
        <br>
        <br>
        <div class="columns is-multiline is-mobile is-centered">
          <div class="column is-6-mobile is-4-tablet is-one-fifth-desktop has-text-centered" v-for="(s,i) in staff" :key="`staff-${i}`">
          <img :src="`/img/exponen/${s.picture}`" class="image speaker-avatar is-centered" :alt="s.name">

        <h1 class="title is-5 is-size-6-touch is-700">{{s.name}}</h1>
        <h1 class="subtitle is-6 is-size-7-touch">{{s.org || '-'}}</h1>
        <span v-if="s.instagram" class="is-size-6" ><span v-for="j in s.instagram.split(',')" :key="`instagram${j}`">&nbsp;<a :href="`https://instagram.com/${j}`" target="_blank" class="has-text-white" ><i class="fab fa-instagram fa-lg fa-fw"></i></a>&nbsp;</span></span>
            <span v-if="s.twitter" class="is-size-6" ><span v-for="j in s.twitter.split(',')" :key="`twitter${j}`">&nbsp;<a :href="`https://twitter.com/${j}`" target="_blank" class="has-text-white" ><i class="fab fa-twitter fa-lg fa-fw"></i></a>&nbsp;</span></span>
            <span v-if="s.facebook" class="is-size-6" ><span v-for="j in s.facebook.split(',')" :key="`facebook${j}`">&nbsp;<a :href="`https://facebook.com/${j}`" target="_blank" class="has-text-white" ><i class="fab fa-facebook-f fa-lg fa-fw"></i></a>&nbsp;</span></span>
        <!-- <p class="has-text-centered is-size-7">{{s.bio}}</p> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import exponen from "@/data/exponenIncubadora";
import calendar from "@/data/incubadoraCalendar";

export default {
  computed: {
     staff: function(){
      return exponen.filter( x => {
        return x.type == 'staff'
      })
    }
  }

}
</script>

<style lang="scss" scoped>
.hero.is-black{
  background-color: #6e559e;
}
.lazo{
  max-width: 500px
}
.logo{
  margin-top: 20px;
  width:130px;
}
.conoce-mas{
  max-width: 180px;
}
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
.special-size{
  font-size: 0.9rem;
}

</style>