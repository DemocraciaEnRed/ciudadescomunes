<template>
  <div class="congreso2020">
    <Header />
    <Videos />
    <Contents />
    <!-- <Context /> -->
    <img src="@/assets/img/congreso2020/bannertwo.png" class="image"/>
    <DentroFueraContent />
    <Support />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/congreso2020/Header.vue'
import Videos from '@/components/congreso2020/Videos.vue'
import Contents from '@/components/congreso2020/Contents.vue'
// import Context from '@/components/congreso2020/Context.vue'
import DentroFueraContent from '@/components/congreso2020/DentroFueraContent.vue'
import Support from '@/components/congreso2020/Support.vue'

export default {
  name: 'Congreso2020',
  components: {
    Header,
    Videos,
    Contents,
    // Context,
    DentroFueraContent,
    Support
  }
}
</script>
