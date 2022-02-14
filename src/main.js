import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { axiosInstance } from './plugins/axios/index';
import './assets/scss/app.scss'
import './assets/css/image.css'
import './assets/css/style.css'



// import VueApexCharts from 'vue-apexcharts'
import VueApexCharts from "vue3-apexcharts";
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';



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



const app = createApp(App)
app.config.globalProperties.axios = axiosInstance

app.use(router)
app.use(createPinia())
app.use(i18n)
app.use(VueApexCharts)

app.component('apexchart', VueApexCharts)
app.component('v-select', vSelect)



app.mount('#app')
