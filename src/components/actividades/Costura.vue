<template>
  <section class="proyecto">
    <loader></loader>
    <div
      style="display:inline-grid; vertical-align: middle; width:100%;text-align: -webkit-center; "
    >
      <b-carousel class="carousel-top" fade img-width="1024" img-height="480">
        <b-carousel-slide img-src="public/images/site/costura.jpg"></b-carousel-slide>
      </b-carousel>
    </div>

    <section class="section-style margenes primera-seccion">
     <div class="titulo-principal">
      <h1>Taller de</h1>
      <h1 class="titulo-verde">Costura</h1>
    </div>
      <p>
        A cargo de Mujeres Voluntarias del Barrio con el apoyo de referentes voluntarias profesionales del Área de Costura
        <br />MODALIDAD: Semanal. Miércoles en TM (10 a 12) y TT (13 a 16 hs)
        <br />Actualmente las niños del Grupo Grande (10 a 13 años) participan del taller de costura bajo un proyecto de reciclado
        <br />Con la ayuda de las talleristas, reutilizan las telas de sus propios muñecos o juguetes confeccionando nuevos diseños
        <br />Arreglan los propios y se divierten mucho en el proceso
        <br />El 24 de octubre se realizará la muestra anual de las prendas confeccionadas durante el año abierta a las familias del barrio
        <br />
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