import Vue from 'vue';
import App from './App.vue';
import router from './Route/index'
new Vue({
  data()
  {
    return{
      cart:[],
    }
  },
  router,
  render: h => h(App),
}).$mount('#app')
