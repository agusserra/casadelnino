<template>
  <section style="text-align:center">
    <div class="mensaje-bienvenida">
      <h1 class="sub-titulo">Bienvenidos a</h1>
      <h1 class="titulo">La casa del niño</h1>
    </div>

    <!-- The video -->
    <video autoplay muted loop id="myVideo" style="width:100%; position: absolute; top: 0; z-index:-2; filter: drop-shadow(-1px 11px 16px rgb(0,0,0,0.3))  brightness(0.5)">
      <source src="public/video/background.mp4" type="video/mp4" />
    </video>
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
  methods: {},
  computed: {},
  components: {
    Logo: Logo,
    Carousel,
    Slide
  },

  created: function() {}
};
</script>

<style>
.mensaje-bienvenida {
  top:0;
  margin-top: 100px;
  margin-left:10%;
  padding: 20px;
  position: absolute;
  text-align: center;
  color: white;
  width: 80%;
  z-index: 1;
}
.sub-titulo {
  color: white;
  font-size: 30px;
}
.titulo {
  color: white;
  font-size: 70px;
  font-weight: bold;
}

#myVideo {
  right: 0;
  bottom: 0;
  min-width: 100%;
  /*min-height: 100%;*/
  filter:brightness(0.5)
}

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
  .mensaje-bienvenida{
    margin-top:30px
  }
  .logo-inicio {
    width: 80%;
    margin: 15px;
  }

  .card-img-top {
    height: 100%;
  }

  .sub-titulo {
    color: white;
    font-size: 15px;
  }
  .titulo {
    color: white;
    font-size: 30px;
    font-weight: bold;
  }
}
</style>