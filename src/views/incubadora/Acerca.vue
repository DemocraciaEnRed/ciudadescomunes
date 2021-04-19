<template>
  <div class="incubadora">
    <Header />
    <About />
    <Etapas />
    <Anio2020 />
    <Contratos />
    <Register />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/incubadora/Header.vue'
import About from '@/components/incubadora/About.vue'
import Etapas from '@/components/incubadora/Etapas.vue'
import Anio2020 from '@/components/incubadora/Anio2020.vue'
import Contratos from '@/components/incubadora/Contratos.vue'
import Register from '@/components/incubadora/Register.vue'


export default {
  name: 'Congreso2020',
  components: {
    Header,
    About,
    Etapas,
    Anio2020,
    Contratos,
    Register,
  }
}
</script>
