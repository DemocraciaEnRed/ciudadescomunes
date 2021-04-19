<template>
<div>
<div class="hero is-rosa">
    <div class="hero-body">
        <div class="container">
            <h1 class="title is-1 is-size-2-touch is-700 has-text-centered mb-6">streams completos</h1>

  <div class="columns is-centered mb-0">
    <div class="column">
        <div class="p-3 has-background-primary">

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
      <div class="p-5">
          <h2
            class="subtitle is-4 has-text-black is-300"
        >PLAYLIST</h2>
        <h2
            class="title is-4 has-text-black is-700"
        >Día 1 - 24 de abril 2020</h2>
      </div>
      </div>
    </div>
    <div class="column">
        <div class="p-3 has-background-primary">

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
      <div class="p-5">
        <h2
            class="subtitle is-4 has-text-black is-300"
        >PLAYLIST</h2>
        <h2
            class="title is-4 has-text-black is-700"
        >Día 2 - 25 de abril 2020</h2>
      </div>
      </div>
    </div>
  </div>
        </div>
    </div>
</div>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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
</style>