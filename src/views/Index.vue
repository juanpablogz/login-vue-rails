<template>
  <div>
        <Navbar/>

    <div class="container mx-auto flex justify-center ">
        <apexchart class="mt-12" type="pie" width="380" :options="chartOptions" :series="series"></apexchart>
    </div>
  <h1 class="mt-12">gastos</h1>
    <div class="container mx-auto flex justify-center ">
    <table class="table-auto ">
      <thead>
        <tr>
          <th class="px-4 py-2">Nombre gasto</th>
          <th class="px-4 py-2">Total</th>
          <th class="px-4 py-2">Descripcion</th>
        </tr>
      </thead>
      <tbody>
        <tr  v-for="expense in expenses" :key="expense.id">
          <td class="border px-4 py-2">{{expense.name}}</td>
          <td class="border px-4 py-2">{{expense.value}}</td>
          <td class="border px-4 py-2"> {{expense.description}} </td>
            <button @click="edit(income.id)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-6 mt-2 mb-2">editar</button>
            <button @click="expenseDelete(expense.id)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">eliminar</button>
        </tr>
      </tbody>
    </table>
    </div>
  <h1 class="mt-12">ingresos</h1>
    <div class="container mx-auto flex justify-center ">
            <table class="table-auto ">
        <thead>
          <tr>
            <th class="px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr  v-for="(income, index) in incomes" :key="index">
            <td class="border px-4 py-2">{{income.name}}</td>
            <td class="border px-4 py-2">{{income.id}}</td>
            <td class="border px-4 py-2">{{index}}</td>
            <button @click="sweet()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-6 mt-2 mb-2">editar</button>
            <button @click="delet(index,income.id)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">eliminar</button>
            {{income.id}}
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
      chartOptions: {
        labels: []
      },
    }
  },
created () {
        this.get('user_incomes').then((result) => {
        this.incomes = result.data
        this.incomes.forEach(element => this.series.push(element.value));
        this.incomes.forEach(element => this.chartOptions['labels'].push(element.name));
        // console.log(this.incomes)

      })
        this.get('user_expenses').then((result) => {
        this.expenses = result.data
        // console.log(this.expenses)
        var value = []
        this.expenses.forEach(element => this.series.push(element.value));
        this.expenses.forEach(element => this.chartOptions['labels'].push(element.name));
        // console.log(value)
        // this.chartOptions['labels'].concat(name)
        // this.chartOptions['labels'].push('xxx', 'juan')
      })
},
methods: {
  edit(id) {
  }, 
  delet (index,id) {
    console.log(index)
      let user_id = JSON.parse(localStorage.getItem('id'))
      let params  = { 'user_id': user_id }
      console.log(this.incomes)
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
            }),
            'Deleted!',
            'eliminado correctamente.',
            'success'
          )
        }
      })
  },
  expenseDelete (id) {
    // console.log(id)
      let user_id = JSON.parse(localStorage.getItem('id'))
      let params  = { 'user_id': user_id }
      // console.log(params)
      this.delete(`expenses/${id}`, params).then((result) => {
        let data = result.headers
      })
  },
  sweet () {
Swal.fire({
  title: 'Error!',
  text: 'Do you want to continue',
  icon: 'error',
  confirmButtonText: 'Cool'
})
  }
},
// watch: {
//   incomes: {
//      handler(val){
//      },
//      deep: true
//   }
// }
}
</script>

<style>

</style>