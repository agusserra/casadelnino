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

    <section class="section-style primera-seccion" >
    <div class="titulo-principal">
      <h1>Apoyo</h1>
      <h1 class="titulo-verde">Institucional</h1>
    </div>
      <p>Visitas de distintas instituciones educativas que favorece el enriquecimiento mutuo e intercambio comunitario</p>

      <p>
        <b-icon-check style="color:#2daae1; width:20px; height:20px"></b-icon-check>Colegio Jesús María de Florencio Varela
        <br />
        <b-icon-check style="color:#2daae1; width:20px; height:20px"></b-icon-check>Escuela Argentina Modelo CABA
        <br />
        <b-icon-check style="color:#2daae1; width:20px; height:20px"></b-icon-check>Colegio Pellegrini CABA
        <br />
        <b-icon-check style="color:#2daae1; width:20px; height:20px"></b-icon-check>Colegio Estrada La Plata
        <br />
        <b-icon-check style="color:#2daae1; width:20px; height:20px"></b-icon-check>Colegio San Tarsicio CABA
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