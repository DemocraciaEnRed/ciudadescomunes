<template>
   <div class="section pt-2">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-7">
            <div class="videoWrapper">
              <iframe
                width="853"
                height="480"
                src="https://www.youtube.com/embed/iNrrV8zH1t8"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
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