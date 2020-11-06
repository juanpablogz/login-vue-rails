<template>
  <div>
    <h1>hello world</h1>
    <button @click="getx"> xxxx</button>
    {{this.tokenSave}}
    <b-button @click="getObjects"  variant="outline-primary">x In</b-button>
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
  this.tokenSave = localStorage.getItem('token');
  },
    getObjects () {
      this.get('books', {}).then((result) => {
        console.log(result)
      })
    },
}
}
</script>

<style>

</style>