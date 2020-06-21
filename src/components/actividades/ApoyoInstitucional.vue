<template>
  <section class="proyecto" >
    <loader></loader>
    <div style="display:inline-grid; vertical-align: middle; width:100%;text-align: -webkit-center; ">
      <b-carousel
        class="carousel-top"
        fade
        img-width="1024"
        img-height="480"
      >
        <b-carousel-slide img-src="public/images/site/institucional.jpg"></b-carousel-slide>
      </b-carousel>
    </div>

    <section class="section-style margenes primera-seccion" >
    <div class="titulo-principal">
      <h1>Apoyo</h1>
      <h1 class="titulo-verde">Institucional</h1>
    </div>
      <p style="margin-bottom: 0px; padding-bottom: 10px;">Distintas instituciones educativas visitan nuestra casa lo que favorece el enriquecimiento mutuo e intercambio comunitario.</p>
      <p class="check-text vertical-center">
        <b-icon-check class="icon-check"></b-icon-check><b>Colegio Jesús María</b>&nbsp;de Florencio Varela
      </p>
      <p class="check-text vertical-center">
        <b-icon-check class="icon-check vertical-center"></b-icon-check><b>Escuela Argentina Modelo</b>&nbsp;de C.A.B.A.
      </p>
      <p class="check-text vertical-center">
        <b-icon-check class="icon-check"></b-icon-check><b>Colegio Pellegrini</b>&nbsp;de C.A.B.A.
      </p>
      <p class="check-text vertical-center">
        <b-icon-check class="icon-check"></b-icon-check><b>Colegio Estrada</b>&nbsp;de La Plata
      </p>
      <p class="check-text vertical-center">
        <b-icon-check class="icon-check"></b-icon-check><b>Colegio San Tarsicio</b>&nbsp;de C.A.B.A.
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