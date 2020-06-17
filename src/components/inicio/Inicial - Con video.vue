<template>
  <section style="text-align:center; z-index: -10;">
    <div style="height: 800px; overflow: hidden">
    <div class="videoWrapper">
      <iframe
        class="video"
        src="https://www.youtube.com/embed/q4ohaua_zdE?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&playsinline=1&rel=0&showinfo=0&enablejsapi=1&widgetid=1"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
    </div>
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
.videoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 200px;
  overflow: hidden;
  z-index: -1;
}

.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
  .logo-inicio {
    width: 80%;
    margin: 15px;
  }

  .card-img-top {
    height: 100%;
  }
}
</style>