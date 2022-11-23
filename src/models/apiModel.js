import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const  MovieSchema = new Schema({
    // movie_id:{
    //     type: Number,
    // },
    title:{
        type: String,
        //required: "Enter the movie title"
    },
    poster_image_url:{
        type: String,
        //required: "Enter the poster URL"
    },
    popularity_summary:{
        type: String,
        //required: "Enter the movie popularity rate 0-10"
    },
    created_date:{
        type: String,
        default: Date.now
    }
});


