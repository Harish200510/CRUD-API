import Movie from '../models/movies.model.js'

export const MovieIndex=(req,res)=>{
     res.json("Get the movies")
}

export const MovieCreate=async(req,res)=>{
      
      const newMovie=new Movie({
          title:req.body.title,
          desc:req.body.desc,
      })

      try{

           const movie=await newMovie.save();
           res.status(201).json(movie)
      }
      catch(err){
          res.status(400).json(err.message)

      }

}

export const MovieUpdate=(req,res)=>{
  res.send("update the Movie")
}


export const MovieDelete=(req,res)=>{
     res.send("Delete the movie")
}

