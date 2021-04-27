<template>
<section>

  <div class="hero is-black">
    <div class="hero-body">

    <div class="container">
      <h1 class="subtitle is-1 is-size-2-touch has-text-centered is-300 has-text-white mb-3">
        sesiones <span class="is-700">especiales</span>
      </h1>
      <h1 class="subtitle is-4 has-text-centered is-300 has-text-white mb-6">
        expositores invitados
      </h1>
      <Exponen class="" />
    </div>
    </div>
  </div>
  <div class="section">
    <div class="container">

    <div class="columns is-centered is-vcentered" v-for="video in videos" :key="video.videoId">
        <div class="column is-6">
           <div class="videoWrapper">
              <iframe
                width="853"
                height="480"
                :src="`https://www.youtube.com/embed/${video.videoId}`"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
        </div>
        <div class="column is-offset-1-desktop is-offset-0-touch">
            <div class="subtitle is-4">
              {{video.week}}
            </div>
            <hr class="my-3">
          <div class="media">
          <div class="media-left">
             <img
              :src="`/img/exponenincu/${video.picture}`"
              class="image small-speaker"
              alt=""
            />
          </div>
          <div class="media-content">
            <div class="title is-3 is-size-4-touch is-700 my-3">
              {{video.title}}
            </div>
            <div class="subtitle is-6 my-3">
              Transmitido: {{video.date}}
            </div>
          </div>
          </div>  
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import Exponen from './Exponen.vue'

export default {
  components: {
    Exponen
  },
  data(){
    return{
      videos: [
              {
        date: 'Jueves 27 de Agosto 2020',
        videoId: 'GU35iiG7yjM',
        week: 'Semana 2',
        title: 'Sesión con Alejandro Echeverri',
        picture: 'alejandroecheverri.jpg'
      },
      {
        date: 'Jueves 03 de Septiembre 2020',
        videoId: 'Vnmc40If8zM',
        week: 'Semana 3',
        title: 'Sesión con Andrés G Blanco',
        picture: 'andresblanco.jpg'
      },
      {
        date: 'Jueves 10 de Septiembre 2020',
        videoId: '07wKVZtTizM',
        week: 'Semana 4',
        title: 'Sesión con Agustín Frizzera',
        picture: 'agustinfrizzera.jpg'
      },
      {
        date: 'Jueves 17 de Septiembre 2020',
        videoId: 'xOfaXXeOed0',
        week: 'Semana 5',
        title: 'Sesión con Renata Laurentino',
        picture: 'renata.jpg'
      },
      {
        date: 'Jueves 24 de Septiembre 2020',
        videoId: 'GBfmFOmU8UE',
        week: 'Semana 6',
        title: 'Sesión con Marialuisa Borja | Colectivo Al Borde',
        picture: 'marialuisa.jpg'
      },
      {
        date: 'Jueves 1 de Octubre 2020',
        videoId: 'xpoX_f5WitY',
        week: 'Semana 7',
        title: 'Sesión con Paola Jirón Martínez',
        picture: 'paola.jpg'
      },
      {
        date: 'Jueves 8 de Octubre 2020',
        videoId: 'IhHKcX19bZw',
        week: 'Semana 8',
        title: 'Sesión Especial con el equipo de Ciudades Comunes',
        picture: 'cc.png'
      },
      ]
    }
  }
}
</script>

<style scoped>
.is-black{
 background: rgb(12,124,214);
background: -moz-linear-gradient(0deg, rgba(12,124,214,1) 34%, rgba(15,89,148,1) 100%);
background: -webkit-linear-gradient(0deg, rgba(12,124,214,1) 34%, rgba(15,89,148,1) 100%);
background: linear-gradient(0deg, rgba(12,124,214,1) 34%, rgba(15,89,148,1) 100%);
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

.small-speaker {
  border-radius: 400px;
  width: 100px;
  margin: 0 10px;
  @media only screen and (max-width: 798px) {
    width: 80px;
  }
}
</style>