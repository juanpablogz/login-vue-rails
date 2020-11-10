      for (let i = 0; i < this.incomes.length; i++) {
      console.warn(this.incomes[i].id)
      console.log(id)
      let ii = i
      if (this.incomes[i].id === id) {
        console.log(this.incomes[i])
        delete this.incomes[i]
      }
      }


          <tr  v-for="serie in series" :key="serie.id">
            <td class="border px-4 py-2">{{series.id}}</td>
            <td class="border px-4 py-2">{{series}}</td>
            <td class="border px-4 py-2">{{series.description}}</td>
            <button @click="edit(income)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-6 mt-2 mb-2">editar</button>
            <button @click="delet(serie)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">eliminar</button>
          </tr>