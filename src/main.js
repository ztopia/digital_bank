// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import '../node_modules/mint-ui/lib/style.min.css'
// import 'mint-ui/lib/style.min.css'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts 

Vue.use(Mint);


// import mui from 'bower_components/dcloud-mui/dist/css/mui.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
