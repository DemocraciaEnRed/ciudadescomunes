<template>
  <section class="hero is-medium is-black">
    <!-- <Banner />  -->
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
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
        <div class="columns is-centered">
          <div class="column is-10">
              <p class="is-size-5 has-text-centered is-500">Una experiencia transdisciplinar para la activación de proyectos de Innovación Cívica desde la práctica del co-diseño y en un contexto de co-aprendizaje.</p>
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
  background: -moz-linear-gradient(0deg, rgba(110,85,158,1) 16%, rgba(86,68,121,1) 67%);
  background: -webkit-linear-gradient(0deg, rgba(110,85,158,1) 16%, rgba(86,68,121,1) 67%);
  background: linear-gradient(0deg, rgba(110,85,158,1) 16%, rgba(86,68,121,1) 67%);
}
</style>

<script>
import VueScreenSize from "vue-screen-size";
import LogoDesktop from "@/assets/img/incubadora/incubadora-logo-wide.svg";
import LogoTouch from "@/assets/img/incubadora/incubadora-logo-mobile.svg";
import LogoDesktopTopStream from "@/assets/img/incubadora/pattern-top.svg";
import LogoTouchTopStream from "@/assets/img/incubadora/pattern-top-mobile.svg";
export default {
  components: {
    LogoDesktop,
    LogoTouch,
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