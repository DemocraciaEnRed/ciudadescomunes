<template>
  <div class="hero is-custom is-medium">
    <div class="hero-body">
      <div class="container">
        <br />
        <div class="columns is-centered is-variable">
          <div class="column is-8">
            <LogoWide class="is-hidden-touch"/>
            <LogoMobile class="is-hidden-desktop"/>
            <br>
            <br>
            <img src="@/assets/img/incubadora/home.gif" class="image" width="100%" alt="">
            <br>
            <div class="content has-text-centered has-text-white">
              <p>Desde el Laboratorio de Ciudades del BID, junto con Ciudades Comunes y Placemaking Latinoamérica, lanzamos la convocatoria Ideatón Volver a la Calle, buscando ideas de la sociedad civil para reactivar los espacios públicos con distanciamiento físico y recuperar la confianza en la vida urbana. </p>
              <p>Compartimos las 100 ideas mejor puntuadas por la votación del jurado para Volver a la Calle, de toda América Latina y el Caribe. Este catálogo permite identificar las ideas según país, temática, tipo de intervención y contactar directamente a sus autores. Te invitamos a explorar el enorme potencial de estas propuestas para la creación colaborativa de espacios urbanos más inclusivos, resilientes y a escala humana.</p>
            </div>
            <div class="buttons is-centered" style="margin: 30px 0;">
              <a href="https://volveralacalle.com/ideas" target="_blank" class="button is-white is-radiusless has-text-link is-600">100 ideas para volver a la calle</a>
              <a href="https://volveralacalle.com/ideaton" target="_blank" class="button is-white is-radiusless has-text-link is-600">Acerca de la convocatoria</a>
            </div>
            <div class="logos-bottom">
              <Logos/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logos from '@/assets/img/incubadora/bottom-logos.svg'
import LogoWide from '@/assets/img/incubadora/100ideaspara-wide.svg'
import LogoMobile from '@/assets/img/incubadora/100ideaspara-mobile.svg'

export default {
  components: {
    Logos,
    LogoWide,
    LogoMobile
  }
};
</script>

<style lang="scss" scoped>
.hero.is-custom {
  background-color: #0c7cd6;
}
.logos-bottom{
  max-width: 400px;
  margin: 0 auto;
}
</style>