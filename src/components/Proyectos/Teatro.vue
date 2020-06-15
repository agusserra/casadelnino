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
        <b-carousel-slide img-src="public/images/site/teatro.jpg"></b-carousel-slide>

      </b-carousel>
    </div>

    <section class="section-style primera-seccion">

          <div class="bienvenida">
      <h1 style="margin:0; padding:0">Taller de teatro</h1>
    </div>
      <p>Profesor Pablo Andrés Nakandakare. DíasLunes y Miércoles en la Casa<br>
Incorporamos clases de Teatro en la casa para el Grupo Grande en el TM y TT<br>
Se trabaja en la representación de cuentos con valores del autor y autodidacta Pancho Aquino que culminara con una obra teatral abierta a las familias del barrio con la participación de los chicos y de las propias orientadoras en la Casa

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
