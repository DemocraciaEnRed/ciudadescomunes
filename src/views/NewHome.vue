<template>
  <div class="newhome">
    <main-stage />
    <talleres />
    <agenda />
    <exponen />
    <support />
  </div>
</template>

<script>
// @ is an alias to /src
import MainStage from '@/components/newHome/MainStage.vue'
import Talleres from '@/components/newHome/Talleres.vue'
import Exponen from '@/components/newHome/Exponen.vue'
import Support from '@/components/home/Support.vue'
import Agenda from '@/components/agenda/Agenda.vue'

export default {
  name: 'Home',
  components: {
    MainStage,
    Agenda,
    Talleres,
    Exponen,
    Support
  }
}
</script>
