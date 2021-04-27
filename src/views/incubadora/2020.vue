<template>
  <div class="incubadora2020">
    <Header />
    <VideoIntro />
    <hr>
    <Manual />
    <Manuales />
    <PreVideoRow />
    <VideoRow :video="videos[0]"/>
    <Sesiones />
    <Menciones />
    <MencionesTwo />
    <Presentacion />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/incubadora/2020/Header.vue'
import Manual from '@/components/incubadora/2020/Manual.vue'
import Manuales from '@/components/incubadora/2020/Manuales.vue'
import VideoIntro from '@/components/incubadora/2020/VideoIntro.vue'
import VideoRow from '@/components/incubadora/2020/VideoRow.vue'
import PreVideoRow from '@/components/incubadora/2020/PreVideoRow.vue'
import Sesiones from '@/components/incubadora/2020/Sesiones.vue'
import Menciones from '@/components/incubadora/2020/Menciones.vue'
import MencionesTwo from '@/components/incubadora/2020/MencionesTwo.vue'
import Presentacion from '@/components/incubadora/2020/Presentacion.vue'


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
    Manual,
    Manuales,
    VideoIntro,
    PreVideoRow,
    VideoRow,
    Sesiones,
    Menciones,
    MencionesTwo,
    Presentacion
  }
}
</script>
