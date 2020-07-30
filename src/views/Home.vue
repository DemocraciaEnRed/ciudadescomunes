<template>
  <div class="home">
    <intro />
    <incubadora />
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
  }
}
</script>
