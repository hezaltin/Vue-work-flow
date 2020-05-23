import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        counter:0
    },
    getters:{
        doubleIncrement: state =>{
            return state.counter * 4
        },
        counterClicks: state=>{
            return `${state.counter} CLicks`
        }
    }
})


