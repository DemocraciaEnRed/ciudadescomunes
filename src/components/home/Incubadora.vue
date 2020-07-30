<template>
  <div class="hero is-custom is-medium">
    <div class="hero-body">
      <div class="container">
        <div class="logo-container">
          <LogoDesktop v-if="showDesktop" />
          <LogoTouch v-if="showTouch" />
        </div>
        <br>
        <div class="columns is-centered is-variable is-1-mobile is-8-tablet">
          <div class="column has-text-white">
            <div class="content">

            <p>¡Ya está abierta la convocatoria al ideatón Volver a la Calle que estamos impulsando junto con el BID!</p>
            <p>Buscamos ideas replicables, de alto impacto, bajo costo y rápida ejecución para reactivar los espacios públicos pos–COVID–19 y contribuir a un nuevo común urbano más sostenible, inclusivo y resiliente.</p>
            </div>
          </div>
          <div class="column has-text-white">
            <div class="content">

            <p>Las tres propuestas ganadoras serán parte de un proceso de incubación colaborativo liderado por nuestro equipo, en el que adaptaremos la idea a un prototipo a ser implementado en ciudades de Latinoamérica y el Caribe.</p>
            <p class="is-700">¡Postula tu propuesta hasta el 31 de Julio 2020 aquí!</p>
            </div>
          </div>
        </div>
        <br>
        <div class="columns is-vcentered">
          <div class="column is-hidden-mobile">
          <LazoOne />

          </div>
          <div class="column is-narrow has-text-centered">
         <router-link :to="{name:'Incubadora'}">
          <Boton class="the-boton animated pulse infinite"/>
            </router-link>

          </div>
          <div class="column">
          <LazoTwo />

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueScreenSize from "vue-screen-size";
import LogoDesktop from "@/assets/img/incubadora/volver_a_la_calle_logo_wide.svg";
import LogoTouch from "@/assets/img/incubadora/volver_a_la_calle_logo_mobile.svg";
import LazoOne from "@/assets/img/incubadora/lazo1.svg";
import LazoTwo from "@/assets/img/incubadora/lazo2.svg";
import Boton from "@/assets/img/incubadora/boton-conoce-mas-01.svg";


export default {
  components: {
    LogoDesktop,
    LogoTouch,
    LazoOne,
    LazoTwo,
    Boton,
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

<style lang="scss" scoped>
.hero.is-custom {
  background-color: #006ed7;
}
.logo-container {
  margin-bottom: 30px;
}
.the-boton{
  max-width:200px;
  // margin: 0 auto;
}
.custom-size {
  font-size: 5.5rem !important;
  @media only screen and (max-width: 1024px) {
    font-size: 3rem !important;
  }
}
</style>