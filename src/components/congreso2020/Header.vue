<template>
  <section class="intro-header">
    <MobileHeader v-if="showMobile" /> 
    <WideMobileHeader v-if="showExtraMobile" /> 
    <TouchHeader v-if="showTouch" /> 
    <DesktopHeader v-if="showDesktop" /> 
    <WidescreenHeader v-if="showWidescreen" /> 
  </section>
</template>

<script>
import VueScreenSize from 'vue-screen-size'
import MobileHeader from '@/assets/img/congreso2020/header-mobile.svg'
import WideMobileHeader from '@/assets/img/congreso2020/header-wide-mobile.svg'
import TouchHeader from '@/assets/img/congreso2020/header-touch.svg'
import DesktopHeader from '@/assets/img/congreso2020/header-desktop.svg'
import WidescreenHeader from '@/assets/img/congreso2020/header-wide.svg'

export default {
  components:{
    MobileHeader,
    WideMobileHeader,
    TouchHeader,
    DesktopHeader,
    WidescreenHeader
  },
  mixins: [VueScreenSize.VueScreenSizeMixin],
  computed: {
    showMobile: function(){
      return this.$vssWidth > 0 && this.$vssWidth <= 480
    },
    showExtraMobile: function(){
      return this.$vssWidth > 480 && this.$vssWidth <= 768
    },
    showTouch: function(){
      return this.$vssWidth > 768 && this.$vssWidth <= 1024
    },
    showDesktop: function(){
      return this.$vssWidth > 1024 && this.$vssWidth <= 1440
    },
    showWidescreen: function(){
      return this.$vssWidth > 1440
    },
  },
}
</script>

<style lang="scss" scoped>
.intro-header{
  width:100%;
  // margin-bottom: -1px;
}
section{
  line-height: 0;
}
</style>