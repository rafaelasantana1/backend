const exppress = require('express')
const rafinhaApp =  exppress()
const port = 3023


rafinhaApp.get('/api', (req,res) =>{
    res.send("⭐⭐⭐Rafinha lindinha⭐⭐⭐")
})

rafinhaApp.listen(port, ()=>{
    console.log("server está onnnnn!")
})