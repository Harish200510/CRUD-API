import Movie from '../models/movies.model.js'

export const MovieIndex=async(req,res)=>{

     try{

          const Allmovies=await Movie.find()
          res.status(202).json(Allmovies)
     }
     catch(err){
          res.status(500).json(err.message)
     }

}

export const MovieDetail=async(req,res)=>{
  
 try{
     const movie=await Movie.findById(req.params.id);

    if(movie==null){

     return res.status(404).json({message:"Cannot find Movie"})

    }
    else{
       res.json(movie)
    }

  }
  catch(err){
     res.status(500).json(err.message)

  }
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

export const MovieUpdate=async(req,res)=>{

  
 try{
     const updatedMovie=await Movie.findOneAndUpdate({_id:req.params.id},{
          title:req.body.title,
          desc:req.body.desc
     },{new:true})

    res.status(200).json(updatedMovie)

  }
  catch(err){
     res.status(500).json(err.message)

  }
}


export const MovieDelete=(req,res)=>{

     res.send("Delete the movie")
}

