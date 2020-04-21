<template>
  <div class="hero is-primary is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">

      <p class="has-text-centered"><i class="fas fa-spin fa-2x fa-sync"></i></p>
      <br>
      <h1 class="title is-1 has-text-centered animated flash slower infinite">
        Redirigiendote...
      </h1>
      <p class="has-text-centered">
      Si no carga, haga <a :href="theLink" class="has-text-black"><u>clic aquí</u></a>
      </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      theLink: 'https://forms.gle/VRzg26ra1Pa2osN47'
    }
  },
  mounted: function(){
    setTimeout( () => {
    window.location.href = this.theLink
    }, 2000)
  }
}
</script>

<style>

</style>