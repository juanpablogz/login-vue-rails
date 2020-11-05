<template>
  <div class="home">
<div class="wrapper fadeInDown">
  <div id="formContent">
    <!-- Tabs Titles -->
    <!-- Icon -->
    <!-- Login Form -->
    <form v-on:submit.prevent="auth()">
      <input v-model="email" type="text" id="login" class="fadeIn second" name="login" placeholder="login">
      <input v-model="password" type="text" id="password" class="fadeIn third" name="login" placeholder="password">
        <b-button type="submit"  variant="outline-primary">Log In</b-button>
        <b-button @click="get()"  variant="outline-primary">x In</b-button>
    </form>

    <!-- Remind Passowrd -->
    <div id="formFooter">
      <a class="underlineHover" href="#">Forgot Password?</a>
    </div>
  </div>
  {{email}}
  {{password}} <br>
  {{data['access-token']}}  <br>
  {{data['token-type']}}  <br>
  {{data['client']}}  <br>
  {{data['expiry']}}  <br>
  {{data['uid']}}  <br>
  {{request}}
</div>
  </div>
</template>

<script>
import store from './../store'
import axios from 'axios'
import { mapState, mapMutations } from 'vuex'
export default {
  
  name: 'home',
  data () {
    return {
      email: '',
      password: '',
      data: {}
    }
  },
  // mounted () {
  //   axios
  //     .get('http://localhost:3000/books')
  //     .then(response => (console.log(response)))

  // },
  methods: {
    headers () {
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
      console.log(headers)
    },
    auth () {
      axios
      .post('http://localhost:3000/auth/sign_in', {
        email: this.email,
        password: this.password
      }) .then(response => (this.data = response.headers,
      this.$router.push({ path: '/about' })   
      .catch(error => {
        console.info(error.message)
      })
      ),
      console.log('login'))
      },
    get () {
      axios.get('http://localhost:3000/books', {
        headers: this.headers()
      }).then (response => (console.log(response)))
    }
    },
  computed: {
    request () {
      localStorage.setItem('token', JSON.stringify(this.headers()));
      return this.headers()
    }
  }
  }
</script>
<style scoped>

html {
  background-color: #56baed;
}

body {
  font-family: "Poppins", sans-serif;
  height: 100vh;
}

a {
  color: #92badd;
  display:inline-block;
  text-decoration: none;
  font-weight: 400;
}

h2 {
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  display:inline-block;
  margin: 40px 8px 10px 8px; 
  color: #cccccc;
}



/* STRUCTURE */

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column; 
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
}

#formContent {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  padding: 30px;
  width: 90%;
  max-width: 450px;
  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  text-align: center;
}

#formFooter {
  background-color: #f6f6f6;
  border-top: 1px solid #dce8f1;
  padding: 25px;
  text-align: center;
  -webkit-border-radius: 0 0 10px 10px;
  border-radius: 0 0 10px 10px;
}



/* TABS */

h2.inactive {
  color: #cccccc;
}

h2.active {
  color: #0d0d0d;
  border-bottom: 2px solid #5fbae9;
}



/* FORM TYPOGRAPHY*/

input[type=button], input[type=submit], input[type=reset]  {
  background-color: #56baed;
  border: none;
  color: white;
  padding: 15px 80px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  -webkit-box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  margin: 5px 20px 40px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

input[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {
  background-color: #39ace7;
}

input[type=button]:active, input[type=submit]:active, input[type=reset]:active  {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}

input[type=text] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}

input[type=text]:focus {
  background-color: #fff;
  border-bottom: 2px solid #5fbae9;
}

input[type=text]:placeholder {
  color: #cccccc;
}



/* ANIMATIONS */

/* Simple CSS3 Fade-in-down Animation */

.underlineHover:hover {
  color: #0d0d0d;
}

.underlineHover:hover:after{
  width: 100%;
}



/* OTHERS */

*:focus {
    outline: none;
} 

#icon {
  width:60%;
}

</style>