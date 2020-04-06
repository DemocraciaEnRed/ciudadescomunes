<template>
  <div class="home">
    <intro />
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from '@/components/home/Intro.vue'

export default {
  name: 'Home',
  components: {
    Intro
  }
}
</script>
