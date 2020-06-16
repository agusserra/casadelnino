import Home from "./components/Home.vue";
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
import Comision from "./components/nosotros/Comision.vue"
import Historia from "./components/nosotros/Historia.vue"
import Desafios from "./components/nosotros/Desafios.vue"

export const routes = [
  { path: "/", component: Home },
  { path: "/proyectos/Escolar", component: ApoyoEscolar},
  { path: "/proyectos/Institucional", component: ApoyoInstitucional},
  { path: "/proyectos/Pintura", component: Pintura},
  { path: "/proyectos/Huerta", component: Huerta},
  { path: "/proyectos/Manualidades", component: Manualidades},
  { path: "/proyectos/Costura", component: Costura},
  { path: "/proyectos/Teatro", component: Teatro},
  { path: "/proyectos/Deporte", component: Deporte},
  { path: "/proyectos/Pastoral", component: Pastoral},
  { path: "/nosotros/Comision", component: Comision},
  { path: "/nosotros/Historia", component: Historia},
  { path: "/nosotros/Desafios", component: Desafios},
  { path: "/QuieroAyudar", component: Ayudar}

];