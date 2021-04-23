<template>
  <div>

  <div class="tile is-ancestor my-0">
  <div class="tile is-parent p-0">
    <article class="tile is-child p-0 special-bg">
    &nbsp;
    </article>
  </div>
  <div class="tile is-parent is-6 p-0">
    <article class="tile is-child section has-text-centered-touch">
      <div class="p-6 my-6">

     <h1 class="title is-1 is-700">Ciudades Comunes 2020:</h1>
     <h1 class="subtitle is-1">reflexiones para la acción colectiva</h1>
      <div class="content">
      <p>Accedé a la publicación elaborada por nuestro equipo que compila debates, desafíos, posibilidades, deseos y herramientas desarrolladas durante el encuentro digital. 
</p>
      </div>
        <a href="/pdf/informe_cc_2021.pdf" target="_blank" class="button is-primary animated pulse infinite is-medium"><i class="fas fa-download fa-fw"></i>&nbsp;&nbsp;DESCARGAR</a>
      </div>
    </article>
  </div>
</div>
<hr class="my-0">
  <div class="hero is-white is-medium">
    <div class="hero-body">
      <div class="container">
    <div class="columns is-multiline is-mobile">
      <div class="column is-6-touch is-4-desktop has-text-centered">
        <ConferenciasSVG class="the-icon"/>
        <h2 class="title is-4 is-size-6-mobile">Conferencias</h2>
      </div>
      <div class="column is-6-touch is-4-desktop has-text-centered">
        <PanelesSVG class="the-icon"/>
        <h2 class="title is-4 is-size-6-mobile">Paneles</h2>
      </div>
      <div class="column is-6-touch is-4-desktop has-text-centered">
        <TalleresSVG class="the-icon"/>
        <h2 class="title is-4 is-size-6-mobile">Talleres</h2>
      </div>
      <div class="column is-6-touch is-4-desktop has-text-centered">
        <CharlasRelampagoSVG class="the-icon"/>
        <h2 class="title is-4 is-size-6-mobile">Charlas<br>Relámpagos</h2>
      </div>
      <div class="column is-6-touch is-4-desktop has-text-centered"> 
        <EspacioComunDigitalSVG class="the-icon"/>
        <h2 class="title is-4 is-size-6-mobile">Espacio<br>común digital</h2>
      </div>
      <div class="column is-6-touch is-4-desktop has-text-centered">
        <DentroFueraIntervencionesSVG class="the-icon"/>
        <h2 class="title is-4 is-size-6-mobile">DentroFuera<br>Intervenciones</h2>
      </div>
      </div>
    </div>
    </div>
  </div>
  </div>
</template>

<script>
import ConferenciasSVG from '@/assets/img/contents/conferencias.svg'
import PanelesSVG from '@/assets/img/contents/paneles.svg'
import TalleresSVG from '@/assets/img/contents/talleres2.svg'
import CharlasRelampagoSVG from '@/assets/img/contents/charlas-relampago.svg'
import EspacioComunDigitalSVG from '@/assets/img/contents/espacio-comun-digital.svg'
import DentroFueraIntervencionesSVG from '@/assets/img/contents/dentro-fuera-intervenciones.svg'

export default {
  components: {
    ConferenciasSVG,
    PanelesSVG,
    TalleresSVG,
    CharlasRelampagoSVG,
    EspacioComunDigitalSVG,
    DentroFueraIntervencionesSVG
  }
}
</script>

<style lang="scss" scoped>
.the-icon{
  height: 100px;
  margin-bottom: 30px;
}
.special-bg{
  background-image: url('/img/informe/informe-cc3.jpg');
  background-size: cover;
  background-position: center center;
}
.special-bg2{
  background-image: url('/img/informe/informe-cc5.jpg');
  background-size: cover;
  background-position: center center;
}
</style>