import Vue from 'vue'
import axios from './axios'
import svc from './services'

const install = function (Vue) {
  Vue.$axios = axios
  window.$axios = axios
  Object.defineProperties(Vue.prototype, {
    $axios: {
      get() {
        return axios
      }
    },
    $http: {
      get() {
        return axios
      }
    },
    $api: {
      get() {
        return svc
      }
    }
  })
}

Vue.use({ install })