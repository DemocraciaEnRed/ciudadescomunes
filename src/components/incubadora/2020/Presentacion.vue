<template>
  <div class="hero is-primary is-medium is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-1 is-size-2-touch is-300 has-text-centered">presentacion de<br><span class="is-700">los proyectos seleccionados</span></h1>
        <br>
        <br>
        <br>
        <br>
        <div class="columns is-vcentered is-centered mb-5">
          <div class="column is-6">
            <div class="videoWrapper">
              <iframe
                width="853"
                height="480"
                :src="`https://www.youtube.com/embed/JXr0xEs3Feo`"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div class="column is-offset-1">
            <div class="subtitle is-4 mb-3">
              Semana 11
            </div>
            <hr class=" my-3">
            <div class="title is-3 is-size-4-touch is-700 my-3">
              Presentación pública y lanzamiento
            </div>
            <div class="subtitle is-6 my-3">
              Transmitido: 19 de Noviembre 2020
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['video']
}
</script>

<style scoped>
/* .is-black {
   background: rgb(110,85,158);
} */
.videoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
  background-color: #000;
}
.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>