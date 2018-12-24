import Vue from 'vue'
import App from './app'
import AnalogClock from '../src'

Vue.use(AnalogClock);
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
