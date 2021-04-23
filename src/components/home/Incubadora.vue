<template>
  <div class="hero is-custom is-medium">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-8">

        <div class="logo-container">
          <LogoDesktop v-if="showDesktop" />
          <LogoTouch v-if="showTouch" />
          <br />
          <br />
        </div>
        <div class="columns is-centered is-variable is-1-mobile is-8-tablet">
          <div class="column has-text-white">
            <div class="content has-text-centered">
              <!-- <p>
                Buscamos ideas replicables, de alto impacto, bajo costo y rápida
                ejecución para reactivar los espacios públicos pos–COVID–19 y
                contribuir a un nuevo común urbano más sostenible, inclusivo y
                resiliente.
              </p>
              <p>
                Las tres propuestas ganadoras serán parte de un proceso de
                incubación colaborativo liderado por nuestro equipo, en el que
                adaptaremos la idea a un prototipo a ser implementado en
                ciudades de Latinoamérica y el Caribe.
              </p> -->

              <p>Una incubadora es un ámbito diseñado para acelerar el crecimiento y asegurar el éxito de ideas y proyectos, a través de una variedad de recursos y herramientas. Está pensada para generar sinergia entre investigadores, profesionales, activistas y funcionarios de la administración pública.</p>

              <p>Si te interesa impulsar un proceso de incubación de proyectos cívicos en tu localidad, contactanos.</p>

              <p>Conocé la experiencia 2020 realizada desde Ciudades Comunes junto con el Laboratorio de Ciudades del BID y Placemaking Latinoamérica.</p>

            </div>
          </div>
        </div>
        <br />
        <br />
        <div class="columns is-vcentered">
          <div class="column is-hidden-mobile">
            <LazoOne />
          </div>
          <div class="column is-narrow has-text-centered">
            <router-link :to="{ name: 'Incubadora' }" class="button is-primary is-medium is-radiusless">
              <!-- <Boton class="the" /> -->
              CONOCE MÁS
            </router-link>
          </div>
          <div class="column">
            <LazoTwo />
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueScreenSize from "vue-screen-size";
import LogoDesktop from "@/assets/img/incubadora/incubadora-logo-wide.svg";
import LogoTouch from "@/assets/img/incubadora/incubadora-logo-mobile.svg";
import LazoOne from "@/assets/img/incubadora/lazo1.svg";
import LazoTwo from "@/assets/img/incubadora/lazo2.svg";
// import Boton from "@/assets/img/incubadora/boton-conoce-mas-01.svg";
import exponen from "@/data/exponenIncubadora";

export default {
  props: ["event", "next"],
  components: {
    LogoDesktop,
    LogoTouch,
    LazoOne,
    LazoTwo,
    // Boton,
  },
  mixins: [VueScreenSize.VueScreenSizeMixin],
  methods: {
    getTimeEvent: function (eventStarts) {
      if (eventStarts.getMinutes() == "0") {
        return eventStarts.getHours();
      }
      return `${eventStarts.getHours()}.${eventStarts.getMinutes()}`;
    },
  },
  computed: {
    showTouch: function () {
      return this.$vssWidth > 0 && this.$vssWidth <= 1024;
    },
    showDesktop: function () {
      return this.$vssWidth > 1024;
    },
    staff: function () {
      return exponen.filter((x) => {
        return x.type == "staff";
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.hero.is-custom {
  background-color: #6e559e;
}
.logo-container {
  margin-bottom: 30px;
}
.the-boton {
  max-width: 200px;
  // margin: 0 auto;
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
.event-container {
  padding: 20px;
  background-color: #fff;
}
.custom-size {
  font-size: 5.5rem !important;
  @media only screen and (max-width: 1024px) {
    font-size: 3rem !important;
  }
}

.small-speaker {
  border-radius: 400px;
}
.speaker-avatar {
  width: 200px;
  border-radius: 300px;
  margin-bottom: 25px;
  // @media only screen and (max-width: 600px) {
  // width: 100px;
  // }
}
.special-size {
  font-size: 0.9rem;
}
</style>