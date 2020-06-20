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
import Footer from "./components/Footer.vue";

export default {
  data() {
    return {};
  },
  components: {
    appHeader: Header,
    appFooter: Footer
  },
  computed: {},
  methods: {}
};
</script>

<style>
b {
  font-weight: 600;
}
.proyecto {
  background: linear-gradient(180deg, #f4964c 40%, #ffffff 100%);
  background-repeat: repeat;
  background-size: 100%;
  text-align: -webkit-center;
  display: table;
  position: relative;
  width: 100%;
  z-index: -1;
}

.titulo-principal {
  text-align: center;
  width: 100%;
  color: rgba(0, 0, 0, 0.5);
  padding-bottom: 30px;
}

.titulo-verde {
  color: #bcd446;
  font-size: 55px;
  text-align: center;
}

.font-verde {
  color: #bcd446;
}

.font-blanco {
  color: #fff;
}

.carousel-top {
  filter: brightness(0.5);
  text-shadow: 0px 0px 2px #000;
  z-index: -1;
  box-shadow: -1px 11px 16px 1px rgba(0, 0, 0, 0.32);
}

.primera-seccion {
  margin-top: -20% !important;
  z-index: 100;
}

.home-video {
  margin-top: -40% !important;
  z-index: 100;
}

.section-style {
  z-index: 1;
  margin-left: 20%;
  margin-right: 20%;
  padding: 40px 80px;
  background: white;
  border-radius: 5px;
  -webkit-box-shadow: -16px -18px 78px -50px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -16px -18px 78px -50px rgba(0, 0, 0, 0.75);
  box-shadow: -16px -18px 78px -50px rgba(0, 0, 0, 0.75);
}

@media screen and (max-width: 1800px) {
  .section-style {
    margin-left: 15%;
    margin-right: 15%;
  }
}

@media screen and (max-width: 1300px) {
  .primera-seccion {
    margin-top: -20px !important;
  }

  .section-style {
    max-width: 90%;
    margin-left: 10%;
    margin-right: 10%;
  }
}

@media screen and (max-width: 600px) {
  .section-style {
    margin-top: -40px;
    margin-left: 20px;
    margin-right: 20px;
    padding: 20px 40px;
  }

  .titulo-verde {
    font-size: 35px;
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Raleway", sans-serif;
  color: #54595f;
  padding: 15px;
}

h1,
h2 {
  margin-bottom: 0px;
  color: #666666;
}

h1 {
  font-size: 40px;
  margin: 0;
  padding: 0;
}

h3 {
  padding: 10px;
  margin-bottom: 0px;
}

h5 {
  color: #f4964c;
  font-weight: bold;
}

h6 {
  padding: 10px;
  margin-bottom: 0px;
}

.quote {
  color: #2daae1;
  font-size: 30px;
  font-family: "Raleway", sans-serif;
  padding: 0px;
  font-variant: normal;
  text-align: center;
  margin-bottom: 16px;
}

p {
  font-family: "Raleway", sans-serif;
  color: #888888;
}

p,
li {
  font-family: "Raleway", sans-serif;
  line-height: 30px;
  padding: 10px;
  font-size: 18px;
  text-align: left;
}

ul {
  text-align: left;
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