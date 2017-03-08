'use strict'
const faker = require('faker')

let arrCustomers = []
for (var i = 1; i <= 9; i++) {
  arrCustomers.push({
    'name': faker.name.findName(),
    'memberId': 'CL000' + i,
    'address': faker.address.streetName(),
    'zipCode': faker.address.zipCode(),
    'phone': faker.phone.phoneNumberFormat()
  })
}
module.exports = arrCustomers
