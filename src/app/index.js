import Vue from 'vue';
import App from './components/App.vue';
import VuePaginate from 'vue-paginate';

Vue.use(VuePaginate);

new Vue({
    render: h => h(App)
}).$mount('#app');
