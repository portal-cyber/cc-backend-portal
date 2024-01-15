'use strict'
require('dotenv').config()
const port=process.env.PORT || 8000
const { db} = require('./src/model/index')
const { start } = require('./src/server')

db.sync({force:false}).then(()=>{
    start(port)
})