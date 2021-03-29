import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import _ from "lodash"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.prototype._ = _;
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios, axios)

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

// import{
//   Form,
//   FormItem,
//   Input,
//   InputNumber,
//   Button
// }from "element-ui"
// Vue.use(Form).use(FormItem);
// Vue.use(Input).use(InputNumber).use(Button);

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
