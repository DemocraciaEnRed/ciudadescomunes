<template>
  <div class="home">
    <intro />
    <numbers />
    <videos />
    <what-is />
    <contents />
    <context />
    <questions />
    <about />
    <topic-mosaic/>
    <register />
    <support />
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from '@/components/home/Intro.vue'
import Contents from '@/components/home/Contents.vue'
import About from '@/components/home/About.vue'
import Register from '@/components/home/Register.vue'
import Questions from '@/components/home/Questions.vue'
import Context from '@/components/home/Context.vue'
import TopicMosaic from '@/components/home/TopicMosaic.vue'
import WhatIs from '@/components/home/WhatIs.vue'
import Support from '@/components/home/Support.vue'
import Numbers from '@/components/home/Numbers.vue'
import Videos from '@/components/home/Videos.vue'

export default {
  name: 'Home',
  components: {
    Intro,
    Numbers,
    Videos,
    Contents,
    About,
    Register,
    Questions,
    Context,
    TopicMosaic,
    WhatIs,
    Support
  }
}
</script>
