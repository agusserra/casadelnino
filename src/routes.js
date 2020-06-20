import Home from "./components/Home.vue";
import Ayudar from "./components/Ayudar.vue"
import ApoyoEscolar from "./components/actividades/ApoyoEscolar.vue"
import ApoyoInstitucional from "./components/actividades/ApoyoInstitucional.vue"
import Pintura from "./components/actividades/Pintura.vue"
import Huerta from "./components/actividades/Huerta.vue"
import Manualidades from "./components/actividades/Manualidades.vue"
import Costura from "./components/actividades/Costura.vue"
import Teatro from "./components/actividades/Teatro.vue"
import Deporte from "./components/actividades/Deporte.vue"
import Pastoral from "./components/actividades/Pastoral.vue"
import Comision from "./components/conocenos/Comision.vue"
import Historia from "./components/conocenos/Historia.vue"
import Desafios from "./components/conocenos/Desafios.vue"

export const routes = [
  { path: "/", component: Home },
  { path: "/actividades/Escolar", component: ApoyoEscolar},
  { path: "/actividades/Institucional", component: ApoyoInstitucional},
  { path: "/actividades/Pintura", component: Pintura},
  { path: "/actividades/Huerta", component: Huerta},
  { path: "/actividades/Manualidades", component: Manualidades},
  { path: "/actividades/Costura", component: Costura},
  { path: "/actividades/Teatro", component: Teatro},
  { path: "/actividades/Deporte", component: Deporte},
  { path: "/actividades/Pastoral", component: Pastoral},
  { path: "/conocenos/Comision", component: Comision},
  { path: "/conocenos/Historia", component: Historia},
  { path: "/conocenos/Desafios", component: Desafios},
  { path: "/QuieroAyudar", component: Ayudar}

];