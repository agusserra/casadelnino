<template>
  <div id="app" class="inicio" >
    <loader></loader>
    <app-bienvenidos class="margen-superior" ></app-bienvenidos>
    <app-mision-vision></app-mision-vision>
    <app-objetivos></app-objetivos>
    <app-inicial></app-inicial>

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
.margen-superior{
  margin-top:400px
}

@media screen and (max-width: 600px) {
  .margen-superior{
  margin-top:180px
}
}
</style>