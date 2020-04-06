<template>
  <div class="home">
    <intro />
    <contents />
    <about />
    <register />
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from '@/components/home/Intro.vue'
import Contents from '@/components/home/Contents.vue'
import About from '@/components/home/About.vue'
import Register from '@/components/home/Register.vue'

export default {
  name: 'Home',
  components: {
    Intro,
    Contents,
    About,
    Register
  }
}
</script>
