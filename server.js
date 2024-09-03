const express = require('express')
const bodyparser = require('body-parser')
// const cors = require('cors');
const apps = express()
const PORT = process.env.PORT || 8080
// const corsoption = { origin: 'http://localhost:3000' }

// router
// const book = require('./modules/book/book.route')

// apps.use(cors(corsoption));
apps.use(bodyparser.json())
apps.use(bodyparser.urlencoded({ extended: false }))

// set routing
// apps.use('/api/books', book)

apps.listen(PORT, () => {
    console.log(`Server Running At : ${PORT}`)
})