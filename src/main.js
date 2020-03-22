import 'carbon-components/css/carbon-components.css';
import CarbonComponentsVue from '@carbon/vue/src/index';
import Vue from 'vue'
import App from './App.vue'
import VueApollo from "vue-apollo";
import { client } from './vue-apollo';

Vue.config.productionTip = false;
Vue.use(CarbonComponentsVue);
Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: client,
})

new Vue({
  apolloProvider,
  render: h => h(App)
}).$mount('#app');
