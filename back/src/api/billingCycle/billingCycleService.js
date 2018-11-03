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

// Add a COUNT route
BillingCycle.route('count', (req, res, next) => {
  BillingCycle.count((error, value) => {
    if(error) {
      res.status(500).json({errors: [error]})
    } else {
      res.json({value})
    }
  })
})

module.exports = BillingCycle
