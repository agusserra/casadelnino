<template>
  <section class="proyecto">
    <loader></loader>
    <div
      style="display:inline-grid; vertical-align: middle; width:100%;text-align: -webkit-center; "
    >
      <b-carousel class="carousel-top" fade img-width="1024" img-height="480">
        <b-carousel-slide img-src="public/images/site/teatro.jpg"></b-carousel-slide>
      </b-carousel>
    </div>

    <section class="section-style margenes primera-seccion" >

     <div class="titulo-principal">
      <h1>Taller de</h1>
      <h1 class="titulo-verde">Teatro</h1>
    </div>
      <p>Incorporamos clases de teatro en la casa para el grupo de <b>grandes</b> tanto para el turno de la mañana como para el de la tarde.</p>
      <p>Se trabaja en la representación de cuentos con valores del autor y autodidacta <b>Pancho Aquino</b> que culminará con una obra teatral abierta a las familias del barrio con la participación de los chicos y de las propias orientadoras en la casa.</p>
      <p style="margin-bottom: 0px; padding-bottom: 0px;">Profesor: <b>Pablo Andrés Nakandakare</b></p>
      <p>Días: Lunes y Miércoles</p>
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
      classIndex: ""
    };
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
.icon-obj {
  width: 80px;
  height: 80px;
  color: #2daae1;
  padding: 10px;
}

@media screen and (max-width: 600px) {
}
</style>
