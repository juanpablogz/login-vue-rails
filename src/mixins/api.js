import axios from 'axios'
export default {
  created: function () {
  },
  methods: {
    headers () {
       data = localStorage.getItem('token')
      const access = this.data['access-token']
      const token_typ = this.data['access-token']
      const clien = this.data['client']
      const exp = this.data['expiry']
      const ui = this.data['uid']
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
        url: 'http://localhost:3000/' + path,
        headers: this.headers()
      })
      return res
    },
    get (path, data) {
      let res = axios({
        method: 'GET',
        data: data,
        url: 'http://localhost:3000/'+ path,
        headers: this.headers()
      })
      return res
    },
    put (path, data) {
      let res = axios({
        method: 'PUT',
        data: data,
        url:'http://localhost:3000/' + path,
        headers: this.headers()
      })
      return res
    },
    delete (path, data) {
      let res = axios({
        method: 'DELETE',
        data: data,
        url: 'http://localhost:3000/'+ path,
        headers: this.headers()
      })
      return res
    },
    postWithoutToken (path, data) {
      let res = axios({
        method: 'POST',
        data: data,
        url: 'http://localhost:3000/' + path,
        headers: this.headersWithouthToken()
      })
      return res
    },
    getWithoutToken (path, data) {
      let res = axios({
        method: 'GET',
        data: data,
        url: 'http://localhost:3000/'+ path,
        headers: this.headersWithouthToken()
      })
      return res
    },
    putWithoutToken (path, data) {
      let res = axios({
        method: 'PUT',
        data: data,
        url: 'http://localhost:3000/' + path,
        headers: this.headersWithouthToken()
      })
      return res
    },
    deleteWithoutToken (path, data) {
      let res = axios({
        method: 'PUT',
        data: data,
        url: 'http://localhost:3000/'+ path,
        headers: this.headersWithouthToken()
      })
      return res
    }
  }
}