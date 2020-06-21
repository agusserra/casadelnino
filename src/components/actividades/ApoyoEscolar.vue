<template>
  <section class="proyecto">
    <loader></loader>
    <div
      style="display:inline-grid; vertical-align: middle; width:100%;text-align: -webkit-center; "
    >
      <b-carousel class="carousel-top" fade img-width="1024" img-height="480">
        <b-carousel-slide img-src="public/images/site/escolar.jpg"></b-carousel-slide>
      </b-carousel>
    </div>

    <section class="section-style margenes primera-seccion">
      <div class="titulo-principal">
        <h1>Apoyo</h1>
        <h1 class="titulo-verde">Escolar</h1>
      </div>
      <p>
        Se trabaja en base al <b>Programa de Fortalecimiento de Capacidades</b>. Se trata de un programa desarrollado por el Ministerio Desarrollo Social destinado a niños en situación de vulnerabilidad para el fortalecimiento de sus capacidades a través de un taller de lecto-escritura donde se trabaja con cada grupo conforme a su edad y orientador.
      </p>
      <p style="margin-bottom: 0px; padding-bottom: 10px;">Se brinda un refuerzo del proceso de aprendizaje a través de distintas actividades:</p>
      <p class="check-text vertical-center">
        <b-icon-check class="icon-check"></b-icon-check>Lúdicas y didácticas
      </p>
      <p class="check-text vertical-center">
        <b-icon-check class="icon-check"></b-icon-check>Rincones de lectura
      </p>
      <p class="check-text vertical-center">
        <b-icon-check class="icon-check"></b-icon-check>Representación de cuentos
      </p>
      <p class="check-text vertical-center">
        <b-icon-check class="icon-check"></b-icon-check>Juegos de palabras
      </p>
      <p class="check-text vertical-center">
        <b-icon-check class="icon-check"></b-icon-check>Juegos situacionales
      </p>
      <p class="check-text vertical-center">
        <b-icon-check class="icon-check"></b-icon-check>Juegos de mesa
      </p>
    </section>

    <actividades></actividades>
  </section>
</template>

<script>
import Loader from "../shared/Loader";
import Actividades from "../shared/Actividades";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "app",
  data() {
    return {};
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
</style>