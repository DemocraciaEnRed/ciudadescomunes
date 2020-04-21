<template>
  <section class="hero is-white is-medium">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-variable is-1-mobile is-8-tablet">
          <div class="column">
        <h1 class="title is-1 is-size-2-touch is-700">agenda</h1>
        <!-- <p class="is-size-7">* El horario se muestra en tú zona horaria: {{Intl.DateTimeFormat().resolvedOptions().timeZone.replace(/\//g,', ').replace(/_/g,' ')}}</p> -->
        <p class="is-size-7">* El horario se muestra en tú zona horaria: {{new Date().toString().match(/\(([A-Za-z\s].*)\)/)[1]}}</p>
          </div>
          <div class="column">
            <div class="columns">
              <div class="column">
                <div class="content">
                  <p class="reference is-size-7-mobile">
                    <img src="@/assets/img/agenda/h.png" class="small-icon" alt />HÁBITAT Y JUSTICIA SOCIAL
                  </p>
                  <p class="reference is-size-7-mobile">
                    <img src="@/assets/img/agenda/d.png" class="small-icon" alt />DESARROLLO REGENERATIVO
                  </p>
                  <p class="reference is-size-7-mobile">
                    <img src="@/assets/img/agenda/c.png" class="small-icon" alt />CIUDAD INCLUSIVA
                  </p>
                </div>
              </div>
              <div class="column">
                <div class="content">
                  <p class="reference is-size-7-mobile">
                    <img src="@/assets/img/agenda/g.png" class="small-icon" alt />GOBIERNO ABIERTO
                  </p>
                  <p class="reference is-size-7-mobile">
                    <img src="@/assets/img/agenda/p.png" class="small-icon" alt />POSDOMESTICIDADES
                  </p>
                  <p class="reference is-size-7-mobile">
                    <img src="@/assets/img/agenda/l.png" class="small-icon" alt />LABORATORIOS CÍVICOS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br>
        <br>
        <br>
        <div class="columns is-variable is-1-mobile is-8-tablet">
          <div class="column">
            <day :day="calendar[0]" />
          </div>
          <div class="column">
            <day :day="calendar[1]" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import calendar from "@/data/calendar";
import Day from './Day.vue'

export default {
  data() {
    return {
      calendar: calendar
    };
  },
  components: {
    Day
  }
};
</script>

<style lang="scss" scoped>
.small-icon {
  height: 20px;
  width: 20px;
  margin-right: 10px;
  vertical-align: top;
  // @media only screen and (max-width: 600px) {
  //   display: block;
  // }
}
.reference {
  font-weight: 300;
}
</style>