<template>
  <section class="hero is-white is-medium">
    <div class="hero-body">
      <h1 class="subtitle is-4 is-size-5-touch has-text-centered has-text-black">conocenos</h1>
      <h1 class="title is-1 is-size-2-touch has-text-centered is-700">quienes somos</h1>
      <br />
      <div class="columns is-centered">
        <div class="column is-2">
          <a href="http://urbanismovivo.com.ar/" target="_blank">
            <div class="the-logo-container">
              <img src="@/assets/img/supports/urbanismovivo.png" class="logo" />
            </div>
          </a>
        </div>
        <div class="column is-2">
          <a href="https://www.instagram.com/articulo41" target="_blank">
            <div class="the-logo-container">
              <img src="@/assets/img/supports/articulo41.png" class="logo" />
            </div>
          </a>
        </div>
        <div class="column is-2">
          <a href="https://civicwise.org/" target="_blank">
            <div class="the-logo-container">
              <img src="@/assets/img/supports/civicwise.png" class="logo" />
            </div>
          </a>
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column is-2">
          <a href="https://democraciaenred.org" target="_blank">
            <div class="the-logo-container">
              <img src="@/assets/img/supports/der.png" class="logo-two" />
            </div>
          </a>
        </div>
        <div class="column is-2">
          <a href="https://acij.org.ar" target="_blank">
            <div class="the-logo-container">
              <img src="@/assets/img/supports/acij.png" class="logo-two" />
            </div>
          </a>
        </div>
        <div class="column is-2">
          <a href="https://www.instagram.com/colectiva_habitaria" target="_blank">
            <div class="the-logo-container">
              <img src="@/assets/img/supports/habitaria.png" class="logo-two" />
            </div>
          </a>
        </div>
      </div>
      <br>
      <br>
      <div class="has-text-centered">
        <router-link :to="{name:'QuienesSomos'}" class="button is-primary is-uppercase is-radiusless is-medium">
        <!-- <VerMas class="ver-mas animated pulse infinite slow" /> -->
          Mas información
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
// import VerMas from "@/assets/img/incubadora/ver-mas.svg";

export default {
  components: {
    // VerMas
  }
};
</script>


<style lang="scss" scoped>
.the-logo-container {
  height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}
.logo {
  height: 40%;
  max-width: 100%;
}
.logo-two {
  height: 60%;
  max-width: 100%;
}
.logo-three {
  height: 90%;
  max-width: 100%;
}
.ver-mas {
  max-width: 160px;
}
</style>