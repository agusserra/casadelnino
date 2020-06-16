<template>
  <div>
    <app-header></app-header>
    <transition name="slide" mode="out-in">
      <router-view style="padding-bottom:100px"></router-view>
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import { mapGetters } from "vuex";
import Footer from "./components/Footer.vue";

export default {
  data() {
    return {
      usuario: {}
    };
  },
  components: {
    appHeader: Header,
    appFooter: Footer
  },
  computed: {
    
  },
  methods: {
    buscarCategorias() {
      fetch(this.pathAPI + "categorias.php?usuario=aplicacion")
        .then(response => response.json())
        .then(data => {
          this.$store.state.categorias = [];
          data.forEach(element => {
            this.$store.state.categorias.push({
              id: element.id_categoria,
              nombre: element.descripcion,
              imagen: element.imagen_categoria,
              styleObject: { backgroundColor: element.color },
              color: element.color.substr(1, 6),
              video: element.link_video,
              estado: element.estado
            });
          });
        });
    }
  },
};
</script>

<style>
.proyecto {
  background: linear-gradient(180deg, rgb(255, 255, 255) 20%, #f4964c 100%);
  background-repeat: repeat;
  background-size: 100%;
  text-align: -webkit-center;
  display: table;
  position: relative;
  width: 100%;
  z-index: -1;
}

.bienvenida {
  text-align: center;
  width: 100%;
  color: rgba(0, 0, 0, 0.5);
  padding-bottom: 30px;
}

.primera-seccion {
  margin-top: -20% !important;
}

@media screen and (max-width: 800px) {
  .primera-seccion {
    margin-top: -20px !important;
  }
}

.section-style {
  z-index: 1;
  max-width: 900px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 40px;
  margin: auto;
  background: white;
  border-radius: 5px;
  -webkit-box-shadow: -16px -18px 78px -50px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -16px -18px 78px -50px rgba(0, 0, 0, 0.75);
  box-shadow: -16px -18px 78px -50px rgba(0, 0, 0, 0.75);
}

@media screen and (max-width: 600px) {
  .section-style {
    margin-top: -40px;
    margin-left: 20px;
    margin-right: 20px;
    padding: 20px;
  }
}


.categoria {
  margin: 10px;
  border-radius: 15px !important;
  border: 0px !important;
  width: 250px;
  align-items: center;
  transition: 0.2s;
  z-index: 0;
  cursor: pointer;
}
.categoria:hover {
  box-shadow: -1px 11px 16px 1px rgba(0, 0, 0, 0.32);
  transition: 0.2s;
  transform: scaleX(1.05) scaleY(1.05);
  z-index: 1;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Bree Serif", serif;
  padding: 15px;
}

h1,
h2 {
  font-variant: small-caps;
  margin-bottom: 0px;
}

h1 {
  font-size: 40px;
}

h3 {
  padding: 10px;
  margin-bottom: 0px;
}

h5 {
  color:#F4964C;
}

h6 {
  padding: 10px;
  margin-bottom: 0px;
}

.quote {
  color:#2DAAE1;
  font-size: 30px;
  font-family: "Bree Serif", serif;
  padding: 15px;
  font-variant: normal;
  text-align: center;
  margin-bottom: 8px;
}

p,
li {
  font-family: "Source Sans Pro", sans-serif;
  line-height: 30px;
  padding: 10px;
  font-size: 19px;
  text-align: left;
}

ul {
  text-align: left;
}

.alert-danger {
  color: #721c24c7;
  background-color: #ff00171a;
  border-radius: 10px;
}

.boton-primario {
  margin: 5px;
  padding: 5px 20px;
  border-radius: 20px !important;
  border: 0px !important;
  align-items: center;
  transition: 0.2s;
  cursor: pointer;
  font-size: 20px;
  background-color: #9546af;
  font-family: "Patua One", cursive;
  color: white;
}
.boton-primario:hover {
  box-shadow: -1px 11px 16px 1px rgba(0, 0, 0, 0.32);
  transition: 0.2s;
  transform: scaleX(1.05) scaleY(1.05);
  z-index: 1;
  background-color: #dd3260;
  color: white;
}

.boton-secundario {
  margin: 5px;
  padding: 5px 20px;
  border-radius: 20px !important;
  border: 0px !important;
  align-items: center;
  transition: 0.2s;
  cursor: pointer;
  font-size: 20px;
  background-color: #757575;
  font-family: "Patua One", cursive;
  color: white;
}
.boton-secundario:hover {
  box-shadow: -1px 11px 16px 1px rgba(0, 0, 0, 0.32);
  transition: 0.2s;
  transform: scaleX(1.05) scaleY(1.05);
  z-index: 1;
  background-color: #616161;
  color: white;
}

.loader {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
}
.loader.hidden {
  animation: fadeOut 1.5s;
  animation-fill-mode: forwards;
  width: 100%;
  height: 100%;
  transition: height 1s;
}

@keyframes fadeOut {
  100% {
    opacity: 0;
    visibility: hidden;
  }
}

.slideAnim-enter {
  opacity: 0;
}

.slideAnim-enter-active {
  animation: 0.1s ease-out forwards;
  transition: opacity 0.1s;
}

.slideAnim-leave-active {
  animation: 0.1s ease-out forwards;
  transition: opacity 0.1s;
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 400ms ease-out forwards;
}
.slide-leave-active {
  animation: slide-out 400ms ease-out forwards;
}

@keyframes slide-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.modal-arkidia {
  text-align: center;
  padding: 10px;
  margin-top: 30px;
  width: 600px;
  min-height: 300px;
}
@media screen and (max-width: 600px) {
  h1 {
    font-size: 25px;
  }
  h3 {
    font-size: 15px;
  }

  p,
  li {
    font-size: 15px;
  }
}
</style>