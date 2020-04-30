<template>
  <div class="hero is-custom">
    <div class="hero-body">
      <div class="container">

      <div class="columns is-variable is-1-mobile is-8-tablet">
        <div class="column is-6">
          <h1 class="title is-1 is-700">Día 1</h1>
          <h2 class="subtitle is-3 has-text-black">24 de abril 2020</h2>
          <div class="videoWrapper">
             <iframe width="560" height="315" :src="`https://www.youtube.com/embed/eAnDFgyt7Zs`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <div class="column is-6">
          <h1 class="title is-1 is-700">Día 2</h1>
          <h2 class="subtitle is-3 has-text-black">25 de abril 2020</h2>
          <div class="videoWrapper">
             <iframe width="560" height="315" :src="`https://www.youtube.com/embed/GOJHd0CI1p4`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
      </div>
      <p><router-link :to="{name: 'Agenda'}" class="has-text-black"><u>Ver programación completa y grilla horaria</u></router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.hero.is-custom{
  background-color: #f8adcc;
}
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
