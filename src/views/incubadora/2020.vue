<template>
  <div class="incubadora2020">
    <Header />
    <VideoIntro />
    <PreVideoRow />
    <VideoRow :video="videos[0]"/>
    <Sesiones />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/incubadora2020/Header.vue'
import VideoIntro from '@/components/incubadora2020/VideoIntro.vue'
import VideoRow from '@/components/incubadora2020/VideoRow.vue'
import PreVideoRow from '@/components/incubadora2020/PreVideoRow.vue'
import Sesiones from '@/components/incubadora2020/Sesiones.vue'


export default {
  name: 'Incubadora2020',
  data() {
    return {
      videos: [
      {
        date: 'Jueves 20 de Agosto 2020',
        videoId: 'Vnmc40If8zM',
        week: 'Semana 1',
        title: 'Bienvenida y presentación de los proyectos y equipos ganadores',
        invert: false
      }
      ]
    }
  },
  components: {
    Header,
    VideoIntro,
    PreVideoRow,
    VideoRow,
    Sesiones
  }
}
</script>
