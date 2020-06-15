<template>
  <section class="section-style" style="margin-top:30px">
    <b-card-group deck>
      <b-card no-body class="overflow-hidden" style="border:0px">
        <b-row no-gutters>
          <b-col md="12">
            <b-card-body>
              <h2>
                Nuestra
                <a style="color:#BED546">Misión</a>
              </h2>
              <b-card-text>Que cada niño, respetado en su individualidad, sea acompañado y motivado a descubrir sus propios talentos en un ambiente de amor, alegría, libertad y confianza creciendo en autonomía y compromiso social.</b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
      <b-card no-body class="overflow-hidden" style="border:0px">
        <b-row no-gutters>
          <b-col md="12">
            <b-card-body>
              <h2>
                Nuestra
                <a style="color:#BED546">Visión</a>
              </h2>
              <b-card-text>Ser un Hogar con las puertas abiertas brindando apoyo integral a los niños y sus familias.</b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </b-card-group>
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
  padding: 0px;
}
.icon-obj {
  width: 80px;
  height: 80px;
  color: #2daae1;
  padding: 10px;
}
.card {
  padding-bottom: 30px;
}

@media screen and (max-width: 600px) {
  .logo-inicio {
    width: 80%;
    margin: 20px;
  }

}
</style>>

