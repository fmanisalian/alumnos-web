import Vue from 'vue';
import App from './components/App.vue';
import BotonDeBusqueda from './components/BotonDeBusqueda.vue';
import EntradaDeBusqueda from './components/EntradaDeBusqueda.vue';
import VuePaginate from 'vue-paginate';

Vue.use(VuePaginate);

new Vue({
    render: h => h(App)
}).$mount('#app');
