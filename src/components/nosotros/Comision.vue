<template>
  <section class="conocenos" style="z-index:0">
    <loader></loader>
    <div
      style="display:inline-grid; vertical-align: middle; width:100%;text-align: -webkit-center; "
    >
      <b-carousel
        id="carousel-fade"
        style="filter: brightness(0.5); text-shadow: 0px 0px 2px #000; z-index:-1;box-shadow: -1px 11px 16px 1px rgba(0, 0, 0, 0.32);"
        fade
        img-width="1024"
        img-height="480"
      >
        <b-carousel-slide img-src="public/images/site/conocenos1.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/conocenos2.jpg"></b-carousel-slide>
      </b-carousel>
    </div>

    <section class="section-style primera-seccion">
      <div class="bienvenida">
        <h1 style="margin:0; padding:0">Comisión Directiva</h1>
      </div>
      <div style="text-aling:center">
        <b-card-group style="place-content:center">
          <b-card no-body class="overflow-hidden miembros">
            <b-card-text style=" padding:0px">
              <b-img src="https://picsum.photos/id/1001/300/300" class="imagen-conocenos"></b-img>
              <h5 class="nombre">P. Guillermo Carmona</h5>
              <h6 class="cargo">Presidente</h6>
            </b-card-text>
          </b-card>
          <b-card no-body class="overflow-hidden miembros">
            <b-card-text style=" padding:0px">
              <b-img src="https://picsum.photos/id/1005/300/300" class="imagen-conocenos"></b-img>
              <h5 class="nombre">Mercedes Verón</h5>
              <h6 class="cargo">Directora</h6>
            </b-card-text>
          </b-card>
          <b-card no-body class="overflow-hidden miembros">
            <b-card-text style=" padding:0px">
              <b-img src="https://picsum.photos/id/203/300/300" class="imagen-conocenos"></b-img>
              <h5 class="nombre">Ricardo del Pino</h5>
              <h6 class="cargo">Comisión directiva</h6>
            </b-card-text>
          </b-card>
          <b-card no-body class="overflow-hidden miembros">
            <b-card-text style=" padding:0px">
              <b-img src="https://picsum.photos/id/177/300/300" class="imagen-conocenos"></b-img>
              <h5 class="nombre">Monique Torralva</h5>
              <h6 class="cargo">Comisión directiva</h6>
            </b-card-text>
          </b-card>
          <b-card no-body class="overflow-hidden miembros">
            <b-card-text style=" padding:0px">
              <b-img src="https://picsum.photos/id/3/300/300" class="imagen-conocenos"></b-img>
              <h5 class="nombre">Gabriela Sarquis</h5>
              <h6 class="cargo">Comisión directiva</h6>
            </b-card-text>
          </b-card>
          <b-card no-body class="overflow-hidden miembros">
            <b-card-text style=" padding:0px">
              <b-img src="https://picsum.photos/id/338/300/300" class="imagen-conocenos"></b-img>
              <h5 class="nombre">María Dominguez</h5>
              <h6 class="cargo">Comisión directiva</h6>
            </b-card-text>
          </b-card>
          <b-card no-body class="overflow-hidden miembros">
            <b-card-text style=" padding:0px">
              <b-img src="https://picsum.photos/id/342/300/300" class="imagen-conocenos"></b-img>
              <h5 class="nombre">P. Manuel López Naón</h5>
              <h6 class="cargo">Comisión directiva</h6>
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

<style scope>
.imagen-conocenos {
  width: 100%;
  filter: grayscale(0.8);
  border-radius: 5px;
}

.imagen-conocenos:hover {
  filter: grayscale(0.1);
  transition: filter 0.5s;
}

.cargo {
  padding: 0px 0px 0px 5px;
  margin: 0;
  font-size: 15px;
  color:rgba(0, 0, 0, 0.5);
}

.nombre {
  padding: 10px 0px 5px 5px;
  margin: 0;
  font-size: 18px;
  color:rgba(0, 0, 0, 1);
}

.miembros {
  padding: 10px;
  margin: 10px;
  min-width: 180px;
  max-width: 180px;
  width: 200px !important;
  border: 0px;
}

.apoyo {
  min-width: 300px;
}
.conocenos {
  background: linear-gradient(180deg, rgb(226, 226, 226) 30%, #bcd446 100%);
  background-repeat: repeat;
  background-size: 100%;
  text-align: -webkit-center;
  display: table;
  position: relative;
  width: 100%;
  z-index: -1;
}
.icon-obj {
  width: 80px;
  height: 80px;
  color: #2daae1;
  padding: 10px;
}
.profile-background {
  background-image: url(/public/images/site/profile-background.svg);
  background-repeat: no-repeat;
  background-size: 100%;
  text-align: -webkit-center;
  display: table;
  position: relative;
  width: 100%;
}

@media screen and (max-width: 600px) {
  .apoyo {
    min-width: 200px;
  }
}
</style>
