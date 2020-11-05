<template>
  <div>
    <h1>hello world</h1>
    <button @click="getx"> xxxx</button>
    {{this.tokenSave}}
    <b-button @click="get()"  variant="outline-primary">x In</b-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      email: '',
      password: '',
      data: {},
      tokenSave: {}
    }
  },
created () {
  // localStorage.setItem('token', JSON.stringify(this.headers()));
},
methods: {
    headers () {
      const access = this.tokenSave['access-token']
      const token_typ = this.tokenSave['access-token']
      const clien = this.tokenSave['client']
      const exp = this.tokenSave['expiry']
      const ui = this.tokenSave['uid']
      let headers = {
          'access-token': access,
          'token-type': token_typ,
          'client': clien,
          'expiry': exp,
          'uid': ui
      }
      return headers
      console.log(headers)
    },
  getx () {
  this.tokenSave = localStorage.getItem('token');
  },
    get () {
      axios.get('http://localhost:3000/books', {
        headers: this.tokenSave,
        mode: 'cors',
      }).then (response => (console.log(response)))
    }
}
}
</script>

<style>

</style>