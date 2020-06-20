<template>
  <section class="footer">
    <b-card-group deck class="deck-footer margenes">
      
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
              <p style="margin: 0px; font-size: 1em;">
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
              <p style="margin: 0px; font-size: 1em;">
                (+54 11) 4816-3211
                <br />
                <b-icon-envelope-open style="margin-right:5px"></b-icon-envelope-open>info@casadelnino.org.ar
              </p>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>

      <b-card no-body class="overflow-hidden card-footer" style="border:0px; ">
        <router-link
          :to="{
        path:'/QuieroAyudar',
        hash:'#inicio'
        }"
          style="cursor:pointer; text-align:center"
          tag="div"
        >
          <b-row no-gutters>
            <b-col md="12">
              <h2>Quiero ayudar</h2>
              
              <b-icon-heart-fill style="width:80px; height:80px; margin-top: 15px; text-align:center; color: #F4964C"></b-icon-heart-fill>
            </b-col>
          </b-row>
        </router-link>
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
  computed: {}
};
</script>


<style scoped>
.footer {
  width: 100%;
  padding-top: 100px;
  background: rgba(0, 0, 0, 0.479);
  -webkit-box-shadow: -1px 23px 33px -4px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: -1px 23px 33px -4px rgba(0, 0, 0, 0.38);
  box-shadow: -1px 23px 33px -4px rgba(0, 0, 0, 0.38);
}

.deck-footer {
  justify-content: center;
  margin-top: -150px;
  padding-bottom: 10px;
}
.card-body {
  padding: 0px;
}

.card-footer {
<<<<<<< HEAD
  margin-bottom:30px;
  padding-bottom: 0px;
=======
  margin-top: -50px !important;
  margin-bottom:50px;
  padding-bottom: 30px;
>>>>>>> origin/master
  min-width: 280px;
  max-width: 320px;
  border-radius: 2px;
  background: #ffffff;
  -webkit-box-shadow: -1px 23px 33px -4px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: -1px 23px 33px -4px rgba(0, 0, 0, 0.38);
  box-shadow: -1px 23px 33px -4px rgba(0, 0, 0, 0.38);
}

@media screen and (max-width: 600px) {
  .card-footer {
    margin-bottom: 30px;
    padding-top: -110px;
    min-width: 280px;
  }

  .deck-footer {
    margin-top: -150px;
  }
}
</style>