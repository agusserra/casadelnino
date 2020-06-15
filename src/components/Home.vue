<template>
  <div id="app" class="index-kids">
    <loader></loader>
    <app-inicial></app-inicial>
    <app-historia></app-historia>
    <app-objetivo></app-objetivo>
    <app-vision-mision></app-vision-mision>

  </div>
</template>

<script>
import Loader from "./shared/Loader";
import Inicial from "../components/startPage/Inicial";
import Historia from "../components/startPage/Historia";
import Objetivo from "../components/startPage/Objetivo";
import VisionMision from "../components/startPage/VisionMision";

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
    appHistoria: Historia,
    appInicial: Inicial,
    appObjetivo: Objetivo,
    appVisionMision: VisionMision,
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
#welcome {
  display: table;
  height: 100%;
  width: 100%;
  background-position-y: bottom;
  background-size: cover;
}

.index-kids {
  background: linear-gradient(
    180deg,
    rgb(226, 226, 226) 30%,
    rgba(44, 169, 225, 1) 100%
  );
  background-repeat: repeat;
  background-size: 100%;
  text-align: -webkit-center;
  display: table;
  position: relative;
  width: 100%;
  z-index: -1;
}

.index-other {
  background-image: url(/public/images/site/index-other-background.svg);
  background-repeat: no-repeat;
  background-size: 100%;
  text-align: -webkit-center;
  display: table;
  position: relative;
  width: 100%;
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
</style>
