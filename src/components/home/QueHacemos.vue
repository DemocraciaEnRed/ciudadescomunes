<template>
  <div class="hero is-white">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-5">
            <h1 class="subtitle is-1 is-size-2-touch has-text-centered is-300">
              que <span class="is-700">hacemos</span>?
            </h1>
          </div>
          <div class="column">
            <div
              class="columns is-centered is-variable is-multiline is-mobile is-1-mobile is-6-tablet"
            >
              <div class="column is-6 snip">
                <div class="box box-1">
                  <p class="is-size-6 is-size-5-tablet has-text-centered">
                    incubación y aceleración de proyectos de diseño cívico
                  </p>
                </div>
              </div>
              <div class="column is-6 snip">
                <div class="box box-2">
                  <p class="is-size-6 is-size-5-tablet has-text-centered">
                    formación<br /><br />talleres
                  </p>
                </div>
              </div>
              <div class="column is-6 snip">
                <div class="box box-3">
                  <p class="is-size-6 is-size-5-tablet has-text-centered">
                    contenidos urbanos <br /><br />
                    edición y publicaciones
                  </p>
                </div>
              </div>
              <div class="column is-6 snip">
                <div class="box box-4">
                  <p class="is-size-6 is-size-5-tablet has-text-centered">
                    consultorías<br /><br />acompañamiento
                  </p>
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
.hero.is-custom {
  background-color: #8cc63f;
}
.box {
  border-radius: 0;
  box-shadow: none;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
.box-1 {
  background-color: #e76c38a9;
  transform: rotate(-1deg);
}
.box-2 {
  background-color: #47a8dca9;
  transform: rotate(2deg);
}
.box-3 {
  background-color: #fddc4ea9;
  transform: rotate(1deg);
}
.box-4 {
  background-color: #efb0c9a9;
  transform: rotate(-1deg);
}
.snip {
  position: relative;
  .snip-dark {
    position: absolute;
    right: 0;
    top: 0;
    background-color: #77371ca9;
    height: 50px;
    width: 50px;
  }
}
</style>