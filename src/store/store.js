import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export const store = new Vuex.Store({

    state: {
        counter: 0,
        categorias:[],
        //pathAPI: "http://localhost:8888/Arkidia/ApiRes/",
        pathAPI: "http://52.55.209.221/ApiRes/",
        //pathAPI: "https://api.arkidia.com/ApiRes/",
        cursoSeleccionado:"",
        categoriaSeleccionada:{},
        challengeSeleccionado:{},
        usuarioSeleccionado:"",
        userLogged:{
            user:"",
            name:"",
            profile:"",
            avatar:"",
            firstRegister:false,
        }
    },
    plugins: [createPersistedState( )],

    getters:{        
        counter: state => {
        return state.counter
        },
        pathAPI: state => {
            return state.pathAPI
        },
        categorias: state => {
            return state.categorias
        },
        cursoSeleccionado: state => {
            state.cursoSeleccionado = sessionStorage.cursoSeleccionado
            return state.cursoSeleccionado
        },
        categoriaSeleccionada: state => {
            if(sessionStorage.categoriaSel){
                state.categoriaSeleccionada.id = sessionStorage.categoriaSel
            }
            return state.categoriaSeleccionada
        },
        challengeSeleccionado: state => {
            if(sessionStorage.cursoChallenge){
                state.challengeSeleccionado.id_curso = sessionStorage.cursoChallenge
                state.challengeSeleccionado.id_challenge = sessionStorage.idChallenge
                state.challengeSeleccionado.usuario = sessionStorage.usuarioChallenge
            }
            return state.challengeSeleccionado
        },
        usuarioSeleccionado: state => {
            state.usuarioSeleccionado = sessionStorage.usuarioSeleccionado
            return state.usuarioSeleccionado
        },
        userLogged: state => {

            return state.userLogged
        }
    },
    actions:{

    }
})