'use strict'

let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  methods: {
    getItems: () => {
      axios.get('http://localhost:3000/api/items')
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
})

app.getItems()
