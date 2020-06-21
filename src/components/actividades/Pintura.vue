<template>
  <section class="proyecto">
    <loader></loader>
    <div
      style="display:inline-grid; vertical-align: middle; width:100%;text-align: -webkit-center; "
    >
      <b-carousel class="carousel-top" fade img-width="1024" img-height="480">
        <b-carousel-slide img-src="public/images/site/pintura.jpg"></b-carousel-slide>
      </b-carousel>
    </div>

    <section class="section-style margenes primera-seccion" >

     <div class="titulo-principal">
      <h1>Taller de</h1>
      <h1 class="titulo-verde">Pintura</h1>
    </div>
      <p style="margin-bottom: 0px; padding-bottom: 10px;">Este taller tiene como fin el fortalecimiento de las capacidades motrices de los niños. Se realiza una vez cada 3 semanas y está a cargo de los profesionales voluntarios de arte Laura Varangot y Gonzalo Gorostiaga. Consta de:</p>
      <p class="check-text vertical-center">
        <b-icon-check class="icon-check"></b-icon-check>Actividades de pintura de murales.
      </p>
      <p class="check-text vertical-center">
        <b-icon-check class="icon-check"></b-icon-check>Desarrollo de la motricidad fina pintando interiores y diseñando murales.
      </p>
      <p class="check-text vertical-center">
        <b-icon-check class="icon-check"></b-icon-check>Conocimiento sobre los colores primarios y secundarios, y también sobre mezcla de colores.
      </p>
      <p class="check-text vertical-center">
        <b-icon-check class="icon-check"></b-icon-check>Desarrollo de la inteligencia emocional y los talentos propios.
      </p>
    </section>

    <section class="section-style margenes " style="margin-top:30px">
      <p>Los chicos eligieron juntos <b>"El Libro de la Selva"</b> de la biblioteca de la casa y junto a los profesores se realizó el diseño en la pared exterior de la Casa. Luego, bajo la conducción de Gonzalo y Laura, con ayuda de las orientadores, cada grupo fue colaborando en una parte del mural.</p>
      <p>El trabajo continuará pues se avanzará en la pintura de otras paredes exteriores de la Casa con la misma modalidad de participación de los chicos.</p>
      <b-carousel id="carousel-fade" :interval="4000" controls fade img-height="300">
        <b-carousel-slide img-src="public/images/site/pintura/pintura1.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/pintura/pintura2.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/pintura/pintura3.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/pintura/pintura4.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/pintura/pintura5.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/pintura/pintura6.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/pintura/pintura7.jpg"></b-carousel-slide>
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
.icon-obj {
  width: 80px;
  height: 80px;
  color: #2daae1;
  padding: 10px;
}

@media screen and (max-width: 600px) {
}
</style>
