import mongoose from "mongoose";
import { MovieSchema } from "../models/apiModel";

const Movie = mongoose.model('Movie', MovieSchema);

export const addNewMovie = (req, res) => {
    let newMovie = new Movie(req.body);
    

    newMovie.save((err, movie) => {
        if(err){
            res.send(err);
        }
        res.json(movie);
    } );

}