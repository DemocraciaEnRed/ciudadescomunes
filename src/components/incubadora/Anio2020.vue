<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
              <h1 class="title is-1 is-size-2-touch has-text-centered is-700">Año 2020</h1>
            <hr class="has-background-black" style="max-width: 700px; margin: 40px auto;">
        <div class="columns is-centered is-vcentered">
          <div class="column is-3">
            <VolverACalle/>
          </div>
          <div class="column is-narrow">
            &nbsp;&nbsp;<i class="fas fa-plus fa-3x fa-fw"></i>&nbsp;&nbsp;
          </div>
          <div class="column is-4">
            <LogoTouch/>
          </div>
        </div>
            <hr class="has-background-black" style="max-width: 700px; margin: 40px auto;">
        <div class="columns is-centered">
          <div class="column is-5">

              <p class=" is-size-5 has-text-centered is-300">Si esta interesado en la experiencia y quiere aplicarlo en su entorno, Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi.</p>
              <br>
              <div class="buttons is-centered">
                <a href="https://google.com" class="button is-white is-uppercase is-large animated pulse infinite slow">VER MÁS</a>
              </div>
          </div>
        </div>
      </div>
    </div>
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
import LogoDesktop from "@/assets/img/incubadora/incubadora-logo-wide-black.svg";
import LogoTouch from "@/assets/img/incubadora/incubadora-logo-mobile-black.svg";
import VolverACalle from "@/assets/img/incubadora/volver_a_la_calle_logo_mobile-5-black.svg";
import LogoDesktopTopStream from "@/assets/img/incubadora/pattern-top.svg";
import LogoTouchTopStream from "@/assets/img/incubadora/pattern-top-mobile.svg";
export default {
  components: {
    LogoDesktop,
    LogoTouch,
    LogoDesktopTopStream,
    LogoTouchTopStream,
    VolverACalle
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