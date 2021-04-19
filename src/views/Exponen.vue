<template>
  <div class="exponen">
    <Header />
    <Exponen />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/agenda2020/Header.vue'
import Exponen from '@/components/exponen/Exponen.vue'

export default {
  name: 'TheExponen',
  components: {
    Header,
    Exponen
  }
}
</script>
