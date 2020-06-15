<template>
    <div class="no-habilitado">
      <div style="text-align:center">
      <img
      src="public/images/site/stop.svg"
      id="challenges"
      alt="Inmersivo"
      style="width:400px;"
    />

      <h2>Contenido restringido a</h2>
      <h1>{{perfil}}</h1>

      </div>
    </div>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters(["userLogged"])
  },
  props:['perfil'],
  methods: {

  },
};
</script>

<style scoped>
.no-habilitado{
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(/public/images/site/stop-background.svg);
    background-repeat: repeat-x;
  background-size: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>