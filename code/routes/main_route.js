const express = require('express')
const router = express.Router()

// define the home page route
router.post('/initiate', (req, res) => {
  res.send('initiate page')
})


module.exports = router