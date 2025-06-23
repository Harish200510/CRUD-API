import express from 'express'
import router from './routes/movies.route.js'
import connectDB from './lib/db.js';

const app=express();
const PORT=8000;

connectDB()

app.use(express.json())


app.get('/',(req,res)=>{
    res.json({message:"Welcome to my Site"})

})
//CRUD functionality of movies

app.use("/movies",router)
 

app.listen(PORT,()=>{
    console.log(`Your Site http://localhost:${PORT}`)
})

