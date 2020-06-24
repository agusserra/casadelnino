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
      <p class="less-gutter">Está a cargo de mujeres voluntarias del barrio con el apoyo de referentes voluntarias profesionales del área de Costura.</p>
      <p class="less-gutter"><b-icon-check class="icon-check"></b-icon-check>Se desarrolla de manera semanal, los días miércoles en ambos turnos.</p>
      <p class="less-gutter"><b-icon-check class="icon-check"></b-icon-check>Actualmente las niños del <b>Grupo Grande</b> (10 a 13 años) participan del taller de costura bajo un proyecto de reciclado.</p>
      <p class="less-gutter"><b-icon-check class="icon-check"></b-icon-check>Con la ayuda de las talleristas, reutilizan las telas de sus propios muñecos o juguetes confeccionando nuevos diseños.</p>
      <p class="less-gutter"><b-icon-check class="icon-check"></b-icon-check>Arreglan los propios y se divierten mucho en el proceso.</p>
      <p class="less-gutter">El 24 de octubre se realizará la <b>muestra anual</b> de las prendas confeccionadas durante el año abierta a las familias del barrio.</p>
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