const express = require('express')
const app = express()
const port = 3000
//Express JS
//SEO
//Navigation
//for using css, img and js files, we need to use app.use() method
//middle ware function
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/home', (req,res)=>{
    res.sendFile(__dirname+'/home.html')
})
app.get('/about', (req,res)=>{
    res.sendFile(__dirname+'/about.html')
})
app.get('/contact', (req,res)=>{
    res.sendFile(__dirname+'/contact.html')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
