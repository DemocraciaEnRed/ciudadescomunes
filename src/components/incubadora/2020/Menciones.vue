<template>
<div>
<div class="hero is-rosa">
    <div class="hero-body">
        <div class="container">
            <h1 class="title is-1 is-size-2-touch is-300 has-text-centered mb-6">menciones <span class="is-700">especiales</span></h1>

  <div class="columns is-centered mb-0">
    <div class="column">
        <div class="p-3 has-background-primary">

      <div class="videoWrapper">
        <iframe
          width="853"
          height="480"
          :src="`https://www.youtube.com/embed/qcBNEqXuL-s`"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        </div>
      <a href="https://www.youtube.com/watch?v=qcBNEqXuL-s" target="_blank">
      <div class="p-5">
         <div class="subtitle is-4 mb-3">
              Semana 9
            </div>
            <hr class="has-background-black my-3">
            <div class="title is-3 is-size-4-touch has-text-black is-700 my-3">
              Sesión con proyectos con Menciones
            </div>
            <div class="subtitle is-6 my-3">
              Transmitido: 15 de Octubre 2020
            </div>
      </div>
      </a>
      </div>
    </div>
    <div class="column">
        <div class="p-3 has-background-primary">

      <div class="videoWrapper">
        <iframe
          width="853"
          height="480"
          :src="`https://www.youtube.com/embed/prXBlQCgoB8`"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        </div>
      <a href="https://www.youtube.com/watch?v=prXBlQCgoB8" target="_blank">
      <div class="p-5">
        <div class="subtitle is-4 mb-3">
          Semana 10
        </div>
        <hr class="has-background-black my-3">
        <div class="title is-3 is-size-4-touch has-text-black is-700 my-3">
          Sesión con proyectos con Menciones
        </div>
        <div class="subtitle is-6 my-3">
          Transmitido: 22 de Octubre 2020
        </div>
      </div>
      </a>
      </div>
    </div>
  </div>
        </div>
    </div>
</div>
</div>
</template>

<script>
export default {};
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