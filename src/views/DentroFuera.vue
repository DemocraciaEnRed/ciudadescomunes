<template>
  <div class="home">
    <Header />
    <about />

  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/dentrofuera/Header.vue'
import About from '@/components/dentrofuera/About.vue'

export default {
  name: 'DentroFuera',
  components: {
    Header,
    About
  }
}
</script>
