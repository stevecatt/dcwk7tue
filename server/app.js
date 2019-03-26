const express = require("express")
const mustacheExpress = require ("mustache-express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(cors())
let trips =[]
console.log(trips)
app.engine("mustache", mustacheExpress())
app.use(bodyParser.urlencoded({ extended: false }))
app.set ("views", "../views")
app.set ("view engine","mustache")

app.get ("/",(req,res)=>{
    res.render("index", {name:"Steve"})

})
//app.get("/trips",(req,res)=>{
//    res.render("trips",trips)
//})
app.get('/trips',(req,res) => {
    res.render('trips',{triplist: trips})
  })
app.post("/trips",(req,res)=>{
    let destination = req.body.destination
    let dateDepart= req.body.dateDepart
    let datReturn = req.body.datReturn
    let imageUrl = req.body.imageUrl

    let trip = {destination: destination , dateDepart: dateDepart, datReturn:datReturn, imageUrl:imageUrl}
    trips.push(trip)
    console.log (trips)
    res.render('trips',{triplist: trips})

})
app.get ("/trips",(req,res)=>{
    res.render("trips", "WTF")
})

app.post("/delete",(req,res)=>{
   let destDel = req.body.dest
   console.log(destDel)
    trips = trips.filter(trip=>trip.destination != destDel)
    console.log (trips)
  
    res.redirect('trips')
    })


   
   


app.listen(3000,()=>{
    console.log("server is running")
})



/*
app.get("/trips/:destination", (req,res)=>{
    

})*/