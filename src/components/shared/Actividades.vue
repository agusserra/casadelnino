<template>
  <section class="section-style" style="margin-top:30px">
    <h2>Conocé nuestras actividades</h2>

    <b-card-group deck style="justify-content:center">
      <router-link
        :to="{
        path:'/actividades/Escolar',
        hash:'#inicio'
        }"
        tag="div"
        class="overflow-hidden actividades"
      >
        <h5 class="titulo-actividad">Apoyo escolar</h5>
        <b-img src="public/images/site/escolar.jpg" class="imagen-actividades"></b-img>
      </router-link>

      <router-link
        :to="{
        path:'/actividades/Institucional',
        hash:'#inicio'
        }"
        tag="div"
        class="overflow-hidden actividades"
      >
        <h5 class="titulo-actividad">Apoyo institucional</h5>
        <b-img src="public/images/site/institucional.jpg" class="imagen-actividades"></b-img>
      </router-link>

      <router-link
        :to="{
        path:'/actividades/Pintura',
        hash:'#inicio'
        }"
        tag="div"
        class="overflow-hidden actividades"
      >
        <h5 class="titulo-actividad">Taller de pintura</h5>
        <b-img src="public/images/site/pintura.jpg" class="imagen-actividades"></b-img>
      </router-link>

      <router-link
        :to="{
        path:'/actividades/Huerta',
        hash:'#inicio'
        }"
        tag="div"
        class="overflow-hidden actividades"
      >
        <h5 class="titulo-actividad">Taller de Huerta</h5>
        <b-img src="public/images/site/huerta.jpg" class="imagen-actividades"></b-img>
      </router-link>

      <router-link
        :to="{
        path:'/actividades/Manualidades',
        hash:'#inicio'
        }"
        tag="div"
        class="overflow-hidden actividades"
      >
        <h5 class="titulo-actividad">Manualidades</h5>
        <b-img src="public/images/site/manualidades.jpg" class="imagen-actividades"></b-img>
      </router-link>

      <router-link
        :to="{
        path:'/actividades/Costura',
        hash:'#inicio'
        }"
        tag="div"
        class="overflow-hidden actividades"
      >
        <h5 class="titulo-actividad">Taller de Costura</h5>
        <b-img src="public/images/site/costura.jpg" class="imagen-actividades"></b-img>
      </router-link>

      <router-link
        :to="{
        path:'/actividades/Teatro',
        hash:'#inicio'
        }"
        tag="div"
        class="overflow-hidden actividades"
      >
        <h5 class="titulo-actividad">Taller de Teatro</h5>
        <b-img src="public/images/site/teatro.jpg" class="imagen-actividades"></b-img>
      </router-link>

      <router-link
        :to="{
        path:'/actividades/Deporte',
        hash:'#inicio'
        }"
        tag="div"
        class="overflow-hidden actividades"
      >
        <h5 class="titulo-actividad">Deportes</h5>
        <b-img src="public/images/site/deporte.jpg" class="imagen-actividades"></b-img>
      </router-link>

      <router-link
        :to="{
        path:'/actividades/Pastoral',
        hash:'#inicio'
        }"
        tag="div"
        class="overflow-hidden actividades"
      >
        <h5 class="titulo-actividad">Área pastoral</h5>
        <b-img src="public/images/site/pastoral.jpg" class="imagen-actividades"></b-img>
      </router-link>
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
.titulo-actividad {
  padding: 0px 10px;
}

.actividades {
  min-width: 250px;
  max-width: 250px;
  margin: 10px 20px;
  padding:10px;
  border: 0;
}
.imagen-actividades {
  width: 500px;
  margin-left: -150px;
  filter: grayscale(0.9);
  cursor: pointer;
}

.imagen-actividades:hover {
  filter: grayscale(0.1);
  transition: filter 0.5s;
}
</style>>