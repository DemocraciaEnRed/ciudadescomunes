<template>
  <section>
    <img src="@/assets/img/topics-mosaic/mobile.svg.png" class="image intro-header" v-if="showMobile" alt="">
    <img src="@/assets/img/topics-mosaic/wide-mobile.svg.png" class="image intro-header" v-if="showExtraMobile" alt="">
    <img src="@/assets/img/topics-mosaic/desktop.svg.png" class="image intro-header" v-if="showDesktop" alt="">
    <!-- <MobileMosaic v-if="showMobile" /> 
    <WideMobileMosaic v-if="showExtraMobile" /> 
    <DesktopMosaic v-if="showDesktop" />  -->
  </section>
</template>

<script>
import VueScreenSize from 'vue-screen-size'
// import MobileMosaic from '@/assets/img/topics-mosaic/mobile.svg'
// import WideMobileMosaic from '@/assets/img/topics-mosaic/wide-mobile.svg'
// import DesktopMosaic from '@/assets/img/topics-mosaic/desktop.svg'

export default {
  components:{
//     MobileMosaic,
// WideMobileMosaic,
// DesktopMosaic
  },
  mixins: [VueScreenSize.VueScreenSizeMixin],
  computed: {
    showMobile: function(){
      return this.$vssWidth > 0 && this.$vssWidth <= 480
    },
    showExtraMobile: function(){
      return this.$vssWidth > 480 && this.$vssWidth <= 768
    },
    showDesktop: function(){
      return this.$vssWidth > 768
    },
  },
}
</script>

<style lang="scss" scoped>
.intro-header{
  width:100%;
  margin-bottom: 0;
  height: auto;
}
section{
  line-height: 0;
}
</style>