<template>
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
</style>