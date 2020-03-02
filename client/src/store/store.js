import Vue from 'vue';
import Vuex from 'vuex';
import VueMask from 'v-mask';

Vue.use(Vuex);
Vue.use(VueMask);

import one from './modules/one';

export const store = new Vuex.Store({
    modules: {
        one
    }
});