<template>
  <section class="hero is-primary">
    <RouterLink to="/incubadora/2020">
    <div class="hero-body">
      <div class="container">
              <h1 class="title is-1 is-size-2-touch has-text-centered is-700">Año 2020</h1>
            <br>
            <!-- <hr class="has-background-black" style="max-width: 700px; margin: 40px auto;"> -->
        <div class="columns is-centered is-vcentered">
          <div class="column is-6">
            <AllInOne/>
          </div>
        </div>
            <br>
            <!-- <hr class="has-background-black" style="max-width: 700px; margin: 40px auto;"> -->
        <div class="columns is-centered">
          <div class="column is-8 content">

              <!-- <p class=" is-size-6 has-text-centered">
                Desde el Laboratorio de Ciudades del BID, junto con el equipo de Ciudades Comunes y Placemaking Latinoamérica, se realizó una convocatoria a principios de julio de 2020 buscando ideas de la sociedad civil para reactivar los espacios públicos con distanciamiento físico y recuperar la confianza pública en la vida urbana. 
              </p>
              <p class=" is-size-6 has-text-centered">
              Las ideas ganadoras, además de recibir un premio monetario, fueron parte de un proceso de incubación colaborativo digital a cargo de Ciudades Comunes para adaptar la idea a un prototipo que se pueda implementar en la ciudad de los equipos ganadores. 
              </p> -->
              <br>
              <div class="buttons is-centered">
                <RouterLink to="/incubadora/2020" class="button is-white is-uppercase is-large animated pulse infinite slow">CONOCÉ MÁS</RouterLink>
              </div>
          </div>
        </div>
      </div>
    </div>
    </RouterLink>
  </section>
</template>

<script>
// import Banner from '@/assets/img/incubadora/incubadora-banner.svg'

export default {
  components:{
    // Banner,
  },
}
</script>

<style lang="scss" scoped>
.hero.is-black{
  background: rgb(110,85,158);
  background: -moz-linear-gradient(180deg, rgba(110,85,158,1) 16%, rgba(86,68,121,1) 67%);
  background: -webkit-linear-gradient(180deg, rgba(110,85,158,1) 16%, rgba(86,68,121,1) 67%);
  background: linear-gradient(180deg, rgba(110,85,158,1) 16%, rgba(86,68,121,1) 67%);
}
</style>

<script>
import VueScreenSize from "vue-screen-size";
import AllInOne from "@/assets/img/incubadora2020/cc-incubadora-same.svg";
export default {
  components: {
    AllInOne,
  },
  mixins: [VueScreenSize.VueScreenSizeMixin],
  computed: {
    showTouch: function () {
      return this.$vssWidth > 0 && this.$vssWidth <= 1024;
    },
    showDesktop: function () {
      return this.$vssWidth > 1024;
    },
  },
};
</script>