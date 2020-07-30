<template>
  <section class="intro-header">
    <Banner /> 
  </section>
</template>

<script>
import Banner from '@/assets/img/incubadora/incubadora-banner.svg'

export default {
  components:{
    Banner,
  },
}
</script>

<style lang="scss" scoped>
.intro-header{
  width:100%;
  margin-bottom: -1px;
}
section{
  line-height: 0;
}
</style>