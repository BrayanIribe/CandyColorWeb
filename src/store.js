import Vue from 'vue';
import Vuex from 'vuex'


Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        showSidebar: false,
    },
    mutations: {
        showSidebar(state) {
            state.showSidebar = true;
        },
        hideSidebar(state) {
            state.showSidebar = false;
        }
    }
});

export default store;