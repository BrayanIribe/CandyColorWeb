import Vue from 'vue';
import Vuex from 'vuex'


Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        showSidebar: false,
        isLoading: false,
        user: null,
    },
    mutations: {
        showSidebar(state) {
            state.showSidebar = true;
        },
        hideSidebar(state) {
            state.showSidebar = false;
        },
        setLoading(state, value) {
            state.isLoading = value === true;
        },
        setUser(state, value) {
            state.user = value;
        }
    }
});

export default store;