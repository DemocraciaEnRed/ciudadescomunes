<template>
  <div class="hero is-white ">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered is-centered mb-5" :class="{'is-flex-direction-row-reverse': video.invert}">
          <div class="column is-6" :class="{'is-offset-2': video.invert}">
            <div class="videoWrapper">
              <iframe
                width="853"
                height="480"
                :src="`https://www.youtube.com/embed/${video.videoId}`"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div class="column" :class="{'is-offset-1': !video.invert, 'has-text-right': video.invert}">
            <div class="subtitle is-4 mb-3">
              {{video.week}}
            </div>
            <hr class=" my-3">
            <div class="title is-3 is-size-4-touch is-700 my-3">
              {{video.title}}
            </div>
            <div class="subtitle is-6 my-3">
              Transmitido: {{video.date}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['video']
}
</script>

<style scoped>
/* .is-black {
   background: rgb(110,85,158);
} */
.videoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
  background-color: #000;
}
.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>