<template>
    <div class="no-habilitado">
      <div style="text-align:center">
      <img
      src="public/images/site/no-finished.svg"
      alt="Error"
      style="width:300px;"
    />

      <h1>Ocurrió un error</h1>
      <h3>{{errorMensaje}}</h3>

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
  props:['errorMensaje'],
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
  background-size: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>