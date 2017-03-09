'use strict'

let app = new Vue({
  el: '#item',
  data: {
    items: [],
    message: 'Hello Vue!'
  },
  methods: {
    getItems: () => {
      axios.get('http://localhost:3000/api/')
        .then((response) => {
          app.items = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
})

app.getItems()
