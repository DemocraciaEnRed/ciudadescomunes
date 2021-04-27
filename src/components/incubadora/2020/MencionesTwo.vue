<template>
  <div class="section">
    <div class="container">
      <div class="columns is-centered is-multiline">
        <div class="column is-12-mobile is-6-tablet is-6-desktop is-4-widescreen" v-for="video in videos" :key="video.videoId">
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
           <div class="subtitle is-5 mb-3">
              {{video.week}}
            </div>
            <hr class=" my-3">
            <div class="title is-5 is-size-6-touch is-700 my-3">
              {{video.title}}
            </div>
            <div class="subtitle is-6 my-3">
              {{video.subtitle}}
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      videos: [
      {
        videoId: 'ZvO5FLUqraY',
        week: 'Panamá',
        title: 'Cultibarrio',
        subtitle: 'Mery Bethancourt y Anita Espinal'
      },
      {
        videoId: '-bPT3N5ucV0',
        week: 'Ecuador',
        title: 'Agitador barrial',
        subtitle: 'Carolina Rodas, Felipe Donoso (Rama Estudio)'
      },
      {
        videoId: '1dOLxNbeiAI',
        week: 'México',
        title: 'Tangram Urbano',
        subtitle: 'Eric Fajardo y Larissa Pérez'
      },
      {
        videoId: 'bxCkzpLYuOo',
        week: 'Chile',
        title: 'Escuela Ciudadana',
        subtitle: 'José Gómez (Espacio Lúdico)'
      },
      {
        videoId: 'N2OgX6GHpdE',
        week: 'Brasil',
        title: 'Adaptação de espaços públicos à pandemia de Covid-19: curso de formação de agentes locais multiplicadores',
        subtitle: 'LabIT - Laboratório de Intervenções Temporárias e Urbanismo Tático'
      },
      {
        videoId: 'Ue1MLMb8Ehc',
        week: 'Brasil',
        title: 'Gambiarra: uma banca de feira sustentável e portátil',
        subtitle: 'Vao Urbano'
      },
      {
        videoId: 'TC1m8gGkZQ8',
        week: 'Brasil',
        title: 'Parada Segura',
        subtitle: 'Turba'
      },
      {
        videoId: 'CNDF5T2NPr8',
        week: 'Bolivia',
        title: 'Nueva normalidad del comercio informal de abasto en espacios públicos mediante la multipertenencia',
        subtitle: 'Celeste Barraza Kaune, Cristian Mariaca Cardona, Ana Arroyo Flores, Josue Tenorio Meza, Camila Marza, Lucía Cazorla Perez'
      }
    ]
    }
  }
}
</script>

<style lang="scss" scoped>
.videoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}
.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>