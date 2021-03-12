<template>
  <div class="hero is-custom is-medium">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered is-centered">
          <div class="column is-4 is-narrow">
            <img src="@/assets/img/congreso2020/logo-cc-2020.png" class="image is-centered" width="250" alt=""/>
          </div>
          <div class="column is-6 has-text-centered">
            <h1 class="subtitle has-text-black title is-4 is-size-6-touch">23 y 24 de abril <span class="is-700">2020</span></h1>
            <LogoDesktop v-if="showDesktop" />
            <LogoTouch v-if="showTouch" />
            <br>
            <br>
            <div class="content">
              <p>Un encuentro online gratuito de 2 días, para repensar la co-construcción de la ciudad en época de crisis sanitaria global</p>
              <p><span class="is-600">¡Reviví el evento viendo los streams!</span></p>
            </div>
            <router-link :to="{name:'Congreso2020'}" class="button is-primary is-medium is-radiusless animated pulse infinite slow">
        <!-- <VerMas class="ver-mas animated pulse infinite slow" /> -->
              VER MÁS
            </router-link>
          </div>
        </div>
        <!-- 
        <br />
        <div class="columns is-variable is-1-mobile is-8-tablet">
          <div class="column is-6">
            <h2
              class="title is-5 has-text-black"
              style="margin-bottom:15px;"
            >Día 1 - 24 de abril 2020</h2>
            <div class="videoWrapper">
              <iframe
                width="853"
                height="480"
                :src="`https://www.youtube.com/embed/videoseries?list=PLn0MNwA9csxDqr4_HQjf0iwJk5_57JJ7Z`"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div class="column is-6">
            <h2
              class="title is-5 has-text-black"
              style="margin-bottom:15px;"
            >Día 2 - 24 de abril 2020</h2>
            <div class="videoWrapper">
              <iframe
                width="853"
                height="480"
                :src="`https://www.youtube.com/embed//videoseries?list=PLn0MNwA9csxA10EVfhdsNKW1K4XAe-5E2`"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <br>
        <br> -->
      </div>
    </div>
  </div>
</template>

<script>
// import VerMas from "@/assets/img/incubadora/ver-mas.svg";
import VueScreenSize from "vue-screen-size";
import LogoDesktop from "@/assets/img/congreso2020/congreso-logo-wide-black.svg";
import LogoTouch from "@/assets/img/congreso2020/congreso-logo-mobile-black.svg";

export default {
  mixins: [VueScreenSize.VueScreenSizeMixin],
  components: {
    LogoDesktop,
    LogoTouch
  },
  computed: {
    showTouch: function () {
      return this.$vssWidth > 0 && this.$vssWidth <= 1024;
    },
    showDesktop: function () {
      return this.$vssWidth > 1024;
    },
  }
};
</script>

<style lang="scss" scoped>
.hero.is-custom {
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
.ver-mas {
  max-width: 140px;
}
</style>
