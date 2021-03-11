<template>
  <div class="hero is-primary is-medium">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-1 is-size-2-touch has-text-centered is-300">nuestros <span class="is-700">ejes de trabajo</span></h1>
        <br>
        <br>
        <div class="columns is-multiline is-mobile">
          <div class="column is-6-touch is-4-desktop has-text-centered">
            <CiudadInclusivaSVG class="the-icon" />
            <h2 class="subtitle is-5 is-size-6-mobile has-text-black">Ciudad inclusiva</h2>
          </div>
          <div class="column is-6-touch is-4-desktop has-text-centered">
            <GobiernoAbiertoSVG class="the-icon" />
            <h2 class="subtitle is-5 is-size-6-mobile has-text-black">Gobierno abierto</h2>
          </div>
          <div class="column is-6-touch is-4-desktop has-text-centered">
            <DesarrolloRegenerativoSVG class="the-icon" />
            <h2 class="subtitle is-5 is-size-6-mobile has-text-black">Desarrollo Regenerativo</h2>
          </div>
          <div class="column is-6-touch is-4-desktop has-text-centered">
            <LaboratoriosCivicosSVG class="the-icon" />
            <h2 class="subtitle is-5 is-size-6-mobile has-text-black">Laboratorios cívicos</h2>
          </div>
          <div class="column is-6-touch is-4-desktop has-text-centered">
            <HabitadJusticiaSocialSVG class="the-icon" />
            <h2 class="subtitle is-5 is-size-6-mobile has-text-black">Hábitat y justicia social</h2>
          </div>
          <div class="column is-6-touch is-4-desktop has-text-centered">
            <img src="@/assets/img/about/posdomesticidades.png" class="the-icon" alt="">
            <h2 class="subtitle is-5 is-size-6-mobile has-text-black">Posdomesticidades</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CiudadInclusivaSVG from "@/assets/img/about/ciudad-inclusiva.svg";
import GobiernoAbiertoSVG from "@/assets/img/about/gobierno-abierto.svg";
import DesarrolloRegenerativoSVG from "@/assets/img/about/desarrollo-regenerativo.svg";
import LaboratoriosCivicosSVG from "@/assets/img/about/laboratorios-civicos.svg";
import HabitadJusticiaSocialSVG from "@/assets/img/about/habitad-justicia-social.svg";
// import PosdomesticidadesSVG from "@/assets/img/about/posdomesticidades.svg";

export default {
  components: {
    CiudadInclusivaSVG,
    GobiernoAbiertoSVG,
    DesarrolloRegenerativoSVG,
    LaboratoriosCivicosSVG,
    HabitadJusticiaSocialSVG,
    // PosdomesticidadesSVG
  }
};
</script>

<style lang="scss" scoped>
.the-icon {
  height: 70px;
  margin-bottom: 10px;
  margin-top: 10px;
}
</style>