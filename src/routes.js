import Home from "./components/Home.vue";
import Conocenos from "./components/Conocenos.vue"
import Ayudar from "./components/Ayudar.vue"

import ApoyoEscolar from "./components/proyectos/ApoyoEscolar.vue"
import ApoyoInstitucional from "./components/proyectos/ApoyoInstitucional.vue"
import Pintura from "./components/proyectos/Pintura.vue"
import Huerta from "./components/proyectos/Huerta.vue"
import Manualidades from "./components/proyectos/Manualidades.vue"
import Costura from "./components/proyectos/Costura.vue"
import Teatro from "./components/proyectos/Teatro.vue"
import Deporte from "./components/proyectos/Deporte.vue"
import Pastoral from "./components/proyectos/Pastoral.vue"








export const routes = [
  { path: "/", component: Home },
  { path: "/Conocenos", component: Conocenos},
  { path: "/Proyectos/Escolar", component: ApoyoEscolar},
  { path: "/Proyectos/Institucional", component: ApoyoInstitucional},
  { path: "/Proyectos/Pintura", component: Pintura},
  { path: "/Proyectos/Huerta", component: Huerta},
  { path: "/Proyectos/Manualidades", component: Manualidades},
  { path: "/Proyectos/Costura", component: Costura},
  { path: "/Proyectos/Teatro", component: Teatro},
  { path: "/Proyectos/Deporte", component: Deporte},
  { path: "/Proyectos/Pastoral", component: Pastoral},




  { path: "/QuieroAyudar", component: Ayudar}


];
