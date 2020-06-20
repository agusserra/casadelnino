<template>
  <section class="conocenos"  style="z-index:0">
    <loader></loader>
    <div
      style="display:inline-grid; vertical-align: middle; width:100%;text-align: -webkit-center; "
    >
      <b-carousel class="carousel-top" fade img-width="1024" img-height="480">
        <b-carousel-slide img-src="public/images/site/conocenos1.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/conocenos2.jpg"></b-carousel-slide>
      </b-carousel>
    </div>

    <section class="section-style margenes primera-seccion">
      <div class="titulo-principal">
        <h1>
          Nuestra
          <span class="titulo-verde">Historia</span>
        </h1>
      </div>

      <p>
        La
        <b>Casa del Niño</b> se fundó el 16 de Junio de 1985 como organización sin fines de lucro fruto del deseo de dar respuesta a la realidad de muchos niños del barrio San Nicolás de Florencio Varela, Provincia de Buenos Aires, Argentina. Se vio la necesidad de alejar a los chicos de los peligros de la calle para que encuentren un lugar de cobijamiento y puedan ser acompañados especialmente en un ambiente sano.
      </p>
      <p></p>

      <div class="video-container">
        <iframe
          src="https://www.youtube.com/embed/XpAKLpqpXEs?controls=0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <p></p>
      <div class="row">
        <div class="column">
          <p style="text-align: justify; padding: 5px;">Desde sus inicios hasta hoy, desempeñamos un papel fundamental en la vida de muchos niños y sus propias familias.</p>
          <p style="text-align: justify; padding: 5px;">Con mucho esfuerzo y ayuda, logramos edificar un lugar que les otorga la oportunidad de crecer dignamente con proyección y sentido de vida.</p>

          <p style="text-align: justify; padding: 5px;">
            Con el apoyo del
            <b>Movimiento Apostólico de Schoenstatt</b> y con la generosidad incondicional de mucha gente, de a poco construimos esta casita, sin fines de lucro, que en este momento les da la oportunidad a <b>340 chiquitos entre 3 y 13 años</b> de crecer dignamente, enseñándoles, conteniéndolos, instruyéndolos y dándoles una segura comida diaria.
          </p>
        </div>
        <div class="column">
          <p style="text-align: justify; padding: 5px;">
            La casa se fue agrandando y hemos llegado a cumplir
            <b>35 años</b> remodelándola, dentro de las posibilidades, para que los chicos puedan pasar el tiempo de forma más confortable, gracias a la ayuda de la gente.
          </p>
          <p style="text-align: justify; padding: 5px;">
            También contamos con la bendición de
            <b>Nuestra Mater</b>. Este año pudimos construir con materiales donados, una ermita para que proteja y ayude a todos los que habitan y colaboran con la casa.
          </p>
          <p style="text-align: justify; padding: 5px;">
            Así se fue agrandando nuestra casa con el lema
            <b>“un niño en la Casa es un niño menos en la calle”</b>.
          </p>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import Loader from "../shared/Loader";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "app",
  data() {
    return {};
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
.row {
  display: flex;
}

.column {
  flex: 50%;
  padding: 0px 20px;
}

@media screen and (max-width: 900px) {
  .column {
    flex: 100%;
  }
}

.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 50.25%;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
  height: 0;
  box-shadow: -1px 11px 16px 1px rgba(0, 0, 0, 0.1);
}
.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.principal {
  background: linear-gradient(180deg, #bcd446 40%, #fff 100%);
  background-repeat: repeat;
  background-size: 100%;
  text-align: -webkit-center;
  display: table;
  position: relative;
  width: 100%;
  z-index: -1;
}
</style>