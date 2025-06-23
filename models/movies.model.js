import { model, Schema } from "mongoose";

//Schmea is like rules for the data
//The Schema defines the structure (what fields a student should have).
const schema =new Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
        required:true,
    }
})

//Create a Model
// The Model uses that schema to talk to the database.

// It lets us do things like:

// 📋 Add a student

// 🔍 Find a student

// 📝 Update a student

// ❌ Delete a student


const Movie=model("Movie",schema)

export default Movie;
