<template>
  <div class="hero is-custom is-medium">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-1 is-size-2-touch has-text-centered is-700">congreso 2020</h1>
        <br />
        <div class="columns is-variable is-1-mobile is-8-tablet">
          <div class="column is-6">
            <h2
              class="title is-5 has-text-black"
              style="margin-bottom:15px;"
            >Día 1 - 24 de abril 2020</h2>
            <div class="videoWrapper">
              <iframe
                width="853"
                height="480"
                :src="`https://www.youtube.com/embed/videoseries?list=PLn0MNwA9csxDqr4_HQjf0iwJk5_57JJ7Z`"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div class="column is-6">
            <h2
              class="title is-5 has-text-black"
              style="margin-bottom:15px;"
            >Día 2 - 24 de abril 2020</h2>
            <div class="videoWrapper">
              <iframe
                width="853"
                height="480"
                :src="`https://www.youtube.com/embed//videoseries?list=PLn0MNwA9csxA10EVfhdsNKW1K4XAe-5E2`"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <br>
        <br>
        <div class="has-text-centered">
         <router-link :to="{name:'Congreso2020'}">
        <VerMas class="ver-mas animated pulse infinite slow" />
        </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VerMas from "@/assets/img/incubadora/ver-mas.svg";

export default {
  components: {
    VerMas
  }
};
</script>

<style lang="scss" scoped>
.hero.is-custom {
  background-color: #f8adcc;
}
.videoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}
.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.ver-mas {
  max-width: 160px;
}
</style>
