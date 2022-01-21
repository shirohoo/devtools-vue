import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        visitors: {
            day: 0,
            total: 0,
        }
    },
    mutations: {
        setVisitors(state, visitors) {
            state.visitors.day = visitors.visitorsOfDay;
            state.visitors.total = visitors.visitorsOfTotal;
        }
    },
    actions: {
        getCurrentVisitors({state, commit}, visitors) {
            commit("setVisitors", visitors.data);
        }
    },
    modules: {}
})
