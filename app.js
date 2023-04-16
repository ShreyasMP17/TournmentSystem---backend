const express=require("express")
const cors=require("cors")
const app = express()
const PORT = 4000


const Partcipants = require('./models/partcipants')  
const Tournment =require('./models/tournment')

const mongoose = require('mongoose')
const { findById } = require("./models/tournment")
const tournment = require("./models/tournment")
mongoose.set('strictQuery',false)

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors()) 

const dbURL = "mongodb://localhost:27017/tournment"
mongoose.connect(dbURL).then(()=>{
    console.log("connected to database");
})



app.get("/tournment",async(req,res)=>{
    try {
        const tournment= await Tournment.find()
        res.json(tournment)
    } catch (error) {
        console.log(err);
    }

})

app.get('/tournment/:id', async (req, res) => {
    const { id } = req.params
    try {
        const tournment = await Tournment.findById(id)
        res.send(tournment)
    } catch (error) {
        res.send(error)
    }
})



app.post('/add-tournment',async(req,res)=>{
    let tournmentData = new Tournment({
        image:req.body.image,
        name:req.body.name,
        date:req.body.date,
        time:req.body.time,
    })
    try{
        await tournmentData.save()
        res.send({message:"Tournment added succesfully"})
    }catch(err){
        res.send({message:"Failed to add post"})
    }
})


app.get("/partcipants",async(req,res)=>{
    try {
        const partcipants= await Partcipants.find()
        res.json(partcipants)
    } catch (error) {
        console.log(err);
    }

})

app.get('/partcipants/:id', async (req, res) => {
    const { id } = req.params
    try {
        const partcipants = await Partcipants.findById(id)
        res.send(partcipants)
    } catch (error) {
        res.send(error)
    }
})




app.post('/add-partcipants',async(req,res)=>{
    let partcipantsData = new Partcipants({
        id:req.body.id,
        name:req.body.name,
        age:req.body.age,
        gender:req.body.gender,
        location:req.body.location
    })
    try{
        await partcipantsData.save()
        res.send({message:"Partcipants added succesfully"})
    }catch(err){
        res.send({message:"Failed to add partcipants"})
    }
})


app.get("/edit/:id",(req,res)=>{
    tournment.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.render(data)
        }
    })
    });





app.listen(PORT,()=>{
    console.log(`listening on the port ${PORT}`);
})