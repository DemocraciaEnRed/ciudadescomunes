<template>
  <div class="hero is-black">
    <div class="hero-body">

    <div class="container is-fluid">
      <h1 class="subtitle is-1 is-size-2-touch has-text-centered is-300 has-text-white my-6">
        sesiones <span class="is-700">especiales</span>
      </h1>
      <br>
      <br>
      <div class="columns is-centered is-multiline is-variable">
        <div class="column is-3 mb-6"  v-for="video in videos" :key="video.videoId">
           <div class="videoWrapper mb-5">
              <iframe
                width="853"
                height="480"
                :src="`https://www.youtube.com/embed/${video.videoId}`"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div class="title is-5 has-text-white mb-2">
              {{video.week}}
            </div>
            <hr class="mt-0">
            <div class="title is-3 is-size-5-touch has-text-white">
              {{video.title}}
            </div>
 <div class="subtitle is-size-7 has-text-white">
              Transmitido: {{video.date}}
            </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      videos: [
              {
        date: 'Jueves 27 de Agosto 2020',
        videoId: 'GU35iiG7yjM',
        week: 'Semana 2',
        title: 'Sesión con Alejandro Echeverri',
        invert: true
      },
      {
        date: 'Jueves 03 de Septiembre 2020',
        videoId: 'Vnmc40If8zM',
        week: 'Semana 3',
        title: 'Sesión con Andrés G Blanco',
        invert: false
      },
      {
        date: 'Jueves 10 de Septiembre 2020',
        videoId: '07wKVZtTizM',
        week: 'Semana 4',
        title: 'Sesión con Agustín Frizzera',
        invert: false
      },
      {
        date: 'Jueves 17 de Septiembre 2020',
        videoId: 'xOfaXXeOed0',
        week: 'Semana 5',
        title: 'Sesión con Renata Laurentino',
        invert: false
      },
      {
        date: 'Jueves 17 de Septiembre 2020',
        videoId: 'GBfmFOmU8UE',
        week: 'Semana 6',
        title: 'Sesión con Marialuisa Borja | Colectivo Al Borde',
        invert: false
      },
      {
        date: 'Jueves 17 de Septiembre 2020',
        videoId: 'xpoX_f5WitY',
        week: 'Semana 7',
        title: 'Sesión con Paola Jirón Martínez',
        invert: false
      },
      {
        date: 'Jueves 17 de Septiembre 2020',
        videoId: 'IhHKcX19bZw',
        week: 'Semana 8',
        title: 'Sesión Especial con el equipo de Ciudades Comunes',
        invert: false
      },
      ]
    }
  }
}
</script>

<style scoped>
.is-black{
 background: rgb(12,124,214);
background: -moz-linear-gradient(0deg, rgba(12,124,214,1) 64%, rgba(15,89,148,1) 100%);
background: -webkit-linear-gradient(0deg, rgba(12,124,214,1) 64%, rgba(15,89,148,1) 100%);
background: linear-gradient(0deg, rgba(12,124,214,1) 64%, rgba(15,89,148,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0c7cd6",endColorstr="#0f5994",GradientType=1); 
}
.videoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
  background-color: rgba(0, 0, 0, 0.164);
}
.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>