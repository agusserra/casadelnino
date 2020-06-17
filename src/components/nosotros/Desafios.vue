<template>
  <section class="principal" style="z-index:0">
    <loader></loader>
    <div
      style="display:inline-grid; vertical-align: middle; width:100%;text-align: -webkit-center; "
    >
      <b-carousel
        class="carousel-top"
        fade
        img-width="1024"
        img-height="480"
      >
        <b-carousel-slide img-src="public/images/site/conocenos1.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="public/images/site/conocenos2.jpg"></b-carousel-slide>
      </b-carousel>
    </div>

    <section class="section-style primera-seccion">
      <div class="titulo-principal">
        <h1>Desafíos actuales</h1>
      </div>

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
.apoyo {
  min-width: 300px;
}
.principal {
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
}
</style>