<template>
  <div class="incubadora">
    <Header />
    <About />
    <Register />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/incubadora/Header.vue'
import About from '@/components/incubadora/About.vue'
import Register from '@/components/incubadora/Register.vue'


export default {
  name: 'Congreso2020',
  components: {
    Header,
    About,
    Register,
  }
}
</script>
