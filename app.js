const express = require('express')
const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/mongo_shell_demo")
.then(() => console.log("Mongo DB Connected"))
.catch(err => console.log("Error in connection "+err))
const app = express()
const port = 3000

//Model
const cat = mongoose.model('cat', {No1: Number, No2: Number});
//Express JS
//SEO
//Navigation
//for using css, img and js files, we need to use app.use() method
//middle ware function
app.use(express.static('public'))
app.use(express.urlencoded())
//for ejs 
app.set('views',__dirname+'/views')
app.set('view engine','ejs')
//
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
//QueryString
app.get('/product/', (req,res)=>{
    var id = req.query.q
    //can also take multiple values
    //var id1 = req.query.jiya
    res.send("Query value is "+id)
})
//Parameters
app.get('/cake/:id', (req,res)=>{
    var id = req.params.id
    res.send("Params value is "+id)
})
//sum.html
app.get('/sum',(req,res)=>{
    //res.send("Welcome")
    res.sendFile(__dirname+'/sum.html')
})
//api
app.get('/sumapi', (req,res)=>{  //api
    cat.find()
        .then(data=>{
            res.json(data);
        })
})
//dynamic user value in url
app.get('/sumprocess',(req,res)=>{
    var a = req.query.txt1
    var b = req.query.txt2
    //mongo data store
    const kitty = new cat({No1:a,No2:b});
    kitty.save().then(()=>console.log("Record Added"));

    var c = parseInt(a) + parseInt(b)
    res.send(`A value is ${a}<br/> B value is ${b}<br/> Sum is ${c}`)
})
//ejs page 
app.get('/homepage',(req,res)=>{
    res.render('home',{myvar:'Jaini'})  //giving data to our template engine
})
//marksheet using template engine
app.get('/marksheet',(req,res)=>{
    res.render('marksheet')
})
app.post('/marksheetprocess',(req,res)=>{
    var sub1 = req.body.txt1
    var sub2 = req.body.txt2
    var c = parseInt(sub1) + parseInt(sub2)
    res.render('ans',{s1:sub1,s2:sub2,result:c})   //giving data to ans.ejs
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
