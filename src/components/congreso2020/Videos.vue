<template>
  <div class="hero is-custom is-medium">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-1 is-size-2-touch has-text-centered is-700">congreso 2020</h1>
        <br />
        <div class="columns is-variable is-1-mobile is-8-tablet">
          <div class="column is-6">
            <h2
              class="title is-5 has-text-black"
              style="margin-bottom:15px;"
            >Día 1 - 24 de abril 2020</h2>
            <div class="videoWrapper">
              <iframe
                width="560"
                height="315"
                :src="`https://www.youtube.com/embed/eAnDFgyt7Zs`"
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
                width="560"
                height="315"
                :src="`https://www.youtube.com/embed/GOJHd0CI1p4`"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <br>
        <br>
        <div class="has-text-centered">
        <StatsDesktop v-if="showDesktop" />
        <StatsTouch v-if="showTouch" />
        </div>
        <br>
        <br>
        <div class="has-text-centered">
          <router-link :to="{name:'Exponen'}">
            <ConsultaOradores class="boton" />
          </router-link>
        </div>
        <br>
        <div class="has-text-centered">
          <router-link :to="{name:'Agenda'}">
            <ConsultaProgramacion class="boton" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueScreenSize from "vue-screen-size";
import StatsDesktop from "@/assets/img/congreso2020/stats-congreso-wide.svg";
import StatsTouch from "@/assets/img/congreso2020/stats-congreso-mobile.svg";
import ConsultaOradores from "@/assets/img/congreso2020/consulta-oradores.svg";
import ConsultaProgramacion from "@/assets/img/congreso2020/consulta-programacion.svg";

export default {
  components: {
    StatsDesktop,
    StatsTouch,
    ConsultaOradores,
    ConsultaProgramacion
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
.boton {
  max-height: 50px;
}
</style>