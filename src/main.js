import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import AllRules from '@vee-validate/rules'
import axios from 'axios'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { configure, defineRule, ErrorMessage, Field, Form } from 'vee-validate'
import { createApp } from 'vue'
import VueAxios from 'vue-axios'
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import App from './App.vue'
import { currency, date } from './methods/filters'
import $httpMessageState from './methods/pushMessageState'
import router from './router'

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})

configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})
// 設定預設語系
setLocale('zh_TW')

const app = createApp(App)
app.config.globalProperties.$filters = {
  date,
  currency
}
app.config.globalProperties.$httpMessageState = $httpMessageState
app.use(VueAxios, axios)
app.use(router)
app.component('LoadIng', Loading)
app.component('FormView', Form)
app.component('FieldView', Field)
app.component('ErrorMessage', ErrorMessage)
app.mount('#app')
