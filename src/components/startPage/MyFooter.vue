<template>
  <section style=" width:100%; padding-top:100px; background:grey">
    <b-card-group deck class="deck-footer">
      <b-card no-body class="overflow-hidden card-footer" style="border:0px; ">
        <router-link to="/QuieroAyudar" style="cursor:pointer; text-align:center" tag="div">
          <b-row no-gutters>
            <b-col md="12">
              <h1>Quiero ayudar</h1>
              <b-icon-heart-fill style="width:80px; height:80px; text-align:center; color: #F4964C"></b-icon-heart-fill>
            </b-col>
          </b-row>
        </router-link>
      </b-card>
      <b-card no-body class="overflow-hidden card-footer" style="border:0px">
        <b-row no-gutters>
          <b-col md="12">
            <b-card-body>
              <h5>Casa del Niño</h5>
              <p>
                <b>Alvear 1306</b>
                <br />(1887) Florencio Varela
                <br />Buenos Aires, Argentina
              </p>
              <p>
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
              <h5>Sede administrativa</h5>

              <p>
                <b>Riobamba 1050 2º</b>
                <br />(1116) Capital Federal
                <br />Argentina
              </p>
              <p>
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
import { mapGetters } from "vuex";

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
    ...mapGetters([])
  },
  methods: {},
  created: function() {
    if (this.userLogged.user) {
      this.cantidadNotificaciones();
    }
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
  .logo-inicio {
    width: 80%;
    margin: 20px;
  }
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