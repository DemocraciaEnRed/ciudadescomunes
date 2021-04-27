<template>
  <div
    class="is-flex is-flex-direction-row is-flex-wrap-wrap is-justify-content-center"
  >
    <div class="mb-5" v-for="(s, i) in speakers" :key="`speaker${i}`">
      <b-tooltip position="is-bottom" multilined>
        <template v-slot:content>
          <b>{{ s.name }}</b>
        </template>
        <img
          :src="`/img/exponenincu/${s.picture}`"
          class="image small-speaker"
          alt=""
        />
      </b-tooltip>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      speakers: [
        {
          name: "Alejandro Echeverri",
          picture: "alejandroecheverri.jpg",
        },
        {
          name: "Andrés G Blanco ",
          picture: "andresblanco.jpg",
        },
        {
          name: "Agustín Frizzera",
          picture: "agustinfrizzera.jpg",
        },
        {
          name: "Renata Laurentino",
          picture: "renata.jpg",
        },
        {
          name: "Marialuisa Borja",
          picture: "marialuisa.jpg",
        },
        {
          name: "Paola Jirón Martínez",
          picture: "paola.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.small-speaker {
  border-radius: 400px;
  width: 140px;
  margin: 0 10px;
  @media only screen and (max-width: 798px) {
    width: 100px;
  }
}
.special-size {
  font-size: 0.9rem;
}
</style>