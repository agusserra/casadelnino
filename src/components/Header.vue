<template>
  <b-navbar toggleable="xl" type="light" class="margenes" id="inicio">
    <router-link to="/" class="navbar-brand">
      <img src="public/images/site/logo.svg" height="70px" alt="Casa del Niño" style="padding:5px" />
    </router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <router-link to="/" tag="b-nav-item">Inicio</router-link>
        <b-nav-item-dropdown text="Conocenos" left>
          <router-link to="/Conocenos/Historia" tag="b-dropdown-item">Nuestra historia</router-link>
          <router-link to="/Conocenos/Desafios" tag="b-dropdown-item">Nuestros desafíos</router-link>
          <router-link to="/Conocenos/Comision" tag="b-dropdown-item">Comisión directiva</router-link>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Actividades" left>
          <router-link to="/Actividades/Escolar" tag="b-dropdown-item">Apoyo escolar</router-link>
          <router-link to="/Actividades/Institucional" tag="b-dropdown-item">Apoyo institucional</router-link>
          <router-link to="/Actividades/Pintura" tag="b-dropdown-item">Taller de pintura</router-link>
          <router-link to="/Actividades/Huerta" tag="b-dropdown-item">Taller de huerta</router-link>
          <router-link to="/Actividades/Manualidades" tag="b-dropdown-item">Taller de manualidades</router-link>
          <router-link to="/Actividades/Costura" tag="b-dropdown-item">Taller de costura</router-link>
          <router-link to="/Actividades/Teatro" tag="b-dropdown-item">Taller de teatro</router-link>
          <router-link to="/Actividades/Deporte" tag="b-dropdown-item">Educación física</router-link>
          <router-link to="/Actividades/Pastoral" tag="b-dropdown-item">Área pastoral</router-link>
        </b-nav-item-dropdown>
        <router-link to="/QuieroAyudar" tag="b-nav-item">
          <a class="quiero-ayudar">Ayudar</a>
        </router-link>
        <div>
          <a href="https://www.facebook.com/CasaDelNinoPJK" class="fa fa-facebook" target="_blank"></a>
          <a
            href="https://www.youtube.com/channel/UCpqTl5pNHDCJIY2XzQlIA_w"
            class="fa fa-youtube-play"
            target="_blank"
          ></a>
          <a
            href="https://www.instagram.com/casadelninopk/"
            class="fa fa-instagram"
            target="_blank"
          ></a>
        </div>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
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
  computed: {},
  methods: {}
};
</script>


<style scoped>
.quiero-ayudar {
  text-decoration: none;
  color: white;
  background-color: #2ca9e1;
  padding: 5px 10px;
  border-radius: 5px;
}

.fa {
  padding: 10px;
  color: rgba(0, 0, 0, 0.7);
  text-decoration: none;
  cursor: pointer;
}

.menu-style {
  background: #ffffff;
}

i {
  cursor: pointer;
}

li {
  padding: 0px;
  line-height: 20px;
  padding-left: 10px;
}

.web-version {
  display: block;
}
.responsive-version {
  display: none;
}

@media screen and (max-width: 768px) {
  .web-version {
    display: none;
  }
  .responsive-version {
    display: block;
  }
}
</style>