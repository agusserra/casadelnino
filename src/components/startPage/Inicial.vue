<template>
  <section style="text-align:center">
    <b-carousel
      id="carousel-fade"
      style="filter: brightness(0.5);text-shadow: 0px 0px 2px #000; z-index:-1;box-shadow: -1px 11px 16px 1px rgba(0, 0, 0, 0.32);"
      fade
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide img-src="public/images/site/portada1.jpg"></b-carousel-slide>
      <b-carousel-slide img-src="public/images/site/portada2.jpg"></b-carousel-slide>
      <b-carousel-slide img-src="public/images/site/portada3.jpg"></b-carousel-slide>
      <b-carousel-slide img-src="public/images/site/portada4.jpg"></b-carousel-slide>
    </b-carousel>


  </section>
</template>

<script>
import Logo from "../animations/Logo.vue";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "app",
  data() {
    return {
      speed: 20
    };
  },
  methods: {
    irLogin() {
      sessionStorage.usuario = "";
      sessionStorage.nombre = "";
      this.$router.push({ path: "/Login" });
    },
    irRegister() {
      this.$router.push({ path: "/Register" });
    }
  },
  computed: {},
  components: {
    Logo: Logo,
    Carousel,
    Slide
  },

  mounted: function() {}
};
</script>

<style>
.ingreso {
  margin: 30px;
  border-radius: 15px !important;
  border: 0px !important;
  width: 250px;
  align-items: center;
  transition: 0.2s;
  z-index: 0;
  cursor: pointer;
}
.ingreso:hover {
  box-shadow: -1px 11px 16px 1px rgba(0, 0, 0, 0.32);
  transition: 0.2s;
  transform: scaleX(1.05) scaleY(1.05);
  z-index: 1;
}

.logo-inicio {
  display: block;
  padding-bottom: 60px;
  max-width: 600px;
  margin: auto;
}

.card-img-top {
  box-shadow: -1px 11px 16px 1px rgba(0, 0, 0, 0.32);
}

@media screen and (max-width: 600px) {
  .logo-inicio {
    width: 80%;
    margin: 15px;
  }

  .card-img-top {
    height: 100%;
  }
}
</style>