import axios from 'axios'
export default {
  created: function () {
    // coment
  },
  methods: {
    url () {
      if (window.location.host.includes('staging') || window.location.host.includes('lab')) {
        return process.env.VUE_APP_URL_API_STAGING
      } else if (window.location.host.includes('localhost')) {
        return process.env.VUE_APP_URL_API
      } if (window.location.host.includes('production')) {
        return process.env.VUE_APP_URL_API_PRODUCTION
      } else {
        return process.env.VUE_APP_URL_API_PRODUCTION
      }
    },
    headers () {
      var data = JSON.parse(localStorage.getItem('token'))
      console.log(data['access-token'])
      const access = data['access-token']
      const token_typ = data['access-token']
      const clien = data['client']
      const exp = data['expiry']
      const ui = data['uid']
      let headers = {
        'access-token': access,
        'token-type': token_typ,
        'client': clien,
        'expiry': exp,
        'uid': ui
      }
      return headers
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
        url:this.url()  + path,
        headers: this.headers()
      })
      return res
    },
    get (path, data) {
      let res = axios({
        method: 'GET',
        data: data,
        url:this.url() + path,
        headers: this.headers()
      })
      return res
    },
    put (path, data) {
      let res = axios({
        method: 'PUT',
        data: data,
        url:this.url()  + path,
        headers: this.headers()
      })
      return res
    },
    delete (path, data) {
      let res = axios({
        method: 'DELETE',
        data: data,
        url: this.url() + path,
        headers:this.headers()
      })
      return res
    },
    postWithoutToken (path, data) {
      let res = axios({
        method: 'POST',
        data: data,
        url:this.url() + path,
        headers: this.headersWithouthToken()
      })
      return res
    },
    getWithoutToken (path, data) {
      let res = axios({
        method: 'GET',
        data: data,
        url:this.url() + path,
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