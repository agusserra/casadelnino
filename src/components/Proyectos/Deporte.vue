<template>
  <section class="proyecto">
    <loader></loader>
    <div style="display:inline-grid; vertical-align: middle; width:100%;text-align: -webkit-center; ">
      <b-carousel
        class="carousel-top"
        fade
        img-width="1024"
        img-height="480"
      >
        <b-carousel-slide img-src="public/images/site/deporte.jpg"></b-carousel-slide>
      </b-carousel>
    </div>

    <section class="section-style primera-seccion">
      <div class="titulo-principal">
        <h1>Educación Física</h1>
      </div>
      <p>
        Futbol, Hockey y Softball
        <br />MODALIDAD: Martes y Jueves de 8 a 17 hs. PROFESOR LUCAS GATTO
        <br />Un profesor trabaja con cada grupo incorporando actividades conforme a las edades de los chicos
        <br />Este año se incorporó al HOCKEY como nuevo deporte gracias al gran aporte de donaciones del equipamiento para el Grupo Grande y Mediano de la casa
        <br />Sumamos equipamiento para SOFTBALL gracias a una generosa donación de tres cascos protectores para incorporar la figura del Cátcher
        <br />
      </p>
    </section>

    <section class="section-style" style="margin-top:30px">
      <b-carousel style="z-index:2" id="carousel-fade2" img-height="300">
        <b-carousel-slide img-src="public/images/site/deporte/deporte1.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/deporte/deporte2.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/deporte/deporte3.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/deporte/deporte4.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/deporte/deporte5.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/deporte/deporte6.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/deporte/deporte7.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/deporte/deporte8.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/deporte/deporte9.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/deporte/deporte10.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/deporte/deporte12.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/deporte/deporte13.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/deporte/deporte14.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/deporte/deporte15.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/deporte/deporte16.jpg"></b-carousel-slide>
      </b-carousel>
    </section>
  </section>
</template>

<script>
import Loader from "../shared/Loader";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "app",
  data() {
    return {
      slide: 0,
      sliding: null,
      classIndex: ""
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  },
  computed: {},
  components: {
    Loader: Loader,
    Carousel,
    Slide
  },
  mounted: function() {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
  }
};
</script>

<style>
</style>