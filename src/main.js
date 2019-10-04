import Vue from 'vue';
import App from './App.vue';
import { Alert, Button } from 'element-ui';

import MsButton from './packages/button/index.js'

Vue.use(Alert);
Vue.use(Button);
Vue.use(MsButton);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
