import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { axiosInstance } from './plugins/axios/index';
import './assets/scss/app.scss'
import './assets/css/image.css'
import './assets/css/style.css'


import  vfmPlugin  from 'vue-final-modal'

// import VueApexCharts from 'vue-apexcharts'
import VueApexCharts from "vue3-apexcharts";

import vSelect from "vue-select";

import "vue-select/dist/vue-select.css";

import uz from './plugins/i18n/locale/uz'
import ru from './plugins/i18n/locale/ru'
import oz from './plugins/i18n/locale/oz'

const i18n = createI18n({
  locale: 'ru',
  messages: {
    uz,
    ru,
    oz
  }
})


import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'


import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";


const app = createApp(App)
app.config.globalProperties.axios = axiosInstance

app.use(router)
app.use(createPinia())
app.use(i18n)
app.use(VueApexCharts)

app.component("v-select", vSelect);
app.component("v-pagination", VPagination);
app.use(VPagination);


app.use(vfmPlugin({
  key: '$vfm',
  componentName: 'VueFinalModal',
  dynamicContainerName: 'ModalsContainer'
}))

app.use(PerfectScrollbar)

app.mount('#app')
