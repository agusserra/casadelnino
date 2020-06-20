<template>
  <section class="conocenos" style="z-index:0">
    <loader></loader>
    <div
      style="display:inline-grid; vertical-align: middle; width:100%;text-align: -webkit-center; "
    >
      <b-carousel
        class="carousel-top"
        fade
        img-width="1024"
        img-height="480"
      >
        <b-carousel-slide img-src="public/images/site/conocenos1.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/conocenos2.jpg"></b-carousel-slide>
      </b-carousel>
    </div>

    <section class="section-style primera-seccion">
     <div class="titulo-principal">
      <h1>Comisión</h1>
      <h1 class="titulo-verde">Directiva</h1>
    </div>
      <div style="text-aling:center">
        <b-card-group style="place-content:center">
          <b-card no-body class="overflow-hidden miembros">
            <b-card-text style=" padding:0px">
              <b-img src="public/images/site/comision/carmona.jpg" class="imagen-conocenos"></b-img>
              <h5 class="nombre">P. Guillermo Carmona</h5>
              <h6 class="cargo">Presidente</h6>
            </b-card-text>
          </b-card>
          <b-card no-body class="overflow-hidden miembros">
            <b-card-text style=" padding:0px">
              <b-img src="public/images/site/comision/maria.jpg" class="imagen-conocenos"></b-img>
              <h5 class="nombre">María Dominguez</h5>
              <h6 class="cargo">Secretaria</h6>
            </b-card-text>
          </b-card>
          <b-card no-body class="overflow-hidden miembros">
            <b-card-text style=" padding:0px">
              <b-img src="public/images/site/comision/manu.jpg" class="imagen-conocenos"></b-img>
              <h5 class="nombre">P. Manuel López Naón</h5>
              <h6 class="cargo">Tesorero</h6>
            </b-card-text>
          </b-card>
          <b-card no-body class="overflow-hidden miembros">
            <b-card-text style=" padding:0px">
              <b-img src="public/images/site/comision/monique.jpg" class="imagen-conocenos"></b-img>
              <h5 class="nombre">Monique Raymond de Torralva</h5>
              <h6 class="cargo">Vocal titular</h6>
            </b-card-text>
          </b-card>
          <b-card no-body class="overflow-hidden miembros">
            <b-card-text style=" padding:0px">
              <b-img src="public/images/site/comision/ricardo.jpg" class="imagen-conocenos"></b-img>
              <h5 class="nombre">Ricardo del Pino</h5>
              <h6 class="cargo">Vocal titular</h6>
            </b-card-text>
          </b-card>
          <b-card no-body class="overflow-hidden miembros">
            <b-card-text style=" padding:0px">
              <b-img src="public/images/site/comision/gaby.jpg" class="imagen-conocenos"></b-img>
              <h5 class="nombre">Gabriela Sarquis de Imperatrice</h5>
              <h6 class="cargo">Vocal suplente</h6>
            </b-card-text>
          </b-card>
          <b-card no-body class="overflow-hidden miembros">
            <b-card-text style=" padding:0px">
              <b-img src="public/images/site/comision/agus.jpg" class="imagen-conocenos"></b-img>
              <h5 class="nombre">Agustín Serra</h5>
              <h6 class="cargo">Revisor de cuentas</h6>
            </b-card-text>
          </b-card>
        </b-card-group>
      </div>
      <p></p>
      <b-carousel style="z-index:2" id="carousel-fade2" img-height="300">
        <b-carousel-slide img-src="public/images/site/comision/comision1.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/comision/comision2.jpg"></b-carousel-slide>
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
    };
  },
  methods: {},
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

<style scope>
.imagen-conocenos {
  width: 100%;
  filter: grayscale(0);
  border-radius: 5px;
}

.imagen-conocenos:hover {
  filter: grayscale(0.1);
  transition: filter 0.5s;
}

.nombre {
  padding: 10px 0px 5px 5px;
  margin: 0;
  font-size: 18px;
  color: rgba(0, 0, 0, 1);
}

.cargo {
  padding: 0px 0px 0px 5px;
  margin: 0;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.5);
}

.miembros {
  padding: 10px;
  margin: 10px;
  min-width: 180px;
  max-width: 180px;
  width: 200px !important;
  border: 0px;
}


</style>
