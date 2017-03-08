'use strict'
const faker = require('faker')

let arrItems = []
for (var i = 1; i <= 9; i++) {
  arrItems.push({
    'itemCode': 'B-000' + i,
    'name': faker.commerce.productName(),
    'description': faker.commerce.productMaterial(),
    'price': faker.commerce.price(),
    'stock': faker.random.number()
  })
}
// console.log(arrItems)
module.exports = arrItems
