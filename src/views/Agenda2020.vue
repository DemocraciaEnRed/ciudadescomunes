<template>
  <div class="home">
    <Header />
    <Agenda />
  </div>
</template>
<script>

// @ is an alias to /src
import Header from '@/components/agenda2020/Header.vue'
import Agenda from '@/components/agenda2020/Agenda.vue'

export default {
  name: 'Agenda2020',
  components: {
    Header,
    Agenda
  }
}
</script>
