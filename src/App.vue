<template>
  <div style="height:0">
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
  methods: {},
  created: function() {
    window.onload = function() {
      lax.setup(); // init

      const updateLax = () => {
        lax.update(window.scrollY);
        window.requestAnimationFrame(updateLax);
      };

      window.requestAnimationFrame(updateLax);
    };
  }
};
</script>

<style>
b {
  font-weight: 600;
}

.inicio {
  background: linear-gradient(
    180deg,
    rgba(44, 169, 225) 40%,
    rgba(44, 168, 225, 0.192) 100%
  );
  background-repeat: repeat;
  background-size: 100%;
  text-align: -webkit-center;
  display: table;
  position: relative;
  width: 100%;
  z-index: -1;
}

.proyecto {
  background: linear-gradient(180deg, #f78731 40%, #f787316b 100%);
  background-repeat: repeat;
  background-size: 100%;
  text-align: -webkit-center;
  display: table;
  position: relative;
  width: 100%;
  z-index: -1;
}

.conocenos {
  background: linear-gradient(180deg, #bcd446 40%, #bcd44671 100%);
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
  font-size: 50px;
  font-weight: 500;
  text-align: center;
  margin-top: -5px;
}

.font-verde {
  color: #bcd446;
}

.font-celeste {
  color: #2daae1;
}

.font-blanco {
  color: #fff;
}

.icon-obj {
  width: 80px;
  height: 80px;
  color: #2daae1;
  padding: 10px;
}

.less-gutter {
  margin-bottom: 0px;
}

.icon-check {
  width: 25px;
  height: 25px;
  color: #2daae1;
}

.check-text {
  margin-bottom: 0px;
  padding-bottom: 0px;
}

.vertical-center {
  display: flex;
  align-items: center;
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

.margenes {
  margin-left: 25%;
  margin-right: 25%;
}

.section-style {
  z-index: 1;
  padding: 40px 80px;
  background: white;
  border-radius: 5px;
  -webkit-box-shadow: -16px -18px 78px -50px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -16px -18px 78px -50px rgba(0, 0, 0, 0.75);
  box-shadow: -16px -18px 78px -50px rgba(0, 0, 0, 0.75);
}

@media screen and (max-width: 1800px) {
  .margenes {
    margin-left: 15%;
    margin-right: 15%;
  }
}

@media screen and (max-width: 1300px) {
  .margenes {
    margin-left: 10%;
    margin-right: 10%;
  }

  .primera-seccion {
    margin-top: -20px !important;
  }
}

@media screen and (max-width: 600px) {
  .margenes {
    margin-left: 20px;
    margin-right: 20px;
  }

  .section-style {
    margin-top: -40px;
    padding: 20px 40px;
  }

  .titulo-verde {
    font-size: 30px;
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
  font-size: 37px;
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
  text-align: center;
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

p,
li {
  font-family: "Raleway", sans-serif;

  padding: 10px;
  font-size: 18px;
  text-align: left;
}

p {
  color: #888888;
}

li {
  font-weight: bold;
  line-height: 30px;
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
  animation: slide-in 100ms ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 00ms ease-out forwards;
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

h1 {
  width: 100%;
  color: #494949;
  -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
  clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
  transform: translateY(-50px);
  opacity: 0;
  animation-name: titleAnimation;
  animation-timing-function: ease;
  animation-duration: 3s;
}

h1 {
  animation-delay: 0.6s;
  animation-fill-mode: forwards;
}
h1:first-child {
  animation-delay: 0.7s;
}
h1:last-child {
  animation-delay: 0.5s;
}

@keyframes titleAnimation {
  0% {
    transform: translateY(-50px);
    opacity: 0;
    -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
    clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
  }
  20% {
    transform: translateY(0);
    opacity: 1;
    -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
    clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
  }
  80% {
    transform: translateY(0);
    opacity: 1;
    -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
    clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
    -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
    clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
  }
}
</style>