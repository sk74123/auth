const express = require('express')
const app = express()
const port = 3000


const mesasge = {
    "message": "Hello World"
}

app.get("/", (req,res) =>{
    res.send(mesasge)
})


app.listen(port, ()=>{
    console.log("Listening on port: ", port)
})