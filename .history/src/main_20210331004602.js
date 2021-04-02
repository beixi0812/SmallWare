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

// VueLazyload
// import VueLazyload from 'vue-lazyload'
// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   loading: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2229520286,909887626&fm=26&gp=0.jpg',
//   attempt: 1
// })
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

// or with options 也可以直接在这里设置参数
Vue.use(VueLazyload, {
  preLoad: 1.3,   //预加载的宽高比
  // error: 'dist/error.png',//图片加载失败时使用的图片源
  loading: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2229520286,909887626&fm=26&gp=0.jpg',//图片加载的路径
  attempt: 1//尝试加载次数
})
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
