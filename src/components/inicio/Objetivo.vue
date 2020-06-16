<template>
  <section class="section-style" style="margin-top:30px">
    <h2 style="text-align:center; color: rgba(0, 0, 0, 0.7);">Nuestros <a style="color:#BED546">Objetivos</a></h2>

    <b-card no-body class="overflow-hidden" style="border:0px">
      <b-row no-gutters>
        <b-col md="1">
          <b-icon-house-fill class="icon-obj"></b-icon-house-fill>
        </b-col>
        <b-col md="11">
          <b-card-body>
            <b-card-text>Que la casa sea un hogar con las puertas abiertas que reciba a todos, en especial a los niños más necesitados.</b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>

    <b-card no-body class="overflow-hidden" style="border:0px">
      <b-row no-gutters>
        <b-col md="1">
          <b-icon-star-fill class="icon-obj"></b-icon-star-fill>
        </b-col>
        <b-col md="11">
          <b-card-body>
            <b-card-text>Apoyarlos, acompañarlos y motivarlos a que se conozcan a si mismos, descubran sus dones y talentos en un ambiente de amor, libertad y confianza.</b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>

    <b-card no-body class="overflow-hidden" style="border:0px">
      <b-row no-gutters>
        <b-col md="1">
          <b-icon-gift-fill class="icon-obj"></b-icon-gift-fill>
        </b-col>
        <b-col md="11">
          <b-card-body>
            <b-card-text>Regalarles especial reconocimiento, contención y fortalecimiento de sus capacidades físicas, emocionales, intelectuales y espirituales.</b-card-text>
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
            <b-card-text>Enseñarles a vivir desde un espacio sano y digno que los invita a crecer integralmente con un corazón abierto y dispuesto a los demás.</b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>

    <b-card no-body class="overflow-hidden" style="border:0px">
      <b-row no-gutters>
        <b-col md="1">
          <b-icon-people-fill class="icon-obj" style="width: 80px; height: 80px;"></b-icon-people-fill>
        </b-col>
        <b-col md="11">
          <b-card-body>
            <b-card-text>Dentro de las necesidades actualmente detectadas se encuentra el inminente apoyo en proyectos de promoción humana que puedan cumplir con la pauta de fortalecer la autoestima, la autovaloración y la re significación de nuestros niños a través de trabajo en la inteligencia emocional.</b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </section>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
  methods: {},
  computed: {},
  components: {},

  mounted: function() {}
};
</script>

<style scoped>
.card-body {
  padding-top: 0px;
  padding-bottom: 0px;
}

.icon-obj {
  width: 80px;
  height: 80px;
  color: #2daae1;
  padding: 10px;
}
.card {
  padding-bottom: 20px;
}

@media screen and (max-width: 600px) {
  .logo-inicio {
    width: 80%;
    margin: 20px;
  }


}
</style>>

