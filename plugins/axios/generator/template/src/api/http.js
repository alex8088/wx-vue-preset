import instance from './axios'

export default {
  get(url, params, headers) {
    let options = {
      ...params ? { params } : {},
      ...headers ? { headers } : {}
    }

    return instance.get(url, options)
  },
  post(url, params, headers) {
    let options = {
      ...headers ? { headers } : {}
    }

    return instance.post(url, params || {}, options)
  }
}