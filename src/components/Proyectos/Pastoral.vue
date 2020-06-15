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
        <b-carousel-slide img-src="public/images/site/pastoral.jpg"></b-carousel-slide>
      </b-carousel>
    </div>

    <section class="section-style primera-seccion">
      <div class="bienvenida">
        <h1 style="margin:0; padding:0">Área pastoral</h1>
      </div>
      <p>
        Catequesis para todos los grupos de niños en la casa por profesionales voluntarias
        <br />Catequesis para Primera Comunión
        <br />Catequesis Familiar
        <br />Misión Barrial por jóvenes pertenecientes al Movimiento de Schoenstatt.
        <br />
      </p>
    </section>

    <section class="section-style" style="margin-top:30px">
      <b-carousel style="z-index:2" id="carousel-fade2" img-height="300">
        <b-carousel-slide img-src="public/images/site/pastoral/pastoral1.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/pastoral/pastoral2.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/pastoral/pastoral3.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/pastoral/pastoral4.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/pastoral/pastoral5.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/pastoral/pastoral6.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/pastoral/pastoral7.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/pastoral/pastoral8.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/pastoral/pastoral9.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/pastoral/pastoral10.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/pastoral/pastoral12.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/pastoral/pastoral13.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/pastoral/pastoral14.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/pastoral/pastoral15.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/pastoral/pastoral16.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/pastoral/pastoral17.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/pastoral/pastoral18.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/pastoral/pastoral19.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/pastoral/pastoral20.jpg"></b-carousel-slide>

        <b-carousel-slide img-src="public/images/site/pastoral/pastoral21.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/pastoral/pastoral22.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/pastoral/pastoral23.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/pastoral/pastoral24.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/pastoral/pastoral25.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/pastoral/pastoral26.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/pastoral/pastoral27.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/pastoral/pastoral28.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/pastoral/pastoral29.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/pastoral/pastoral30.jpg"></b-carousel-slide>
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
