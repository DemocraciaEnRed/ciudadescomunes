<template>
  <section>
    <!-- <img src="@/assets/img/intro/mobile.svg" class="image intro-header" v-if="showMobile" alt="">
    <img src="@/assets/img/intro/wide-mobile.svg" class="image intro-header" v-if="showExtraMobile" alt="">
    <img src="@/assets/img/intro/touch.svg" class="image intro-header" v-if="showTouch" alt="">
    <img src="@/assets/img/intro/desktop.svg" class="image intro-header" v-if="showDesktop" alt="">
    <img src="@/assets/img/intro/widescreen.svg" class="image intro-header" v-if="showWidescreen" alt=""> -->
    <MobileHeader v-if="showMobile" /> 
    <WideMobileHeader v-if="showExtraMobile" /> 
    <TouchHeader v-if="showTouch" /> 
    <DesktopHeader v-if="showDesktop" /> 
    <WidescreenHeader v-if="showWidescreen" /> 
  </section>
</template>

<script>
import VueScreenSize from 'vue-screen-size'
import MobileHeader from '@/assets/img/intro/mobile.svg'
import WideMobileHeader from '@/assets/img/intro/wide-mobile.svg'
import TouchHeader from '@/assets/img/intro/touch.svg'
import DesktopHeader from '@/assets/img/intro/desktop.svg'
import WidescreenHeader from '@/assets/img/intro/widescreen.svg'

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
      return this.$vssWidth > 1024 && this.$vssWidth <= 1216
    },
    showWidescreen: function(){
      return this.$vssWidth > 1216
    },
  },
}
</script>

<style lang="scss" scoped>
.intro-header{
  width:100%;
}
</style>