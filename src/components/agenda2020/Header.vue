<template>
  <section>
    <DesktopHeader v-if="showDesktop" /> 
    <WidescreenHeader v-if="showWidescreen" /> 
  </section>
</template>

<script>
import VueScreenSize from 'vue-screen-size'
import DesktopHeader from '@/assets/img/nosotros/desktop.svg'
import WidescreenHeader from '@/assets/img/nosotros/widescreen.svg'

export default {
  components:{
    DesktopHeader,
    WidescreenHeader
  },
  mixins: [VueScreenSize.VueScreenSizeMixin],
  computed: {
    showDesktop: function(){
      return this.$vssWidth > 0 && this.$vssWidth <= 1440
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
  margin-bottom: 0;
}
section{
  line-height: 0;
}
</style>