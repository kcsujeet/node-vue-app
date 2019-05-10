const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()


//Middle ware
app.use(bodyParser.json())
app.use(cors())

//port
port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})

//routes
const posts = require('./routes/api/posts')
app.use('/api/posts', posts)