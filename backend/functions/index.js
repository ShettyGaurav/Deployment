import express from 'express'
import cors from 'cors'
const app = express()


app.use(cors())
app.use(express.json())

app.post('/home',(req,res)=>{
    const {name} = req.body;
    console.log("Hii "+name)
    res.json({name:"Gaurav"});
})

app.get('/home',(req,res)=>{
    res.send("Hii Gaurav")
})

app.listen(1670,()=>{
    console.log("The app is listening on http://localhost:1670");
})