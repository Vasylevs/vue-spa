// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import * as fb from 'firebase'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyCJNP3oVWLikjnhTsnxN8YgoNf3B8fEMd0',
      authDomain: 'itc-add-c722c.firebaseapp.com',
      databaseURL: 'https://itc-add-c722c.firebaseio.com',
      projectId: 'itc-add-c722c',
      storageBucket: 'itc-add-c722c.appspot.com',
      messagingSenderId: '13954491854'
    })

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  }
})
