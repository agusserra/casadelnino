<template>
  <section style=" width:100%; padding-top:100px; background:grey">
    <b-card-group deck class="deck-footer">
      <b-card no-body class="overflow-hidden card-footer" style="border:0px; ">
        <router-link         :to="{
        path:'/QuieroAyudar',
        hash:'#inicio'
        }" style="cursor:pointer; text-align:center" tag="div">
          <b-row no-gutters>
            <b-col md="12">
              <h1>Quiero ayudar</h1>
              <p></p>
              <b-icon-heart-fill style="width:80px; height:80px; text-align:center; color: #F4964C"></b-icon-heart-fill>
            </b-col>

          </b-row>
        </router-link>

      </b-card>
      <b-card no-body class="overflow-hidden card-footer" style="border:0px">
        <b-row no-gutters>
          <b-col md="12">
            <b-card-body>
              <h5 style="padding-left: 10px; padding-bottom: 0px; margin: 0px;">Casa del Niño</h5>
              <p style="margin: 0px;">
                <b>Alvear 1306</b>
                <br />Florencio Varela (1887)
                <br />Buenos Aires, Argentina
              </p>
              <p style="margin: 0px; font-size: 18px;">
                (+54 11) 4255-6776
                <br />(+54 911) 4086-6932
              </p>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
      <b-card no-body class="overflow-hidden card-footer" style="border:0px">
        <b-row no-gutters>
          <b-col md="12">
            <b-card-body>
              <h5 style="padding-left: 10px; padding-bottom: 0px; margin: 0px;">Sede administrativa</h5>

              <p style="margin: 0px;">
                <b>Riobamba 1050</b>
                <br />Capital Federal (1116)
                <br />Argentina
              </p>
              <p style="margin: 0px; font-size: 18px;">
                (+54 11) 4816-3211
                <br />
                <b-icon-envelope-open style="margin-right:5px"></b-icon-envelope-open>info@casadelnino.org.ar
              </p>
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
    return {
      nombre: "",
      notificaciones: [],
      notificacionesVistas: []
    };
  },
  props: {
    usuario: ""
  },
  computed: {
    
  }
};
</script>


<style scoped>
.deck-footer {
  margin: auto;
  margin-top: -100px;
  max-width: 900px;
  padding-bottom: 10px;
}
.card-body {
  padding: 0px;
}

.card-footer {
  margin-top: -50px !important;
  padding-bottom: 0px;
  max-width: 270px !important;
  min-width: 270px;
  border-radius: 2px;
  background: #ffffff;
  -webkit-box-shadow: -1px 23px 33px -4px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: -1px 23px 33px -4px rgba(0, 0, 0, 0.38);
  box-shadow: -1px 23px 33px -4px rgba(0, 0, 0, 0.38);
}

@media screen and (max-width: 600px) {
  .card-footer {
    margin: auto;
    margin-bottom: 80px;
    padding-top: -110px;
    max-width: 200px;
    min-width: 200px;
  }
  .deck-footer {
    margin: auto;
    margin-top: -150px;
    max-width: 900px;
  }
}
</style>