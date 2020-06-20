<template>
  <section class="inicio" style="z-index:0">
    <loader></loader>
    <div
      style="display:inline-grid; vertical-align: middle; width:100%;text-align: -webkit-center; "
    >
      <b-carousel class="carousel-top" fade img-width="1024" img-height="480">
        <b-carousel-slide img-src="public/images/site/ayuda1.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/ayuda2.jpg"></b-carousel-slide>
      </b-carousel>
    </div>

    <section class="section-style margenes  primera-seccion">
      <div class="titulo-principal">
        <h1>
          Quiero
          <span class="titulo-verde">ayudar</span>
        </h1>
      </div>
      <h3 style="text-align:left;">¿Qué significa apoyar a la Casa del Niño?</h3>
      <p>Apoyar a La Casa del Niño significa apostar por un hogar que reciba a todos los niños que lo necesitan. Queremos lograr que los niños se encuentren en un lugar sano alejados de los peligros de las calles, brindándoles las oportunidades y herramientas necesarias para su futuro.</p>
      <h3 style="text-align:left;">¿Cómo hacemos para lograrlo?</h3>
      <p>Para todos los proyectos, de cualquier índole, además de una visión y buena voluntad, se necesita dinero para afrontar los costos operativos.</p>
      <h3 style="text-align:left;">¿Qué estamos buscando?</h3>
      <p>Buscamos personas que se comprometan a aportar una suma todos los meses para lograr que haya más niños en nuestro hogar y menos niños en las calles.</p>

      <p
        style="margin-bottom: 0px; padding-bottom: 0px;"
      >Te invitamos a colaborar con nuestra organización.</p>
      <p>Súmate a hacer comunidad.</p>
      <h4>¡Gracias por tu ayuda!</h4>
    </section>

    <section class="section-style margenes " style="margin-top:30px">
      <h2 class="titulo-verde">¿Cómo ayudar?</h2>

      <div class="bloque-ayuda">
        <h2 class="como-ayudar">Padrino</h2>
        <div style="min-width:250px">
          <b-img src="public/images/site/padrino.jpg" style="width:100%;padding:10px"></b-img>
        </div>

        <div style="padding:20px; text-align:left">
          <p>Te invitamos a apadrinar a un niño. Con tu donación nos acompañás para seguir brindándoles condiciones y oportunidades, mejorando la calidad de vida de estos niños.</p>
          <p>A cada niño que apadrines podremos garantizarle el desayuno, almuerzo y merienda; útiles escolares; apoyo escolar; acompañamiento pedagógico y espiritual; talleres de lecto-escritura.</p>
        </div>

        <div style="width: 100%; margin: auto; text-align: center;">
          <b-button variant="primary" class="button">
            <h6 class="font-blanco">
              <b>Quiero ayudar</b>
            </h6>
          </b-button>
        </div>
      </div>
      <p style="margin-bottom: 0px;"></p>
      <div class="bloque-ayuda">
        <h2 class="como-ayudar">Voluntario</h2>

        <div style="min-width:250px">
          <b-img src="public/images/site/voluntario.jpg" style="width:100%;padding:10px"></b-img>
        </div>
        <div style="padding:20px; text-align:left">
          <p>Comentanos tu nombre, qué te gustaría hacer y nos pondremos en contacto con vos a la brevedad.</p>
        </div>

        <div style="padding:10px">
          <b-form-input v-model="nombre" placeholder="Tu nombre"></b-form-input>
        </div>

        <div style="padding:10px">
          <b-form-input type="email" v-model="mail" placeholder="Tu e-mail"></b-form-input>
        </div>

        <div style="padding:10px">
          <b-form-textarea v-model="mensaje" placeholder="Mensaje"></b-form-textarea>
        </div>
        <div style="width: 100%; margin: auto; text-align: center;">
          <b-button variant="primary" class="button">
            <h6 class="font-blanco">
              <b>Enviar</b>
            </h6>
          </b-button>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import Loader from "./shared/Loader";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "app",
  data() {
    return {
      classIndex: "",
      nombre: "",
      mail: "",
      mensaje: ""
    };
  },
  methods: {},
  computed: {},
  components: {
    Loader: Loader,
    Carousel,
    Slide
  },
  mounted: function() {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
  }
};
</script>

<style scope>
.button {
  text-decoration: none;
  color: white;
  background-color: #2ca9e1;
  padding: 5px 10px;
  border-radius: 5px;
}

.bloque-ayuda {
  background: #eeeeee;
  border-radius: 5px;
  margin: 15px;
  padding: 15px;
}
.como-ayudar {
  background: rgba(0, 0, 0, 0.685);
  color: white;
  margin: 10px;
  font-size: 25px;
  padding: 5px 10px;
  position: absolute;
  font-variant: normal;
}
.detalle-como-ayudar {
  background: white;
  width: 70%;
  margin: 20px;
}
.imagen-conocenos {
  width: 100%;
  filter: grayscale(0.8);
  border-radius: 5px;
}

.imagen-conocenos:hover {
  filter: grayscale(0.1);
  transition: filter 0.5s;
}

.apoyo {
  min-width: 300px;
}
.conocenos {
  background: linear-gradient(180deg, rgb(226, 226, 226) 30%, #bcd446 100%);
  background-repeat: repeat;
  background-size: 100%;
  text-align: -webkit-center;
  display: table;
  position: relative;
  width: 100%;
  z-index: -1;
}
.icon-obj {
  width: 80px;
  height: 80px;
  color: #2daae1;
  padding: 10px;
}

@media screen and (max-width: 600px) {
  .apoyo {
    min-width: 200px;
  }

  .como-ayudar {
    margin-top: 5px;
    margin-left: 0px;
    position: absolute;
    font-size: 18px;
  }
}

.flip-box {
  background-color: transparent;
  width: 600px;
  height: 400px;
  border: 0px;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-box-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-box:hover .flip-box-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-box-front,
.flip-box-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-box-front {
  color: black;
}

/* Style the back side */
.flip-box-back {
  padding: 30px;
  background-color: rgb(109, 109, 109);
  color: white;
  transform: rotateY(180deg);
}
</style>
