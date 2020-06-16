<template>
  <section class="conocenos" style="z-index:0">
    <loader></loader>
    <div
      style="display:inline-grid; vertical-align: middle; width:100%;text-align: -webkit-center; "
    >
      <b-carousel
        id="carousel-fade"
        style="filter: brightness(0.5); text-shadow: 0px 0px 2px #000; z-index:-1;box-shadow: -1px 11px 16px 1px rgba(0, 0, 0, 0.32);"
        fade
        img-width="1024"
        img-height="480"
      >
        <b-carousel-slide img-src="public/images/site/conocenos1.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/conocenos2.jpg"></b-carousel-slide>
      </b-carousel>
    </div>

    <section class="section-style primera-seccion">
      <div class="bienvenida">
        <h1 style="margin:0; padding:0">Nuestra <span style="color: #BED546">Historia</span></h1>
      </div>

      <p>La <b>Casa del Niño Padre José Kentenich</b> se fundó el 16 de Junio de 1985 como organización sin fines de lucro fruto del deseo de dar respuesta a la realidad de muchos niños del barrio San Nicolás de Florencio Varela, Provincia de Buenos Aires, Argentina. Se vio la necesidad de alejar a los chicos de los peligros de la calle para que encuentren un lugar de cobijamiento y puedan ser acompañados especialmente en un ambiente sano.</p>

      <p>Desde sus inicios hasta hoy, animada y apoyada por el <b>Movimiento Apostólico de Schoenstatt</b>, la Casa del Niño desempeña un papel fundamental en la vida de muchos niños y sus propias familias.</p>

      <p>De a poco, con mucho esfuerzo y ayuda, se logró edificar un lugar que les otorga la oportunidad de crecer dignamente con proyección y sentido de vida.</p>

      <p>Hoy se brinda espacio y apoyo a más de <b>300 chicos</b> de entre <b>3 y 13 años</b> de edad quienes provienen de familias con carencias. La realidad actual nos desafía a un trabajo de acompañamiento muy profundo, sostenido y transversal. Dicho trabajo requiere de recursos y profesionales intervinientes para poder asistir adecuadamente a los chicos. Niños que cargan con mochilas muy pesadas conforme su edad.</p>
      <p class="quote" style="font-size: 18px; margin-bottom: 0px; padding-bottom: 0px;">“…Una de las características comunes de estas familias cuyos niños asisten a la Casa del Niño es que la madre es sostén de hogar, en general los hijos tienen distintos padres que quedan periféricos, están ausentes y en ocasiones son desconocidos. Las familias son numerosas, muchas de las madres tienen poca capacidad de planificación por lo que les cuesta organizar la crianza, están desbordadas. En ocasiones abandonan temporalmente a los chicos dejándolos a cargo de abuelas, tíos o hermanos mayores… Muchos de los chicos viven en un ambiente de inestabilidad emocional: madres y padres que aparecen y desaparecen, maltrato, abusos perpetrados por familiares o personas cercanas. Son chicos que no son “mirados” en su ámbito familiar. La casa del Niño representa para ellos un refugio, un lugar donde no hay violencia, reciben afecto, son tenidos en cuenta. Un lugar donde pueden descansar de la responsabilidad de cuidar a un hermanito, donde son protegidos…”</p><p style="color:rgba(0, 0, 0, 0.5); text-align: right;">Lic. Susana López Moreno, psicóloga voluntaria</p>
      <p>La <b>Casa del Niño</b> tiene como misión apoyar a los chicos en todos los aspectos. Brindarles alimentación, abrigo y apoyo de modo que cada pequeño se vislumbre como un ser único, especial, capaz de transformar su propia realidad, la de su familia, su barrio, su escuela, su club, su propio ambiente proyectando de este modo una vida plena de sentido.</p>
      <p>Con el apoyo del Movimiento Apostólico de Schoenstatt, de a poco, con mucho esfuerzo y con la generosidad incondicional de mucha gente, se construyó esta casita, sin fines de lucro, que en este momento les da la oportunidad a 340 chiquitos entre 3 y 13 años de ayudarlos a crecer dignamente, enseñándoles, conteniéndolos, instruyéndolos, dándoles una segura comida diaria.</p>
      <p>La casa se fue agrandando. Hemos llegado a cumplir <b>25 años</b> remodelándola, dentro de las posibilidades, para que los chicos puedan pasar el tiempo de forma más confortable, gracias a la ayuda de la gente.</p>
      <p>También contamos con la bendición de <b>Nuestra Mater</b>. Este año pudimos construir con materiales donados, una ermita para que proteja y ayude a todos los que habitan y colaboran con la casa.</p>
      <p>Así se fue agrandando nuestra casa con el lema <b>“un niño en la Casa es un niño menos en la calle”</b>.</p>
    </section>
  </section>
</template>

<script>
import Loader from "../shared/Loader";

import { Carousel, Slide } from "vue-carousel";

import { mapGetters } from "vuex";

export default {
  name: "app",
  data() {
    return {
      classIndex: ""
    };
  },
  methods: {},
  computed: {
    
  },
  components: {
    Loader: Loader,
    Carousel,
    Slide
  },
  mounted: function(){
    const loader=document.querySelector(".loader");
    loader.className+= " hidden";
  }
};
</script>

<style scope>
.imagen-conocenos {
  width: 100%;
  filter: grayscale(0.8);
  border-radius: 5px;
}

.imagen-conocenos:hover {
  filter: grayscale(0.1);
  transition: filter 0.5s;
}

.cargo {
  padding: 0px 0px 0px 5px;
  margin: 0;
  font-size: 15px;
  color:rgba(0, 0, 0, 0.5);
}

.nombre {
  padding: 10px 0px 5px 5px;
  margin: 0;
  font-size: 18px;
  color:rgba(0, 0, 0, 1);
}

.miembros {
  padding: 10px;
  margin: 10px;
  min-width: 180px;
  max-width: 180px;
  width: 200px !important;
  border: 0px;
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
.profile-background {
  background-image: url(/public/images/site/profile-background.svg);
  background-repeat: no-repeat;
  background-size: 100%;
  text-align: -webkit-center;
  display: table;
  position: relative;
  width: 100%;
}

@media screen and (max-width: 600px) {
  .apoyo {
    min-width: 200px;
  }
}
</style>
