<template>
  <section class="inicio">
    <loader></loader>
    <div
      style="display:inline-grid; vertical-align: middle; width:100%;text-align: -webkit-center; "
    >
      <b-carousel class="carousel-top" fade img-width="1024" img-height="480">
        <b-carousel-slide img-src="public/images/site/ayuda1.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/ayuda2.jpg"></b-carousel-slide>
      </b-carousel>
    </div>

    <section class="section-style margenes primera-seccion">
      <div class="titulo-principal">
        <h1>Quiero</h1>
        <h1 class="titulo-verde">Ayudar</h1>
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

    <section class="section-style margenes" style="margin-top:30px">
      <h2 class="titulo-verde">¿Cómo ayudar?</h2>

      <div class="bloque-ayuda">
        <h2 class="como-ayudar">Padrino</h2>
        <div>
          <b-img src="public/images/site/padrino.jpg" style="width:100%;padding:10px"></b-img>
        </div>

        <div style="padding:20px; text-align:left">
          <p>Te invitamos a apadrinar a un niño. Con tu donación nos acompañás para seguir brindándoles condiciones y oportunidades, mejorando la calidad de vida de estos niños.</p>
          <p>A cada niño que apadrines podremos garantizarle el desayuno, almuerzo y merienda; útiles escolares; apoyo escolar; acompañamiento pedagógico y espiritual; talleres de lecto-escritura.</p>
        </div>

        <div style="width: 100%; margin: auto; text-align: center;">
          <b-button variant="primary" class="button" href="https://donaronline.org/casa-del-nino-padre-jose-kentenich/apadrina-un-nino" target="_blank">
            <h6 class="font-blanco">
              <b>Quiero ayudar</b>
            </h6>
          </b-button>
        </div>
      </div>
      <p style="margin-bottom: 0px;"></p>
      <div class="bloque-ayuda">
        <h2 class="como-ayudar">Voluntario</h2>

        <div >
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
.bloque-ayuda {
  background-color: #eeeeee;
  padding: 10px;
  border-radius: 5px;
}

.button {
  text-decoration: none;
  color: white;
  background-color: #2ca9e1;
  padding: 5px 10px;
  border-radius: 5px;
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


@media screen and (max-width: 600px) {


  .como-ayudar {
    margin-top: 5px;
    margin-left: 0px;
    position: absolute;
    font-size: 18px;
  }
}

</style>
