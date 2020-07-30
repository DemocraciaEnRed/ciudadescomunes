<template>
  <section class="hero is-black is-medium">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered is-variable is-1-mobile is-8-tablet">
          <div class="column">
            <h1 class="title is-1">incubadora</h1>
            <p class="is-size-4 is-500">Una experiencia transdisciplinar para la activación de proyectos de Innovación Cívica desde la práctica del co-diseño y en un contexto de co-aprendizaje.</p>
          </div>
          <div class="column">
            <br class="is-hidden-desktop">
            <h1 class="title is-1 is-size-2-touch">20/08 - 16hs (Bs. As.)</h1>
            <p class="is-size-4 is-500">¡Mirá la próxima sesión de la incubadora en vivo por streaming en nuestro sitio!</p>
            <br>
            <LazoOne class="lazo"/>
          </div>
        </div>
        <br>
        <br>
        <div class="columns is-centered is-variable is-1-mobile is-8-tablet">
          <div class="column">
            <h1 class="title is-1">¿qué es?</h1>
            <div class="content">
              <p>El proceso de incubación consta de un calendario de sesiones de trabajo que tiene una duración de 2 meses. Cada semana tendremos dos sesiones, una teórica con streaming en directo con la participación de una persona experta invitada y otra sesión de trabajo durante las cuales nuestros facilitadores expertos estarán apoyando el desarrollo de los tres proyectos seleccionados.</p>
              <p>Además, durante el proceso tendremos dos sesiones “maratones” las cuales tendrán una duración de 4 horas cada una y también serán transmitidas en directo. Estos maratones de trabajo servirán para acelerar el desarrollo de los proyectos fortaleciendo el intercambio entre proyectos y personas y marcando un cambio de fase en el progreso de cada una de las iniciativas</p>
            </div>
          </div>
          <div class="column">
            <h1 class="title is-1 is-size-2-touch">volver a la calle</h1>
            <div class="content">
              <p>El día 10 de agosto se anunciarán los 3 tres proyectos seleccionados en el Ideatón organizado por La División de Vivienda y Desarrollo Urbano del BID, desde su LAB Ciudades, en alianza con Ciudades Comunes, sede Placemaking Latinoamérica 2020.</p>
              <p>Las tres propuestas ganadoras serán parte de un proceso de incubación colaborativo liderado por nuestro equipo, en el que adaptaremos las ideas para convertirlas en un prototipo que pueda ser implementado en ciudades de Latinoamérica y el Caribe.</p>
              <ConoceMas class="conoce-mas"/>
            </div>
          </div>
        </div>
        <br>
        <br>
       <h1 class="title is-1 is-size-2 is-700">facilitan</h1>
        <br>
        <br>
        <div class="columns is-multiline is-mobile is-centered">
          <div class="column is-6-mobile is-4-tablet is-one-fifth-desktop has-text-centered" v-for="(s,i) in staff" :key="`staff-${i}`">
<img :src="`/img/exponen/${s.picture}`" class="image speaker-avatar is-centered" :alt="s.name">

        <h1 class="title is-5 is-size-6-touch is-700">{{s.name}}</h1>
        <h1 class="subtitle is-6 is-size-7-touch">{{s.org || '-'}}</h1>
        <span v-if="s.instagram" class="is-size-6" ><span v-for="j in s.instagram.split(',')" :key="`instagram${j}`">&nbsp;<a :href="`https://instagram.com/${j}`" target="_blank" class="has-text-white" ><i class="fab fa-instagram fa-lg fa-fw"></i></a>&nbsp;</span></span>
            <span v-if="s.twitter" class="is-size-6" ><span v-for="j in s.twitter.split(',')" :key="`twitter${j}`">&nbsp;<a :href="`https://twitter.com/${j}`" target="_blank" class="has-text-white" ><i class="fab fa-twitter fa-lg fa-fw"></i></a>&nbsp;</span></span>
            <span v-if="s.facebook" class="is-size-6" ><span v-for="j in s.facebook.split(',')" :key="`facebook${j}`">&nbsp;<a :href="`https://facebook.com/${j}`" target="_blank" class="has-text-white" ><i class="fab fa-facebook-f fa-lg fa-fw"></i></a>&nbsp;</span></span>
        <!-- <p class="has-text-centered is-size-7">{{s.bio}}</p> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LazoOne from "@/assets/img/incubadora/lazo1.svg";
import ConoceMas from "@/assets/img/incubadora/boton-conoce-mas-01.svg";
import exponen from "@/data/exponenIncubadora";

export default {
  components: {
      LazoOne,
      ConoceMas
  },
  computed: {
     staff: function(){
      return exponen.filter( x => {
        return x.type == 'staff'
      })
    }
  }

}
</script>

<style lang="scss" scoped>
.hero.is-black{
  background-color: #006ed7;
}
.lazo{
  max-width: 500px
}
.logo{
  margin-top: 20px;
  width:130px;
}
.conoce-mas{
  max-width: 180px;
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