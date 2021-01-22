require("./bootstrap");

window.Vue = require('vue');
import axios from "axios";
import VueAxios from 'vue-axios'
import Vue from "vue";
// import Vuex from "vuex";
// import VueRouter from "vue-router";
// import storeData from "./store";
// import { routes } from "./routes";
import homepage from "./components/homepage/home.vue";
// import { initialize } from "./helper/general";
// import common from "./helper/comon";
// import numeral from 'numeral';
// import numFormat from 'vue-filter-number-format';
// Vue.filter('numFormat', numFormat(numeral));
// const store = new Vuex.Store(storeData);
// initialize(store, router);
// Vue.mixin(common);

import Swal from "sweetalert2";
const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true,
    onOpen: toast => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    }
});
window.Swal = Swal;
window.Toast = Toast;
Vue.use(VueAxios, axios);
// Vue.use(VueRouter);
// const router = new VueRouter({
//     // routes,
//     mode: "history"
// });

const app = new Vue({
    el: "#app",
    // router,
    // store,
    components: {
        'home-page': homepage
    }
});