const express = require('express')
const bodyparser = require('body-parser')
// const cors = require('cors');
const apps = express()
const PORT = process.env.PORT || 8010
// const corsoption = { origin: 'http://localhost:3000' }

// router
const main = require('./modules/route')

// apps.use(cors(corsoption));
apps.use(bodyparser.json())
apps.use(bodyparser.urlencoded({ extended: false }))

// set routing
apps.use('/api', main)

apps.listen(PORT, () => {
    console.log(`Server Running At : ${PORT}`)
})