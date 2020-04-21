<template>
  <div class="home">
    <Header />
    <about />

  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/nosotros/Header.vue'
import About from '@/components/nosotros/About.vue'

export default {
  name: 'QuienesSomos',
  components: {
    Header,
    About
  }
}
</script>
