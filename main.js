import express from 'express'

const app=express();
const PORT=8000;
app.get('/',(req,res)=>{
    res.json({message:"Welcome to my Site"})

})

app.listen(PORT,()=>{
    console.log(`Your Site http://localhost:${PORT}`)
})