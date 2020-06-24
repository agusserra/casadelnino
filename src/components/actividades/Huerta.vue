<template>
  <section class="proyecto">
    <loader></loader>
    <div
      style="display:inline-grid; vertical-align: middle; width:100%;text-align: -webkit-center; "
    >
      <b-carousel class="carousel-top" fade img-width="1024" img-height="480">
        <b-carousel-slide class="imagen-carrousel" img-src="public/images/site/huerta.jpg"></b-carousel-slide>
      </b-carousel>
    </div>

    <section class="section-style margenes primera-seccion">

     <div class="titulo-principal">
      <h1>Taller de</h1>
      <h1 class="titulo-verde">Huerta</h1>
    </div>
      <p class="less-gutter">El grupo de Madres del <b>Movimiento Apostólico de Schoenstatt</b> del Santuario de Confidentia con el apoyo de <b>ProHuerta INTA</b> están desarrollando el proyecto <b style="color:#F4964C;">Huerta Comunitaria</b>.</p>
      <p class="less-gutter">Los talleres se brindan de forma semanal, los días jueves en ambos turnos, por el Equipo Huerta. Los niños desarrollan una huerta orgánica y saludable mediante un proceso de aprendizaje por etapas:</p>
      <p class="less-gutter"><b-icon-check class="icon-check"></b-icon-check>Preparación de la huerta, trabajo sobre la tierra, cultivo, cuidado y cosecha.</p>
      <p class="less-gutter"><b-icon-check class="icon-check"></b-icon-check>Desarrollo de Compost (restos de comida reutilizables).</p>
      <p class="less-gutter"><b-icon-check class="icon-check"></b-icon-check>Se trabaja sobre el conocimiento de la naturaleza, sus beneficios, la sana alimentación, cultura del trabajo, valores de solidaridad, espera, higiene y sustentabilidad.</p>
      <p class="less-gutter"><b-icon-check class="icon-check"></b-icon-check>Los chicos aprenden y participan del proceso junto a sus orientadores que motivan y acompañan en el cuidado diario del la huerta en la Casa.</p>
      <p class="less-gutter"><b-icon-check class="icon-check"></b-icon-check>Se brindan talleres abiertos a las familias del barrio para enseñarles a desarrollar su propia huerta en sus hogares.</p>
      <p class="less-gutter">Tiene como fin el fortalecimiento de las capacidades motrices de los niños.</p>
      <p class="less-gutter">Profesionales voluntarios de arte: <b>Laura Varangot y Gonzalo Gorostiaga.</b></p>
    </section>

    <section class="section-style margenes " style="margin-top:30px">
      <b-carousel id="carousel-fade" :interval="4000" controls fade img-height="300">
        <b-carousel-slide class="imagen-carrousel" img-src="public/images/site/huerta/huerta1.jpg" ></b-carousel-slide>
        <b-carousel-slide class="imagen-carrousel" img-src="public/images/site/huerta/huerta2.jpg"></b-carousel-slide>
        <b-carousel-slide class="imagen-carrousel" img-src="public/images/site/huerta/huerta3.jpg"></b-carousel-slide>
        <b-carousel-slide class="imagen-carrousel" img-src="public/images/site/huerta/huerta4.jpg"></b-carousel-slide>
        <b-carousel-slide class="imagen-carrousel" img-src="public/images/site/huerta/huerta5.jpg"></b-carousel-slide>
        <b-carousel-slide class="imagen-carrousel" img-src="public/images/site/huerta/huerta6.jpg"></b-carousel-slide>
        <b-carousel-slide class="imagen-carrousel" img-src="public/images/site/huerta/huerta7.jpg"></b-carousel-slide>
        <b-carousel-slide class="imagen-carrousel" img-src="public/images/site/huerta/huerta8.jpg"></b-carousel-slide>
        <b-carousel-slide class="imagen-carrousel" img-src="public/images/site/huerta/huerta9.jpg"></b-carousel-slide>
        <b-carousel-slide class="imagen-carrousel" img-src="public/images/site/huerta/huerta10.jpg"></b-carousel-slide>
        <b-carousel-slide class="imagen-carrousel" img-src="public/images/site/huerta/huerta11.jpg"></b-carousel-slide>
        <b-carousel-slide class="imagen-carrousel" img-src="public/images/site/huerta/huerta12.jpg"></b-carousel-slide>
        <b-carousel-slide class="imagen-carrousel" img-src="public/images/site/huerta/huerta13.jpg"></b-carousel-slide>
        <b-carousel-slide class="imagen-carrousel" img-src="public/images/site/huerta/huerta14.jpg"></b-carousel-slide>
        <b-carousel-slide class="imagen-carrousel" img-src="public/images/site/huerta/huerta15.jpg"></b-carousel-slide>
        <b-carousel-slide class="imagen-carrousel" img-src="public/images/site/huerta/huerta16.jpg"></b-carousel-slide>
        <b-carousel-slide class="imagen-carrousel" img-src="public/images/site/huerta/huerta17.jpg"></b-carousel-slide>
        <b-carousel-slide class="imagen-carrousel" img-src="public/images/site/huerta/huerta18.jpg"></b-carousel-slide>
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
.imagen-carrousel{
  width:100%;
  height:100%;
}

.icon-obj {
  width: 80px;
  height: 80px;
  color: #2daae1;
  padding: 10px;
}

@media screen and (max-width: 600px) {
}
</style>
