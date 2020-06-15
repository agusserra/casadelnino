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
        <h1 style=" margin:0; padding:0">Conocenos</h1>
      </div>
      <div style="text-aling:center">
        <b-card-group style="place-content:center">
          <b-card no-body class="overflow-hidden miembros">
            <b-card-text style=" padding:0px">
              <b-img src="https://picsum.photos/id/1001/300/300" class="imagen-conocenos"></b-img>
              <h6 class="cargo">Presidente</h6>
              <h5 class="nombre">Padre Guillermo I. del Valle Carmona</h5>
            </b-card-text>
          </b-card>
          <b-card no-body class="overflow-hidden miembros">
            <b-card-text style=" padding:0px">
              <b-img src="https://picsum.photos/id/1005/300/300" class="imagen-conocenos"></b-img>
              <h6 class="cargo">Directora</h6>
              <h5 class="nombre">Mercedes Verón</h5>
            </b-card-text>
          </b-card>
          <b-card no-body class="overflow-hidden miembros">
            <b-card-text style=" padding:0px">
              <b-img src="https://picsum.photos/id/203/300/300" class="imagen-conocenos"></b-img>
              <h6 class="cargo">Comisión directiva</h6>
              <h5 class="nombre">Ricardo del Pino</h5>
            </b-card-text>
          </b-card>
          <b-card no-body class="overflow-hidden miembros">
            <b-card-text style=" padding:0px">
              <b-img src="https://picsum.photos/id/177/300/300" class="imagen-conocenos"></b-img>
              <h6 class="cargo">Comisión directiva</h6>
              <h5 class="nombre">Monique Torralva</h5>
            </b-card-text>
          </b-card>
          <b-card no-body class="overflow-hidden miembros">
            <b-card-text style=" padding:0px">
              <b-img src="https://picsum.photos/id/3/300/300" class="imagen-conocenos"></b-img>
              <h6 class="cargo">Comisión directiva</h6>
              <h5 class="nombre">Gabriela Sarquis</h5>
            </b-card-text>
          </b-card>
          <b-card no-body class="overflow-hidden miembros">
            <b-card-text style=" padding:0px">
              <b-img src="https://picsum.photos/id/338/300/300" class="imagen-conocenos"></b-img>
              <h6 class="cargo">Comisión directiva</h6>
              <h5 class="nombre">María Dominguez Crivelli</h5>
            </b-card-text>
          </b-card>
          <b-card no-body class="overflow-hidden miembros">
            <b-card-text style=" padding:0px">
              <b-img src="https://picsum.photos/id/342/300/300" class="imagen-conocenos"></b-img>
              <h6 class="cargo">Comisión directiva</h6>
              <h5 class="nombre">Padre Manuel López Naón</h5>
            </b-card-text>
          </b-card>
        </b-card-group>
      </div>
    </section>

    <section class="section-style" style="margin-top:30px">
      <h2 style="text-align:center; color:#BED546">Nuestra historia</h2>

      <p>La Casa del niño Padre José Kentenich se fundó el 16 de Junio de 1985 como organización sin fines de lucro fruto del deseo de dar respuesta a la realidad de muchos niños del barrio San Nicolás de Florencio Varela, Provincia de Buenos Aires, Argentina. Se vio la necesidad de alejar a los chicos de los peligros de la calle para que encuentren un lugar de cobijamiento y puedan ser acompañados especialmente en un ambiente sano.</p>

      <p>Desde sus inicios hasta hoy, animada y apoyada por el Movimiento Apostólico de Schoenstatt, la Casa del Niño desempeña un papel fundamental en la vida de muchos niños y sus propias familias.</p>

      <p>De a poco, con mucho esfuerzo y ayuda, se logro edificar un lugar que les otorgara la oportunidad de crecer dignamente con proyección y sentido de vida.</p>
      <p>Hoy se brinda espacio y apoyo a más de 300 chicos de entre 3 y 13 años de edad quienes provienen de familias con carencias. La realidad actual nos desafía a un trabajo de acompañamiento muy profundo, sostenido y transversal. Dicho trabajo requiere de recursos y profesionales intervinientes para poder asistir adecuadamente a los chicos. Niños que cargan con mochilas muy pesadas conforme su edad.</p>
      <p>“…Una de las características comunes de estas familias cuyos niños asisten a la Casa del Niño es que la madre es sostén de hogar, en general los hijos tienen distintos padres que quedan periféricos, están ausentes y en ocasiones son desconocidos. Las familias son numerosas, muchas de las madres tienen poca capacidad de planificación por lo que les cuesta organizar la crianza, están desbordadas. En ocasiones abandonan temporalmente a los chicos dejándolos a cargo de abuelas, tíos o hermanos mayores… Muchos de los chicos viven en un ambiente de inestabilidad emocional: madres y padres que aparecen y desaparecen, maltrato, abusos perpetrados por familiares o personas cercanas. Son chicos que no son “mirados” en su ámbito familiar. La casa del Niño representa para ellos un refugio, un lugar donde no hay violencia, reciben afecto, son tenidos en cuenta. Un lugar donde pueden descansar de la responsabilidad de cuidar a un hermanito, donde son protegidos…” (Psicóloga voluntaria de Casa del Niño Padre José Kentenich/Licenciada Susana López Moreno, Matricula Nº 52726/ Informe realizado en visita a la Casa de fecha 15 de Mayo de 2019)</p>
      <p>La Casa del Niño tiene como misión apoyar a los chicos en todos los aspectos. Brindarles alimentación, abrigo y apoyo acompañando a que cada pequeño se vislumbre como un ser único, especial, capaz de transformar su propia realidad, la de su familia, su barrio, su escuela, su club, su propio ambiente proyectando de este modo una vida plena de sentido.</p>
      <p>Con el apoyo del Movimiento Apostólico de Schoenstatt, de a poco, con mucho esfuerzo y con la generosidad incondicional de mucha gente, se construyó esta casita, sin fines de lucro, que en este momento les da la oportunidad a 340 chiquitos entre 3 y 13 años de ayudarlos a crecer dignamente, enseñándoles, conteniéndolos, instruyéndolos, dándoles una segura comida diaria.</p>
      <p>La Casa se fue agrandando. Hemos llegado a cumplir 25 años remodelándola, dentro de las posibilidades, para que los chicos puedan pasar el tiempo más confortable, gracias a la ayuda de la gente.</p>
      <p>También contamos con la bendición de Nuestra Mater. Este año pudimos construir con materiales donados, una ermita para que proteja y ayude a todos los que habitan y colaboran con la Casa.</p>
      <p>Así se fue agrandando nuestra casa con el lema “un niño en la Casa es un niño menos en la calle.”</p>
    </section>

    <section class="section-style" style="margin-top:30px">
      <h2 style="text-align:center; color:#BED546">Desafíos actuales</h2>

      <b-card no-body class="overflow-hidden" style="border:0px">
        <b-row no-gutters>
          <b-col md="1">
            <b-icon-house-door-fill class="icon-obj"></b-icon-house-door-fill>
          </b-col>
          <b-col md="11">
            <b-card-body>
              <b-card-text>Lograr el sostenimiento económico de la institución.</b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>

      <b-card no-body class="overflow-hidden" style="border:0px">
        <b-row no-gutters>
          <b-col md="1">
            <b-icon-people-fill class="icon-obj"></b-icon-people-fill>
          </b-col>
          <b-col md="11">
            <b-card-body>
              <b-card-text>Reforzar y afianzar el vínculo de los grupos familiares.</b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>

      <b-card no-body class="overflow-hidden" style="border:0px">
        <b-row no-gutters>
          <b-col md="1">
            <b-icon-person-plus-fill class="icon-obj"></b-icon-person-plus-fill>
          </b-col>
          <b-col md="11">
            <b-card-body>
              <b-card-text>Generar alianzas sustentables mediante proyectos de integración y articulación con otros espacios de red institucional.</b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>

      <b-card no-body class="overflow-hidden" style="border:0px">
        <b-row no-gutters>
          <b-col md="1">
            <b-icon-heart-fill class="icon-obj"></b-icon-heart-fill>
          </b-col>
          <b-col md="11">
            <b-card-body>
              <b-card-text>Acompañar en el trabajo sistemático, profundo e interdisciplinario para lograr atender la problemática actual de las familias del barrio.</b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </section>

    <section class="section-style" style="margin-top:30px">
      <b-card-group deck>
        <b-card no-body class="overflow-hidden" style="border:0px">
          <b-row no-gutters>
            <b-col>
              <b-card-body>
                <h2>
                  <a style="color:#BED546">
                    <b-icon-clock-fill style="padding:5px"></b-icon-clock-fill>Horarios
                  </a>
                </h2>
                <b-card-text>
                  <p>
                    Funciona como contraturno de la escuela en dos momentos del día:
                    <br />Turno mañana: de 8 a 12 h
                    <br />Turno tarde: de 13 a 17 h
                  </p>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
        <b-card no-body class="overflow-hidden" style="border:0px">
          <b-row no-gutters>
            <b-col>
              <b-card-body>
                <h2>
                  <a style="color:#BED546">
                    <b-icon-file-earmark-check style="padding:5px"></b-icon-file-earmark-check>Requisitos
                  </a>
                </h2>
                <b-card-text>
                  <p>
                    Tener entre 3 y 13 años de edad.
                    <br />Estar escolarizados.
                    <br />Presentar el Plan de Vacunación.
                  </p>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
        <b-card no-body class="overflow-hidden" style="border:0px">
          <b-row no-gutters>
            <b-col>
              <b-card-body>
                <h2>
                  <a style="color:#BED546">Cómo trabajamos</a>
                </h2>
                <b-card-text>
                  <p>La casa alberga a casi 300 niños de Florencio Varela y alrededores los cuales se dividen en cuatro grupos, cada uno con su orientador por turno:</p>

                  <b-icon-check style="color:#2daae1; width:20px; height:20px"></b-icon-check>Grupo JARDÍN de 3 a 5 años
                  <br />
                  <b-icon-check style="color:#2daae1; width:20px; height:20px"></b-icon-check>Grupo MEDIANITOS de 6 y 7 años
                  <br />
                  <b-icon-check style="color:#2daae1; width:20px; height:20px"></b-icon-check>Grupo MEDIANOS 8 y 9 años
                  <br />
                  <b-icon-check style="color:#2daae1; width:20px; height:20px"></b-icon-check>Grupo GRANDES 10 A 13 años
                  <br />
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-card-group>
    </section>

    <section class="section-style" style="margin-top:30px">
      <h2 style="text-align:center; color:#BED546">Brindamos las 3 "A"</h2>

      <b-card-group deck>
        <b-card no-body class="overflow-hidden apoyo" style="border:0px">
          <b-row no-gutters>
            <b-col>
              <b-card-body>
                <h3 style="color:#2daae1; margin:0">Alimentación</h3>
                <b-card-text>
                  <p>Turno de mañana: desayuno, refuerzo de media mañana y almuerzo.</p>
                  <p>Turno de tarde: almuerzo, refuerzo de media tarde y merienda.</p>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
        <b-card no-body class="overflow-hidden apoyo" style="border:0px">
          <b-row no-gutters>
            <b-col>
              <b-card-body>
                <h3 style="color:#2daae1; margin:0">Amor</h3>

                <b-card-text>
                  <p>Elementos de abrigo e higiene.</p>
                  <p>Acompañamiento y seguimiento mediante un equipo de salud compuesto por una psicóloga, una médica nutricionista y médico pediatra.</p>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
        <b-card no-body class="overflow-hidden apoyo" style="border:0px">
          <b-row no-gutters>
            <b-col>
              <b-card-body>
                <h3 style="color:#2daae1; margin:0">Apoyo Integral</h3>

                <b-card-text>
                  Además del
                  <b style="color:#F4964C;">apoyo escolar</b> que les brindamos a los chicos, también damos
                  <b
                    style="color:#F4964C;"
                  >apoyo espiritual y humano</b> a través de las diversas ocupaciones. Nos interesamos especialmente en que todo niño que asiste a la Casa vaya asumiendo valores, actitudes y comportamientos que le sirvan en el futuro para desempeñarse como una persona de bien.
                  <br />Los valores fundamentales en que se fundamenta todo el trabajo pedagógico son:
                  <br />
                  <p>
                    <b-icon-check style="color:#2daae1; width:30px; height:30px; margin-right:20px"></b-icon-check>La libertad entendida como decisión por un bien y superación de las esclavitudes que conllevan las diversas adicciones.
                  </p>
                  <p>
                    <b-icon-check style="color:#2daae1; width:30px; height:30px; margin-right:20px"></b-icon-check>La solidaridad, que abre el corazón de los niños para los demás compañeros y luego para las personas con las cuales comparte y compartirá su vida.
                  </p>
                  <p>
                    <b-icon-check style="color:#2daae1; width:30px; height:30px; margin-right:20px"></b-icon-check>La integración de la personalidad donde las diversas facultades se van ordenando a su finalidad, la inteligencia a la verdad, la voluntad al bien y los afectos al verdadero y auténtico amor.
                  </p>
                  <p>
                    <b-icon-check style="color:#2daae1; width:30px; height:30px; margin-right:20px"></b-icon-check>La creatividad para ir superando los comportamientos resignados y estancos que impiden crecer, a pesar de las dificultades adversas del ambiente.
                  </p>
                  <p>
                    <b-icon-check style="color:#2daae1; width:30px; height:30px; margin-right:20px"></b-icon-check>La espiritualidad como el aprecio a la dimensión espiritual y religiosa, respetando los diversos credos y creencias que tienen los hijos, según las determinaciones de sus padres.
                  </p>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-card-group>
    </section>
  </section>
</template>

<script>
import Loader from "./shared/Loader";

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
    ...mapGetters(["categorias", "userLogged"])
  },
  components: {
    Loader: Loader,
    Carousel,
    Slide
  },

  mounted: function() {
    if (this.userLogged.profile == "HIJO") {
      this.classIndex = "index-kids";
    }
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
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
  padding: 10px 0px 10px 5px;
  margin: 0;
  font-size: 15px;
}

.nombre {
  padding: 0px 0px 0px 5px;
  margin: 0;
  font-size: 18px;
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
