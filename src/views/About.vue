<template>
  <div>
    <h1>hello world</h1>
    <button @click="getx"> xxxx</button>
    {{this.tokenSave}}
    <button @click="getObjects"  variant="outline-primary">x In</button>
  </div>
</template>

<script>
import axios from 'axios'
import api from './../mixins/api.js'
export default {
mixins: [api],
  data () {
    return {
      email: '',
      password: '',
      data: {},
      tokenSave: {}
    }
  },
created () {
},
methods: {
  getx () {
    this.$router.push('index')
  },
    getObjects () {
      var data = JSON.parse(localStorage.getItem('token'))
      let params  = { 'uid': data.uid }
      console.log(data.uid)
      this.get('user_books', params).then((result) => {
      console.log(result)
      })
    },
}
}
</script>

<style>

</style>