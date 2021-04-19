<template>
  <div class="hero is-white is-medium">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered is-vcentered">
						<div class="column is-4">
							(Portada)
						</div>
						<div class="column is-6 has-text-centered">
								<h1 class="title is-1">Descargá nuestra publicación</h1>
								<div class="content">

								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, dignissimos? Quibusdam, laborum eos. Assumenda tempore rem quas maxime magnam dolores, rerum minima sit. Iste odit quo nobis velit sint quod.</p>
								</div>
								<div class="buttons is-centered">
									<a href="#" class="button is-primary animated pulse infinite is-medium"><i class="fas fa-download fa-fw"></i>&nbsp;&nbsp;DESCARGAR</a>
								</div>
						</div>
					</div>
          <br>
          <br>
          <br>
          <br>
          <br>
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