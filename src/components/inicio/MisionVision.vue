<template>
  <section class="section-style margenes" style="margin-top:30px">
    <b-card-group deck>
      <b-card no-body class="overflow-hidden" style="border:0px">
        <b-row no-gutters>
          <b-col md="12">
            <b-card-body>
              <div class="titulo-principal" style="padding-bottom: 10px;">
                <h1>Nuestra</h1>
                <h1 class="titulo-verde">Misión</h1>
              </div>
              <b-card-text
                style="text-align: center;"
              >Que cada niño, respetado en su individualidad, sea acompañado y motivado a descubrir sus propios talentos en un ambiente de amor, alegría, libertad y confianza creciendo en autonomía y compromiso social.</b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
      <b-card no-body class="overflow-hidden" style="border:0px">
        <b-row no-gutters>
          <b-col md="12">
            <b-card-body>
              <div class="titulo-principal" style="padding-bottom: 10px;">
                <h1>Nuestra</h1>
                <h1 class="titulo-verde">Visión</h1>
              </div>
              <b-card-text
                style="text-align: center;"
              >Ser un hogar con las puertas abiertas brindando apoyo integral a los niños y sus familias.</b-card-text>
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

.card {
  padding-bottom: 10px;
}
</style>>