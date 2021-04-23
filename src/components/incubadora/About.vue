<template>
  <section class="hero is-black is-medium">
    <div class="hero-body" style="padding-top: 0">
      <div class="container">
            <h1 class="title is-2">¿qué es?</h1>
            <br>
        <div class="columns is-vcentered">
          <div class="column">
            <div class="content">
              <p>Una incubadora es un ámbito diseñado para acelerar el crecimiento y asegurar el éxito de ideas y proyectos. Está pensada para generar sinergia entre investigadores, profesionales, activistas y funcionarios de la administración pública.</p>
              <p>El éxito de un proyecto de intervención en el espacio público depende de su capacidad de articulación con la mayor cantidad y diversidad de personas posibles. Por este motivo, la incubadora propone espacios de intercambio y participación activa por parte de toda la comunidad. </p>
            </div>
          </div>
          <div class="column is-6 has-text-centered">
            <LazoOne class="lazo"/>
            <!-- <h1 class="title is-1 is-size-2-touch">volver a la calle</h1>
            <div class="content">
              <p>El día 10 de agosto se anunciarán los 3 tres proyectos seleccionados en el Ideatón organizado por La División de Vivienda y Desarrollo Urbano del BID, desde su LAB Ciudades, en alianza con Ciudades Comunes, sede Placemaking Latinoamérica 2020.</p>
              <p>Las tres propuestas ganadoras serán parte de un proceso de incubación colaborativo liderado por nuestro equipo, en el que adaptaremos las ideas para convertirlas en un prototipo que pueda ser implementado en ciudades de Latinoamérica y el Caribe.</p>
              <a href="https://www.iadb.org/es/desarrollo-urbano-y-vivienda/ideaton-volver-la-calle-soluciones-poscovid19-nuevo-comun-urbano" target="_blank">
                <ConoceMas class="conoce-mas"/>
              </a>
            </div> -->
          </div>
        </div>  
      </div>
    </div>
  </section>
</template>

<script>
import LazoOne from "@/assets/img/incubadora/pattern-bottom-mobile-alt.svg";

export default {
  components: {
      LazoOne,
  }
}
</script>

<style lang="scss" scoped>
.hero.is-black{
  background-color: #6e559e;
}
.lazo{
  max-width: 300px;
  margin: 0 auto;
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