import AnalogClock from './analog-clock.vue'
export default {
    install: function (Vue) {
        Vue.component("AnalogClock", AnalogClock);
    }
}
export { AnalogClock }