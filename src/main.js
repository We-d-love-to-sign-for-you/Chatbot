import 'carbon-components/css/carbon-components.css';
import CarbonComponentsVue from '@carbon/vue/src/index';
import Vue from 'vue'
import App from './App.vue'
import { createProvider } from './vue-apollo'

Vue.config.productionTip = false;
Vue.use(CarbonComponentsVue);

new Vue({
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app');
