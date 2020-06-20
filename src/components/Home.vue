<template>
  <div id="app" class="inicio">
    <loader></loader>
    <app-inicial></app-inicial>
    <app-bienvenidos></app-bienvenidos>
    <app-mision-vision></app-mision-vision>
    <app-objetivos></app-objetivos>
  </div>
</template>

<script>
import Loader from "./shared/Loader";
import Inicial from "../components/inicio/Inicial";
import Bienvenidos from "../components/inicio/Bienvenidos";
import MisionVision from "../components/inicio/MisionVision";
import Objetivos from "../components/inicio/Objetivos";

export default {
  name: "app",
  data() {
    return {};
  },
  methods: {},
  computed: {},
  components: {
    Loader: Loader,
    appInicial: Inicial,
    appBienvenidos: Bienvenidos,
    appMisionVision: MisionVision,
    appObjetivos: Objetivos
  },
  mounted: function() {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
  }
};
</script>

<style>
.inicio {
  background: linear-gradient(
    180deg,
    rgb(255, 255, 255) 20%,
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
</style>