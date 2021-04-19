<template>
  <div class="congreso2020">
    <Header />
    <Contents />
    <div class="hero is-verde is-medium is-bold">
        <div class="hero-body">
        <div class="container has-text-black">
            <h1 class="title is-1 is-size-2-touch has-text-centered is-700 has-text-black">
                contexto COVID-19
            </h1>
            <br>
            <div class="columns is-variable is-1-mobile is-8-tablet">
            <div class="column">
                <div class="content">
                <p>Un presente de aislamiento físico nos convoca aún más a estar unidos socialmente. Dentro del límite del confinamiento personal, el espacio digital se presenta como un lugar de encuentro ilimitado.</p>
                <p>El apremiante contexto de una crisis sanitaria global nos conecta con el costado más frágil de nuestra humanidad que vivimos desde nuestras casas, mientras los grandes conglomerados urbanos se vuelven territorios hostiles para compartir, crear, experimentar y habitar.</p>
                </div>
            </div>
            <div class="column">
                <div class="content">
                    <p><i>¿Cómo construimos lo común estando individualizados?</i></p>
                <p><b>Ciudades Comunes</b> es una oportunidad para cuestionar lo que hemos naturalizado sobre nuestra vida en las ciudades. El encuentro propone un espacio para renovar la mirada, revisar nuestros sistemas de cuidados y proyectar remotamente el futuro de nuestras ciudades comunes.</p>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    <Exponen />
    <Videos />
    <DayOne :day="calendar[0]"/>
    <DayOne class="pt-0" :day="calendar[1]"/>
    <DentroFueraContent />
    <Support />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/congreso/2020/Header.vue'
import DentroFueraContent from '@/components/congreso/2020/DentroFueraContent.vue'
import Support from '@/components/congreso/2020/Support.vue'
import Contents from '@/components/congreso/2020/Contents.vue'
import Exponen from '@/components/congreso/2020/Exponen.vue'
import Videos from '@/components/congreso/2020/Videos.vue'
import DayOne from '@/components/congreso/2020/DayOne.vue'
// import DayTwo from '@/components/congreso/2020/DayTwo.vue'
import calendar from "@/data/calendar";


export default {
  name: 'Congreso2020',
  data() {
    return {
      calendar: calendar
    };
  },
  components: {
    Header,
    DentroFueraContent,
    Support,
    Contents,
    Exponen,
    Videos,
    DayOne,
    // DayTwo
  }
}
</script>
