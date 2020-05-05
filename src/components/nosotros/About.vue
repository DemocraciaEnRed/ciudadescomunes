<template>
  <section class="hero is-white is-medium">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-1 is-size-2 is-700">quienes somos</h1>
        <div class="columns is-variable is-1-mobile is-8-tablet">
          <div class="column">
              <a href="https://civicwise.org/" target="_blank">
            <div class="the-logo-container">
              <img src="@/assets/img/nosotros/civicwise.png" class="logo" alt />
            </div>
              </a>
            <div class="content">
              <p><a href="https://civicwise.org/" class="has-text-info is-600" target="_blank">CivicWise</a></p>
              <p>CivicWise es una red internacional de personas animadas y determinadas en su voluntad de mejorar las ciudades en las que viven. Se estructura entorno a grupos locales que se organizan de forma autónoma e independiente, y generan comunidades abiertas en las que todos pueden participar e intercambiar experiencias y conocimiento, creando nuevas sinergias y aportando energía para desarrollar acciones ciudadanas para mejorar el barrio y la ciudad.</p>
            </div>
          </div>
          <div class="column">
              <a href="http://urbanismovivo.com.ar" target="_blank">
            <div class="the-logo-container">
              <img src="@/assets/img/nosotros/urbanismovivo.png" class="logo" alt />
            </div>
              </a>
            <div class="content">
              <p><a href="http://urbanismovivo.com.ar" class="has-text-info is-600" target="_blank">Urbanismo vivo</a></p>
              <p>Urbanismo Vivo es un equipo que busca, a través de sus proyectos la conexión entre la ciudadanía y el lugar donde habita, promoviendo una ciudad más amable, activa y humanizada. Trabaja en el territorio con tres ejes principales. La innovación: una forma de diseñar los procesos desde una mirada creativa, con el objetivo de crear ciudades habitables. La diversidad: la integración de miradas desde el territorio. El intercambio: el trabajo colaborativo y en red, tanto a nivel local como internacional, como motor de grandes procesos de transformación.</p>
            </div>
          </div>
          <div class="column">
              <a href="https://www.instagram.com/articulo41" target="_blank">
            <div class="the-logo-container">
              <img src="@/assets/img/nosotros/articulo41.png" class="logo" alt />
            </div>
              </a>
            <div class="content">
              <p><a href="https://www.instagram.com/articulo41" class="has-text-info is-600" target="_blank">Artículo 41</a></p>
              <p>Artículo 41 es una Asociación Civil sin fines de lucro inspirada en el Artículo 41 de la Constitución Nacional Argentina, que define nuestro derecho a un ambiente sano y nuestro deber de preservarlo.<br>Sus fundadoras creen en este derecho y este deber, no solo para las generaciones presentes y futuras, sino para todas las especies que habitan el planeta. Promueve la transición hacia un futuro sostenible y regenerativo a través de la cultura, la comunicación y la participación ciudadana.</p>
            </div>
          </div>
        </div>
        <div class="columns is-variable is-1-mobile is-8-tablet">
          <div class="column">
              <a href="https://acij.org.ar" target="_blank">
            <div class="the-logo-container">
              <img src="@/assets/img/nosotros/acij.png" class="logo-two" alt />
            </div>
              </a>
            <div class="content">
              <p><a href="https://acij.org.ar" class="has-text-info is-600" target="_blank">Asociación Civil por la Igualdad y la Justicia (ACIJ)</a></p>
              <p>ACIJ es una organización apartidaria, sin fines de lucro, dedicada a la defensa de los derechos de los grupos más desfavorecidos de la sociedad y el fortalecimiento de la democracia en Argentina. El área de Derecho a la Ciudad, particularmente, tiene como objetivo impulsar el derecho colectivo de los habitantes, en especial de los grupos más vulnerables, a un acceso equitativo a las ciudades dentro de los principios de sustentabilidad y justicia social, fortaleciendo las acciones y organizaciones territoriales que tengan como objetivo alcanzar el pleno ejercicio del derecho a un patrón de vida urbana adecuado.</p>
            </div>
          </div>
          <div class="column">
              <a href="https://www.instagram.com/colectiva_habitaria" target="_blank">
            <div class="the-logo-container">
              <img src="@/assets/img/nosotros/habitaria.png" class="logo-two" alt />
            </div>
              </a>
            <div class="content">
              <p><a href="https://www.instagram.com/colectiva_habitaria" class="has-text-info is-600" target="_blank">Colectiva Habitaria</a></p>
              <p>Habitaria es una plataforma colectiva que indaga sobre la deconstrucción del espacio en el que habitamos, desde una perspectiva ecofeminista.Nuestro objetivo es revisar, resignificar y politizar el espacio doméstico.Investigamos sobre nuevas formas de cohabitar y proponemos de manera experimental alternativas habitacionales centradas en lo común.<br>Trabajamos como arquitectes, urbanistas, docentes e investigadores, participando y compartiendo ámbitos académicos y fuera de ellos.</p>
            </div>
          </div>
          <div class="column">
              <a href="https://democraciaenred.org" target="_blank">
            <div class="the-logo-container">
              <img src="@/assets/img/nosotros/der.png" class="logo-two" alt />
            </div>
              </a>
            <div class="content">
              <p><a href="https://democraciaenred.org" class="has-text-info is-600" target="_blank">Democracia en Red</a></p>
              <p>Democracia en Red diseña e implementa innovaciones que transparentan, facilitan y fortalecen la participación de la ciudadanía en la toma de decisiones. En ese camino, crearon la tecnología DemocracyOS: un espacio online versátil diseñado para que el derecho a participar sea puesto en práctica masivamente, en distintas escalas de gobierno.<br>Democracia en Red desarrolla tecnología al servicio de la ciudadanía para acercar las políticas públicas a la factibilidad y hacer posible la cooperación entre distintos segmentos sociales, estimulando el pensamiento colectivo.</p>
            </div>
          </div>
        </div>
        <br>
        <h1 class="title is-1 is-size-2 is-700">equipo</h1>
        <br>
        <br>
        <div class="columns is-multiline is-mobile is-centered">
          <div class="column is-6-mobile is-4-tablet is-3-desktop has-text-centered" v-for="(s,i) in staff" :key="`staff-${i}`">
<img :src="`/img/exponen/${s.picture}`" class="image speaker-avatar is-centered" :alt="s.name">

        <h1 class="title is-5 is-size-6-touch is-700">{{s.name}}</h1>
        <h1 class="subtitle is-6 is-size-7-touch">{{s.org || '-'}}</h1>
        <span v-if="s.instagram" class="is-size-6" ><span v-for="j in s.instagram.split(',')" :key="`instagram${j}`">&nbsp;<a :href="`https://instagram.com/${j}`" target="_blank" class="has-text-dark" ><i class="fab fa-instagram fa-lg fa-fw"></i></a>&nbsp;</span></span>
            <span v-if="s.twitter" class="is-size-6" ><span v-for="j in s.twitter.split(',')" :key="`twitter${j}`">&nbsp;<a :href="`https://twitter.com/${j}`" target="_blank" class="has-text-dark" ><i class="fab fa-twitter fa-lg fa-fw"></i></a>&nbsp;</span></span>
            <span v-if="s.facebook" class="is-size-6" ><span v-for="j in s.facebook.split(',')" :key="`facebook${j}`">&nbsp;<a :href="`https://facebook.com/${j}`" target="_blank" class="has-text-dark" ><i class="fab fa-facebook-f fa-lg fa-fw"></i></a>&nbsp;</span></span>
        <!-- <p class="has-text-centered is-size-7">{{s.bio}}</p> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import exponen from "@/data/exponenArray";

export default {
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
.the-logo-container {
  height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  margin-bottom: 10px;
}
.logo {
  height: 40%;
  max-width: 100%;
}
.logo-two {
  height: 60%;
  max-width: 100%;
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