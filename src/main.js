import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Foocpt from './views/foo.vue'
import Barcpt from './views/bar.vue'

Vue.use(VueRouter)

new Vue({
  el: '#app',
  render: h => h(App)
})

const router = new VueRouter({
    history: true
})

router.map({
    '/foo': {
        component: Foocpt
    },
    '/bar': {
        component: Barcpt
    }
})

router.start(App, '#app')