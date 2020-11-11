<template>
  <div>
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
        <Navbar/>
    <h1 class="mt-12">saldo: {{saldo}} </h1>
    <div class="container mx-auto flex justify-center ">
        <apexchart class="widh mt-12" type="pie" width="380" :options="chartOptions" :series="series"></apexchart>
    </div>
  <h1 class="mt-12">ingresos</h1>
    <div class="container mx-auto flex justify-center ">
            <table class="table-auto ">
        <thead>
          <tr>
            <th class="px-4 py-2">Nombre</th>
          </tr>
        </thead>
        <tbody>
          <tr  v-for="(income, index) in incomes" :key="index">
            <td class="border px-4 py-2">{{income.name}}</td>
            <td class="border px-4 py-2">{{income.value}}</td>
            <a @click="sweet()" class="edit"> <i class="fas fa-edit"></i> </a>
            <a @click="delet(index,income.id)" class="color p-2 w-32 h-12"><i class="fas fa-trash-alt"></i></a>
          </tr>
        </tbody>
      </table>
    </div>

  <h1 class="mt-12">gastos</h1>
    <div class="container mx-auto flex justify-center">
    <table class="table-auto ">
      <thead>
        <tr>
          <th class="px-4 py-2">Nombre</th>
        </tr>
      </thead>
      <tbody>
        <tr  v-for="(expense, index) in expenses" :key="index">
          <td class="border px-4 py-2">{{expense.name}}</td>
          <td class="border px-4 py-2">{{expense.value}}</td>
            <a @click="edit(income.id)" class="edit"> <i class="fas fa-edit"></i> </a>
            <a @click="expenseDelete(index, expense.id)" class="color"><i class="fas fa-trash-alt"></i></a>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import api from './../mixins/api.js'
import Navbar from '@/components/Navbar.vue'
import Swal from 'sweetalert2'
export default {
  components: {
    Navbar,
  },
mixins: [api],
  data () {
    return {
      name: {},
      incomes: {},
      expenses: {},
      options: {},
      series: [],
      incomeBalance: [],
      expenseBalance: [],
      expenses: 0,
      newSaldo: 0,
      chartOptions: {
        labels: []
      },
    }
  },
created () {
        this.get('user_incomes').then((result) => {
        this.incomes = result.data
        this.incomes.forEach(element => this.series.push(element.value));
        this.incomes.forEach(element => this.incomeBalance.push(element.value));
        this.incomes.forEach(element => this.chartOptions['labels'].push(element.name));
        console.log(this.incomeBalance)

      })
        this.get('user_expenses').then((result) => {
        this.expenses = result.data
        // console.log(this.expenses)
        var value = []
        this.expenses.forEach(element => this.series.push(element.value));
        this.expenses.forEach(element => this.expenseBalance.push(element.value));
        this.expenses.forEach(element => this.chartOptions['labels'].push(element.name));
         console.log(this.expenseBalance)
        // this.chartOptions['labels'].concat(name)
        // this.chartOptions['labels'].push('xxx', 'juan')
      })
},
methods: {
  edit(id) {
  }, 
  delet (index,id) {
    // console.log(index)
      let user_id = JSON.parse(localStorage.getItem('id'))
      let params  = { 'user_id': user_id }
      // console.log(this.incomes)
      Swal.fire({
        title: 'Estas seguro?',
        text: "Lo eliminaras permanentemente!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            this.delete(`incomes/${id}`, params).then((result) => {
              let data = result.headers
              this.series.splice(index,1)
              this.incomes.splice(index,1)           
              console.log(this.incomes)
              saldo () 
            }),
            'Deleted!',
            'eliminado correctamente.',
            'success'
          )
        }
      })
  },
  expenseDelete (index,id) {
    // console.log(index)
      let user_id = JSON.parse(localStorage.getItem('id'))
      let params  = { 'user_id': user_id }
      // console.log(this.expenses)
      Swal.fire({
        title: 'Estas seguro?',
        text: "Lo eliminaras permanentemente!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            this.delete(`expenses/${id}`, params).then((result) => {
              let data = result.headers
              this.series.splice(index,1)
              this.expenses.splice(index,1)           
              console.log(this.expenses)
            }),
            'Deleted!',
            'eliminado correctamente.',
            'success'
          )
        }
      })
  },
},
computed: {
  saldo () {
    let expense = this.expenseBalance.reduce((a, b) => a + b, 0);
    let income = this.incomeBalance.reduce((a, b) => a + b, 0);
    console.log(income-expense)
    return income-expense
  }
},
watch: {
    saldo(newValue) {
        console.warn(`yes, computed property changed: ${newValue}`);
    },
}
}
</script>

<style>
@media (max-width: 600px) {
}
.color {
  color: red;
}
.color:hover {
  color: black;
}
.edit {
  color: #3185FC;
  padding: 20px;
}
.edit:hover {
  color: black;
}
</style>