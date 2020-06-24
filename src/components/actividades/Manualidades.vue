<template>
  <section class="proyecto">
    <loader></loader>
    <div
      style="display:inline-grid; vertical-align: middle; width:100%;text-align: -webkit-center; "
    >
      <b-carousel class="carousel-top" fade img-width="1024" img-height="480">
        <b-carousel-slide img-src="public/images/site/manualidades.jpg"></b-carousel-slide>
      </b-carousel>
    </div>

    <section class="section-style margenes primera-seccion">
      <div class="titulo-principal">
        <h1>Taller de</h1>
        <h1 class="titulo-verde">Manualidades</h1>
      </div>
      <p
        style="margin-bottom: 0px; padding-bottom: 10px;"
      >Desarrollado por cada orientador con su grupo.</p>
      <p class="check-text vertical-center">
        <b-icon-check class="icon-check"></b-icon-check>Actividades artísticas
      </p>
      <p class="check-text vertical-center">
        <b-icon-check class="icon-check"></b-icon-check>Armado de juegos
      </p>
      <p class="check-text vertical-center">
        <b-icon-check class="icon-check"></b-icon-check>Construcción de instrumentos musicales
      </p>
      <p class="check-text vertical-center">
        <b-icon-check class="icon-check"></b-icon-check>Creación de adornos para fiestas patrias desarrolladas en la casa
      </p>
      <p class="check-text vertical-center">
        <b-icon-check class="icon-check"></b-icon-check>Muestras en ferias y encuentros comunitarios
      </p>
    </section>
    <actividades></actividades>
  </section>
</template>

<script>
import Loader from "../shared/Loader";

import { Carousel, Slide } from "vue-carousel";
import Actividades from "../shared/Actividades";

export default {
  name: "app",
  data() {
    return {
      classIndex: ""
    };
  },
  methods: {},
  computed: {},
  components: {
    Loader: Loader,
    Carousel,
    Slide,
    Actividades
  },
  mounted: function() {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
  }
};
</script>

<style>
.icon-obj {
  width: 80px;
  height: 80px;
  color: #2daae1;
  padding: 10px;
}

@media screen and (max-width: 600px) {
}
</style>
