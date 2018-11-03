const BillingCycle = require('./billingCycle')

BillingCycle.methods([
  'get',
  'post',
  'delete',
  'put'
])

BillingCycle.updateOptions({
  new: true,
  runValidators: true
})

module.exports = BillingCycle
