<template>
  <section class="proyecto">
    <loader></loader>
    <div
      style="display:inline-grid; vertical-align: middle; width:100%;text-align: -webkit-center; "
    >
      <b-carousel class="carousel-top" fade img-width="1024" img-height="480">
        <b-carousel-slide img-src="public/images/site/deporte.jpg"></b-carousel-slide>
      </b-carousel>
    </div>

    <section class="section-style margenes primera-seccion">
      <div class="titulo-principal">
        <h1>Educación</h1>
        <h1 class="titulo-verde">Física</h1>
      </div>
    
      <p class="less-gutter">Se practica fútbol, hockey y softball dos veces por semana.</p>
      <p class="less-gutter">Un profesor (Lucas Gatto) trabaja con cada grupo incorporando actividades conforme a las edades de los chicos.</p>
      <p class="less-gutter">Este año se incorporó al <b>hockey</b> como nuevo deporte gracias al aporte de donaciones del equipamiento para el grupo de <b>grandes</b> y <b>medianos</b> de la casa.</p>
      <p class="less-gutter">También sumamos equipamiento para <b>softball</b> gracias a una generosa donación de tres cascos protectores para incorporar la figura del cátcher.</p>
    </section>

    <section class="section-style margenes " style="margin-top:30px">
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