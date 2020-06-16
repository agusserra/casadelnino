<template>
  <section class="proyecto">
    <loader></loader>
    <div
      style="display:inline-grid; vertical-align: middle; width:100%;text-align: -webkit-center; "
    >
      <b-carousel
        id="carousel-fade"
        style="filter: brightness(0.5);text-shadow: 0px 0px 2px #000; z-index:-1;box-shadow: -1px 11px 16px 1px rgba(0, 0, 0, 0.32);"
        fade
        img-width="1024"
        img-height="480"
      >
        <b-carousel-slide img-src="public/images/site/pintura.jpg"></b-carousel-slide>
      </b-carousel>
    </div>

    <section class="section-style primera-seccion">
      <div class="bienvenida">
        <h1 style="margin:0; padding:0">Taller de pintura</h1>
      </div>
      <p>
        Tiene como fin el fortalecimiento de las capacidades motrices de los niños.
        <br />Profesionales voluntarios de arte: Laura Varangot y Gonzalo Gorostiaga.
        <br />
        <b-icon-check style="color:#2daae1; width:20px; height:20px"></b-icon-check>Actividades de pintura de murales.
        <br />
        <b-icon-check style="color:#2daae1; width:20px; height:20px"></b-icon-check>Desarrollo de la motricidad fina pintando interiores y diseñando murales.
        <br />
        <b-icon-check style="color:#2daae1; width:20px; height:20px"></b-icon-check>Conocimiento sobre los colores primarios y secundarios, y también sobre mezcla de colores.
        <br />
        <b-icon-check style="color:#2daae1; width:20px; height:20px"></b-icon-check>Desarrollo de la inteligencia emocional y los talentos propios.
        <br />
        <b-icon-check style="color:#2daae1; width:20px; height:20px"></b-icon-check>Los chicos eligieron juntos “El Libro de la Selva” de la biblioteca de la Casa del Niño y junto a los profesores se realizó el diseño en la pared exterior de la Casa. Luego, bajo la conducción de Gonzalo y Laura, con ayuda de las orientadores, cada grupo fue colaborando en una parte del mural.
        <br />
        <b-icon-check style="color:#2daae1; width:20px; height:20px"></b-icon-check>Aprendiendo sobre los colores, eligiéndolos y pintando los interiores.
        <br />
        <b-icon-check style="color:#2daae1; width:20px; height:20px"></b-icon-check>El trabajo continuará pues se avanzará en la pintura de otras paredes exteriores de la Casa con la misma modalidad de participación de los chicos.
        <br />
        <b>Frecuencia: Una vez cada tres semanas</b>
      </p>
    </section>

    <section class="section-style" style="margin-top:30px">
      <b-carousel
      style="z-index:2"
        id="carousel-fade2"
        img-height="300"

      >
        <b-carousel-slide img-src="public/images/site/pintura/pintura1.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/pintura/pintura2.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/pintura/pintura3.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/pintura/pintura4.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/pintura/pintura5.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/pintura/pintura6.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/pintura/pintura7.jpg"></b-carousel-slide>
      </b-carousel>
    </section>
  </section>
</template>

<script>
import Loader from "../shared/Loader";

import { Carousel, Slide } from "vue-carousel";

import { mapGetters } from "vuex";

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
  computed: {
    
  },
  components: {
    Loader: Loader,
    Carousel,
    Slide
  },
  mounted: function(){
    const loader=document.querySelector(".loader");
    loader.className+= " hidden";
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
