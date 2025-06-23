import express from 'express'
import { MovieCreate, MovieDelete, MovieIndex, MovieUpdate } from '../controllers/movies.controller'

const router=express.Router()

//CRUD functionality of movies


//R - for Reading
router.get("/",MovieIndex)

//C - For creating movies
router.post("/",MovieCreate)

// U -for updating movies
router.put("/:id",MovieUpdate)

// D - For Deleting Movies
router.delete("/:id",MovieDelete)


export default router;