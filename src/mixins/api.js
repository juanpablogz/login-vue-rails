import axios from 'axios'
export default {
  created: function () {
  },
  methods: {
    url () {
       if (window.location.host.includes('localhost')) {
        return process.env.VUE_APP_URL_API
      } if (window.location.host.includes('production')) {
        return process.env.VUE_APP_URL_API_PRODUCTION
      } else {
        return process.env.VUE_APP_URL_API_PRODUCTION
      }
    },

    headersWithouthToken () {
      let headers = {
        'Content-Type': 'application/json'
      }
      return headers
    },

    post (path, data) {
      let res = axios({
        method: 'POST',
        data: data,
        url: this.url() + path,
        headers: this.headers()
      })
      return res
    },
    get (path, data) {
      let res = axios({
        method: 'GET',
        data: data,
        url: this.url() + path,
        headers: this.headers()
      })
      return res
    },
    put (path, data) {
      let res = axios({
        method: 'PUT',
        data: data,
        url: this.url() + path,
        headers: this.headers()
      })
      return res
    },
    delete (path, data) {
      let res = axios({
        method: 'DELETE',
        data: data,
        url: this.url() + path,
        headers: this.headers()
      })
      return res
    },
    postWithoutToken (path, data) {
      let res = axios({
        method: 'POST',
        data: data,
        url: this.url() + path,
        headers: this.headersWithouthToken()
      })
      return res
    },
    getWithoutToken (path, data) {
      let res = axios({
        method: 'GET',
        data: data,
        url: this.url() + path,
        headers: this.headersWithouthToken()
      })
      return res
    },
    putWithoutToken (path, data) {
      let res = axios({
        method: 'PUT',
        data: data,
        url: this.url() + path,
        headers: this.headersWithouthToken()
      })
      return res
    },
    deleteWithoutToken (path, data) {
      let res = axios({
        method: 'PUT',
        data: data,
        url: this.url() + path,
        headers: this.headersWithouthToken()
      })
      return res
    }
  }
}