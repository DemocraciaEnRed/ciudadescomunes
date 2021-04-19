<template>
  <div>
    <section class="intro-header">
      <MobileHeader v-if="showMobile" />
      <WideMobileHeader v-if="showExtraMobile" />
      <TouchHeader v-if="showTouch" />
      <DesktopHeader v-if="showDesktop" />
      <WidescreenHeader v-if="showWidescreen" />
    </section>
    <div class="hero is-special is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
					<h1 class="title is-1 is-size-3-touch is-800">Año 2020</h1>
					<br>
          <div class="columns is-centered">
            <div class="column is-8">
              <div class="content">
                <p>
                  Ciudades Comunes 2020 fue un encuentro en línea para repensar
                  la co-construcción de las ciudades a partir de la crisis
                  sanitaria global por el COVID-19. El evento reunió de manera
                  digital, deslocalizada, abierta y global a personas,
                  colectivos y organizaciones de la sociedad civil, del sector
                  privado y público que impulsan acciones de transformación
                  urbana, escuchando y valorando a su comunidad local.
                </p>

                <p>
                  Ofició como Sede del 4° Encuentro Placemaking Latinoamérica
                  Argentina 2020. Este tipo de encuentros reúne anualmente a
                  cientos de personas de la región, con experiencia en
                  innovación ciudadana y experimentación urbana, interesadas en
                  la co-construcción de democracia local y el fortalecimiento de
                  la vida cotidiana en el espacio público. Referentes mundiales
                  y regionales de toda Latinoamérica, en sociología,
                  arquitectura, política, diseño, comunicación, activismo, etc.,
                  brindaron su diversidad de conocimiento y compartieron
                  experiencias en la implementación de proyectos que impactan
                  positivamente en el entorno urbano de las ciudades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
		<div class="hero is-primary">
			<div class="hero-body">
				<div class="container">
					<div class="columns is-centered has-text-centered">
						<div class="column is-3">
							<h1 class="title is-1 is-800">+36 mil</h1>
							<h1 class="subtitle is-5">asistentes online</h1>
						</div>
						<div class="column is-3">
							<h1 class="title is-1 is-800">48</h1>
							<h1 class="subtitle is-5">paises presentes</h1>
						</div>
						<div class="column is-3">
							<h1 class="title is-1 is-800">80</h1>
							<h1 class="subtitle is-5">expositores</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="hero is-rosa">
			<div class="hero-body">
				<div class="container">
					<div class="columns is-centered is-vcentered">
						<div class="column is-narrow has-text-right-desktop has-text-centered">
							<h1 class="title is-1 is-800 mr-3">24 hs</h1>
						</div>
						<div class="column is-4 has-text-left-desktop has-text-centered">
							<h1 class="title is-4 is-700">en video</h1>
							<h1 class="subtitle is-6">de ideas para repensar la co-construcción de las ciudades en epoca de crisis sanitaria global</h1>
						</div>
						
					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import VueScreenSize from "vue-screen-size";
import MobileHeader from "@/assets/img/congreso2020/header-mobile.svg";
import WideMobileHeader from "@/assets/img/congreso2020/header-wide-mobile.svg";
import TouchHeader from "@/assets/img/congreso2020/header-touch.svg";
import DesktopHeader from "@/assets/img/congreso2020/header-desktop.svg";
import WidescreenHeader from "@/assets/img/congreso2020/header-wide.svg";

export default {
  components: {
    MobileHeader,
    WideMobileHeader,
    TouchHeader,
    DesktopHeader,
    WidescreenHeader,
  },
  mixins: [VueScreenSize.VueScreenSizeMixin],
  computed: {
    showMobile: function () {
      return this.$vssWidth > 0 && this.$vssWidth <= 480;
    },
    showExtraMobile: function () {
      return this.$vssWidth > 480 && this.$vssWidth <= 768;
    },
    showTouch: function () {
      return this.$vssWidth > 768 && this.$vssWidth <= 1024;
    },
    showDesktop: function () {
      return this.$vssWidth > 1024 && this.$vssWidth <= 1440;
    },
    showWidescreen: function () {
      return this.$vssWidth > 1440;
    },
  },
};
</script>

<style lang="scss" scoped>
.intro-header {
  width: 100%;
  // margin-bottom: -1px;
}
section {
  line-height: 0;
}
.is-special {
  background: rgb(255, 255, 255);
  background: -moz-linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 10%,
    rgba(255, 222, 23, 1) 80%
  );
  background: -webkit-linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 10%,
    rgba(255, 222, 23, 1) 80%
  );
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 222, 23, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#ffde17",GradientType=1);
}
</style>