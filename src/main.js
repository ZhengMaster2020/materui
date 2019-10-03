import Vue from 'vue';
import App from './App.vue';
import { Alert, Button } from 'element-ui';

Vue.use(Alert);
Vue.use(Button);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
