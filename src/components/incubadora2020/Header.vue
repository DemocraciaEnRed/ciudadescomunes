<template>
  <section class="hero is-special">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered" style="margin-top:80px;">
          <div class="column is-10">
              <LogoDesktop v-if="showDesktop" />
              <LogoTouch v-if="showTouch" />
              <br>
              <br>
              <LogoDesktopTopStream v-if="showDesktop" />
              <LogoTouchTopStream v-if="showTouch" />
              <br>
              <br>
          </div>
        </div>
        <br>

        <br>
        <div class="columns is-centered is-vcentered">
          <div class="column is-8 has-text-centered">
            <AllInOne class="my-image"/>
          </div>
        </div>
        <br>
        <br>
        <!-- <hr class="has-background-black" style="max-width: 700px; margin: 40px auto;"> -->
        <div class="columns is-centered">
          <div class="column is-8 content">
            <p class=" is-size-6 has-text-centered is-300">
              Desde el Laboratorio de Ciudades del BID, junto con el equipo de Ciudades Comunes y Placemaking Latinoamérica, se realizó una convocatoria a principios de julio de 2020 buscando ideas de la sociedad civil para reactivar los espacios públicos con distanciamiento físico y recuperar la confianza pública en la vida urbana. 
            </p>
            <p class=" is-size-6 has-text-centered is-300">
              Las ideas ganadoras, además de recibir un premio monetario, fueron parte de un proceso de incubación colaborativo digital a cargo de Ciudades Comunes para adaptar la idea a un prototipo que se pueda implementar en la ciudad de los equipos ganadores. 
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueScreenSize from "vue-screen-size";
// import LogoTouchCC from "@/assets/img/incubadora2020/cc.svg";
// import VolverACalle from "@/assets/img/incubadora/volver_a_la_calle_logo_mobile-5-black.svg";
import AllInOne from "@/assets/img/incubadora2020/cc-incubadora-same.svg";
import LogoDesktop from "@/assets/img/incubadora/incubadora-logo-wide-black.svg";
import LogoTouch from "@/assets/img/incubadora/incubadora-logo-mobile-black.svg";
import LogoDesktopTopStream from "@/assets/img/incubadora/pattern-top.svg";
import LogoTouchTopStream from "@/assets/img/incubadora/pattern-top-mobile.svg";
export default {
  components: {
    // LogoTouchCC,
    // VolverACalle,
    AllInOne,
    LogoTouch,
    LogoDesktop,
    LogoDesktopTopStream,
    LogoTouchTopStream
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
.is-special{
  background: rgb(255,255,255);
  background: -moz-linear-gradient(0deg, rgba(255,255,255,1) 10%, rgba(255,222,23,1) 80%);
  background: -webkit-linear-gradient(0deg, rgba(255,255,255,1) 10%, rgba(255,222,23,1) 80%);
  background: linear-gradient(0deg, rgba(255,255,255,1) 10%, rgba(255,222,23,1) 80%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#ffde17",GradientType=1); 
}
.my-image{
  max-height: 160px;
  margin: 0 auto;
}
</style>