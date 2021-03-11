<template>
  <div class="hero is-custom is-medium">
    <div class="hero-body">
      <div class="container">
        <section v-if="event">
          <div class="logo-container">
            <LogoDesktop v-if="showDesktop" />
            <LogoTouch v-if="showTouch" />
            <br>
            <br>
            <LogoDesktopTopStream v-if="showDesktop" />
            <LogoTouchTopStream v-if="showTouch" />
          </div>
          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <div class="tile is-child">
                <div class="videoWrapper">
                  <iframe
                    width="853"
                    height="480"
                    :src="`https://www.youtube.com/embed/${event.streamId}`"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div class="tile is-child is-4 event-container">
                <h5 class="subtitle is-300">{{getTimeEvent(event.when)}} HS</h5>
                <h5 class="title is-600">{{event.title}}</h5>
                <div v-for="(p,i) in event.text" :key="`text${i}`" v-html="p"></div>
              </div>
            </div>
          </div>
          <div class="logo-container">
            <LogoDesktopBottomStream v-if="showDesktop" />
            <LogoTouchBottomStream v-if="showTouch" />
          </div>
          <div class="columns is-centered is-variable is-1-mobile is-8-tablet has-text-white">
            <div class="column">
              <h1 class="title is-2 has-text-white">Mira el proceso de incubación en vivo</h1>
              <div class="content">
                <p>El proceso de incubación consta de un calendario de sesiones de trabajo que tiene una duración de 2 meses. Cada semana tendremos dos sesiones, una teórica con streaming en directo con la participación de una persona experta invitada y otra sesión de trabajo durante las cuales nuestros facilitadores expertos estarán apoyando el desarrollo de los tres proyectos seleccionados.</p>
                <p>Además, durante el proceso tendremos dos sesiones “maratones” las cuales tendrán una duración de 4 horas cada una y también serán transmitidas en directo. Estos maratones de trabajo servirán para acelerar el desarrollo de los proyectos fortaleciendo el intercambio entre proyectos y personas y marcando un cambio de fase en el progreso de cada una de las iniciativas</p>
              </div>
            </div>
            <div class="column">
              <h1 class="title is-1 has-text-white is-size-2-touch">volver a la Calle</h1>
              <div class="content">
                <p>El día 10 de agosto se anunciarán los 3 tres proyectos seleccionados en el Ideatón organizado por La División de Vivienda y Desarrollo Urbano del BID, desde su LAB Ciudades, en alianza con Ciudades Comunes, sede Placemaking Latinoamérica 2020.</p>
                <p>Las tres propuestas ganadoras serán parte de un proceso de incubación colaborativo liderado por nuestro equipo, en el que adaptaremos las ideas para convertirlas en un prototipo que pueda ser implementado en ciudades de Latinoamérica y el Caribe.</p>
                <a href="https://www.iadb.org/es/desarrollo-urbano-y-vivienda/ideaton-volver-la-calle-soluciones-poscovid19-nuevo-comun-urbano" target="_blank">
                </a>
              </div>
            </div>
          </div>
          <br>
        <br>
       <h1 class="title is-1 is-size-2 is-700 has-text-white has-text-centered">facilitan</h1>
        <br>
        <br>
        <div class="columns is-multiline is-mobile is-centered">
          <div class="column is-6-mobile is-4-tablet is-one-fifth-desktop has-text-centered" v-for="(s,i) in staff" :key="`staff-${i}`">
          <img :src="`/img/exponen/${s.picture}`" class="image speaker-avatar is-centered" :alt="s.name">

        <h1 class="title is-5 is-size-6-touch is-700 has-text-white">{{s.name}}</h1>
        <h1 class="subtitle is-6 is-size-7-touch has-text-white">{{s.org || '-'}}</h1>
        <span v-if="s.instagram" class="is-size-6 has-text-white" ><span v-for="j in s.instagram.split(',')" :key="`instagram${j}`">&nbsp;<a :href="`https://instagram.com/${j}`" target="_blank" class="has-text-white" ><i class="fab fa-instagram fa-lg fa-fw"></i></a>&nbsp;</span></span>
            <span v-if="s.twitter" class="is-size-6 has-text-white" ><span v-for="j in s.twitter.split(',')" :key="`twitter${j}`">&nbsp;<a :href="`https://twitter.com/${j}`" target="_blank" class="has-text-white" ><i class="fab fa-twitter fa-lg fa-fw"></i></a>&nbsp;</span></span>
            <span v-if="s.facebook" class="is-size-6 has-text-white" ><span v-for="j in s.facebook.split(',')" :key="`facebook${j}`">&nbsp;<a :href="`https://facebook.com/${j}`" target="_blank" class="has-text-white" ><i class="fab fa-facebook-f fa-lg fa-fw"></i></a>&nbsp;</span></span>
        <!-- <p class="has-text-centered is-size-7">{{s.bio}}</p> -->
          </div>
        </div>
        </section>
        <section v-else>
          <div class="logo-container">
            <LogoDesktop v-if="showDesktop" />
            <LogoTouch v-if="showTouch" />
            <br>
            <br>
            <LogoDesktopTopStream v-if="showDesktop" />
            <LogoTouchTopStream v-if="showTouch" />
          </div>
          <div class="has-text-centered" v-if="next">
          <br>
          <br>
            <h4 class="title is-2 is-700 has-text-white">Proximo stream</h4>
            <h3 class="subtitle is-2 is-300 has-text-white">{{next.title}} - {{next.when.getDate()}}/{{next.when.getMonth()+1}}/{{next.when.getFullYear()}} a las {{getTimeEvent(next.when)}} HS</h3>
          <br>
          <br>
          </div>
          <div class="columns is-centered is-variable is-1-mobile is-8-tablet">
            <div class="column has-text-white">
              <div class="content">
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
        </section>
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
import LogoDesktop from "@/assets/img/incubadora/incubadora-logo-wide.svg";
import LogoTouch from "@/assets/img/incubadora/incubadora-logo-mobile.svg";
import LogoDesktopTopStream from "@/assets/img/incubadora/pattern-top.svg";
import LogoTouchTopStream from "@/assets/img/incubadora/pattern-top-mobile.svg";
import LogoDesktopBottomStream from "@/assets/img/incubadora/pattern-bottom.svg";
import LogoTouchBottomStream from "@/assets/img/incubadora/pattern-bottom-mobile.svg";
import LazoOne from "@/assets/img/incubadora/lazo1.svg";
import LazoTwo from "@/assets/img/incubadora/lazo2.svg";
import Boton from "@/assets/img/incubadora/boton-conoce-mas-01.svg";
import exponen from "@/data/exponenIncubadora";


export default {
  props: ['event','next'],
  components: {
    LogoDesktop,
    LogoTouch,
    LogoDesktopTopStream,
    LogoTouchTopStream,
    LogoDesktopBottomStream,
    LogoTouchBottomStream,
    LazoOne,
    LazoTwo,
    Boton,
  },
  mixins: [VueScreenSize.VueScreenSizeMixin],
  methods: {
    getTimeEvent: function(eventStarts) {
      if (eventStarts.getMinutes() == "0") {
        return eventStarts.getHours();
      }
      return `${eventStarts.getHours()}.${eventStarts.getMinutes()}`;
    }
  },
  computed: {
    showTouch: function () {
      return this.$vssWidth > 0 && this.$vssWidth <= 1024;
    },
    showDesktop: function () {
      return this.$vssWidth > 1024;
    },
    staff: function(){
      return exponen.filter( x => {
        return x.type == 'staff'
      })
    }
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
.the-boton{
  max-width:200px;
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
.event-container{
  padding: 20px;
  background-color: #FFF;
}
.custom-size {
  font-size: 5.5rem !important;
  @media only screen and (max-width: 1024px) {
    font-size: 3rem !important;
  }
}

.small-speaker{
  border-radius: 400px;
}
.speaker-avatar{
  width: 200px;
  border-radius: 300px; 
  margin-bottom: 25px; 
  // @media only screen and (max-width: 600px) {
  // width: 100px;
  // }
}
.special-size{
  font-size: 0.9rem;
}
</style>