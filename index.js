
let express=require("express")
let https=require("https")
let app=express()
let cors=require("cors")
app.use(cors())
let mongoose=require("mongoose")
const port=5000
mongoose.connect("mongodb://127.0.0.1:27017/users",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("con ok")
}).catch((e)=>{
    console.log("con error")
})
let usersch=new mongoose.Schema({
    name:String,
    email:String,
    gender:String,
    Status:String
})
let Users=mongoose.model("Users",usersch)
app.get('/Data',async(req,res)=>{
    let data=await Users.find()
    res.json(data)
})
app.get('/fetch',(req,res)=>{
    https.get("https://gorest.co.in/public-api/users",(res)=>{
        let data=" "
        res.on("data",(users)=>{
            data+=users
        })
        res.on("end",()=>{
            let x=JSON.parse(data)
            console.log(x)
        for(let i=0;i<x.data.length;i++){
            Users.insertMany(x.data[i]).then(console.log("ok"))
        }
    })
})
    res.end("complete data is stored in database")
})
app.listen(5000)