<template>
  <div class="home">
    <Header />
    <Agenda />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/agenda/Header.vue'
import Agenda from '@/components/agenda/Agenda.vue'

export default {
  name: 'TheAgenda',
  components: {
    Header,
    Agenda
  }
}
</script>
