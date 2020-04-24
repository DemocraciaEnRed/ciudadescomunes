<template>
  <div class="exponen">
    <Header />
    <Exponen />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/agenda/Header.vue'
import Exponen from '@/components/exponen/Exponen.vue'

export default {
  name: 'TheExponen',
  components: {
    Header,
    Exponen
  }
}
</script>
