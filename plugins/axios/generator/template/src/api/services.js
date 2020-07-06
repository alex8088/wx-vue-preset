import http from './http'

const URLS = {
  DATA_API: '/api/getData'
}

export default {
  getData(param) {
    return http.get(URLS.DATA_API, param)
  }
}