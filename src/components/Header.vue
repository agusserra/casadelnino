<template>
  <b-navbar toggleable="lg" type="light" style="max-width:900px; margin:auto">
    <router-link to="/" class="navbar-brand">
      <img src="public/images/site/logo.svg" height="60px" alt="Casa del Niño" style="padding:5px" />
    </router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <router-link to="/" tag="b-nav-item">Inicio</router-link>
        <b-nav-item-dropdown text="Conocenos" right>
          <router-link to="/Nosotros/Comision" tag="b-nav-item">Comisión directiva</router-link>
          <router-link to="/Nosotros/Historia" tag="b-nav-item">Nuestra historia</router-link>
          <router-link to="/Nosotros/Desafios" tag="b-nav-item">Nuestros desafíos</router-link>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Actividades" right>
          <router-link to="/Proyectos/Escolar" tag="b-nav-item">Apoyo escolar</router-link>
          <router-link to="/Proyectos/Institucional" tag="b-nav-item">Apoyo institucional</router-link>
          <router-link to="/Proyectos/Pintura" tag="b-nav-item">Taller de pintura</router-link>
          <router-link to="/Proyectos/Huerta" tag="b-nav-item">Taller de huerta</router-link>
          <router-link to="/Proyectos/Manualidades" tag="b-nav-item">Taller de manualidades</router-link>
          <router-link to="/Proyectos/Costura" tag="b-nav-item">Taller de costura</router-link>
          <router-link to="/Proyectos/Teatro" tag="b-nav-item">Taller de teatro</router-link>
          <router-link to="/Proyectos/Deporte" tag="b-nav-item">Educación física</router-link>
          <router-link to="/Proyectos/Pastoral" tag="b-nav-item">Área pastoral</router-link>
        </b-nav-item-dropdown>
        <router-link to="/QuieroAyudar" tag="b-nav-item">
          <a class="quiero-ayudar">Quiero ayudar</a>
        </router-link>
<a href="#" class="fa fa-facebook"></a>
<a href="#" class="fa fa-youtube-play"></a>
<a href="#" class="fa fa-instagram"></a>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
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
  computed: {},
  methods: {}
};
</script>


<style scoped>
.quiero-ayudar{
  text-decoration: none;
    color: white;
    background-color:#2ca9e1;
    padding:5px 10px;
    border-radius: 5px;

}

.fa{
  padding:10px;
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