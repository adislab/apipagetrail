const express = require('express')
const mainRouter = express.Router()

mainRouter.get('/main', (req, res, next) => {
  try {
    res.status(200).json({ message: 'success' })
  }catch(error){
    next(error)
  }
})

module.exports = mainRouter