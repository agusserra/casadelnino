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
        <b-carousel-slide img-src="public/images/site/escolar.jpg"></b-carousel-slide>

      </b-carousel>
    </div>

    <section class="section-style primera-seccion">

          <div class="bienvenida">
      <h1 style="margin:0; padding:0">Apoyo Escolar</h1>
    </div>
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
      classIndex: ""
    };
  },
  methods: {},
  computed: {
    ...mapGetters(["categorias", "userLogged"])
  },
  components: {
    Loader: Loader,
    Carousel,
    Slide
  },

  mounted: function() {
    if (this.userLogged.profile == "HIJO") {
      this.classIndex = "index-kids";
    }
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
