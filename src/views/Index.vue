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
        </tr>
      </tbody>
    </table>
    </div>
  <h1 class="mt-12">ingresos</h1>
    <div class="container mx-auto flex justify-center ">
      <table class="table-auto ">
        <thead>
          <tr>
            <th class="px-4 py-2">Nombre ingreso</th>
            <th class="px-4 py-2">Total</th>
            <th class="px-4 py-2">Descripcion</th>
          </tr>
        </thead>
        <tbody>
          <tr  v-for="income in incomes" :key="income.id">
            <td class="border px-4 py-2">{{income.name}}</td>
            <td class="border px-4 py-2">{{income.value}}</td>
            <td class="border px-4 py-2">{{income.description}}</td>
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

      })
        this.get('user_expenses').then((result) => {
        this.expenses = result.data
        // console.log(this.expenses)
        var value = []
        this.expenses.forEach(element => this.series.push(element.value));
        this.expenses.forEach(element => this.chartOptions['labels'].push(element.name));
        console.log(value)
        // this.chartOptions['labels'].concat(name)
        // this.chartOptions['labels'].push('xxx', 'juan')
      })
},
methods: {
}
}
</script>

<style>

</style>