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
        <b-carousel-slide img-src="public/images/site/manualidades.jpg"></b-carousel-slide>

      </b-carousel>
    </div>

    <section class="section-style primera-seccion">

          <div class="bienvenida">
      <h1 style="margin:0; padding:0">Taller de manualidades</h1>
    </div>
      <p>Desarrollado por cada orientador con su grupo
</p>

      <p>
        <b-icon-check style="color:#2daae1; width:20px; height:20px"></b-icon-check>Actividades artísticas
        <br />
        <b-icon-check style="color:#2daae1; width:20px; height:20px"></b-icon-check>Armado de juegos, instrumentos musicales, adornos para fiestas patrias desarrolladas en la Casa, muestras en Feria, encuentros comunitarios
        <br />
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
