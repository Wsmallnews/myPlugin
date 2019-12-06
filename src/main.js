import Vue from 'vue'
import App from './App'
import router from './router'

import Sm from './plugin'

import ViewUI from 'view-design';

// import style
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);

Vue.use(Sm);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
