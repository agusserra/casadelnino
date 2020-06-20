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

<<<<<<< HEAD
    <section class="section-style margenes primera-seccion" >
      <div class="titulo-principal">
        <h1>
          Apoyo
          <span class="titulo-verde">Escolar</span>
        </h1>
      </div>
=======
    <section class="section-style primera-seccion" >
    <div class="titulo-principal">
      <h1>Apoyo</h1>
      <h1 class="titulo-verde">Escolar</h1>
    </div>
>>>>>>> origin/master
      <p>Se trabaja en base al Programa de Fortalecimiento de Capacidades. Se trata de un programa desarrollado por el Ministerio Desarrollo Social destinado a niños en situación de vulnerabilidad para el fortalecimiento de sus capacidades a través de un taller de lecto-escritura donde se trabaja con cada grupo conforme a su edad y orientador.</p>
      <p>Se brinda un refuerzo del proceso de aprendizaje a través de distintas actividades:</p>
      <p>
        <b-icon-check style="color:#2daae1; width:20px; height:20px"></b-icon-check>Lúdicas y didácticas
        <br />
        <b-icon-check style="color:#2daae1; width:20px; height:20px"></b-icon-check>Rincones de lectura
        <br />
        <b-icon-check style="color:#2daae1; width:20px; height:20px"></b-icon-check>Representación de cuentos
        <br />
        <b-icon-check style="color:#2daae1; width:20px; height:20px"></b-icon-check>Juegos de palabras
        <br />
        <b-icon-check style="color:#2daae1; width:20px; height:20px"></b-icon-check>Juegos situacionales
        <br />
        <b-icon-check style="color:#2daae1; width:20px; height:20px"></b-icon-check>Juegos de mesa
        <br />
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