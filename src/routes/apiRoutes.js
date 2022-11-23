
//

const routes = (app) => {
    app.route('/movies')
    .get((req, res, next) => {
     
        next();
    },(req, res, next) =>{
        const movies = [
            {
              "movie_id": 1,
              "title": "Titanic",
              "poster_image_url": "https:url-movie.com",
              "popularity_summary": "2"
            }, 
            {
                "movie_id": 2,
                "title": "Top Gun - Maverik",
                "poster_image_url": "https:url-movie.com",
                "popularity_summary": "6"
              },
              {
                "movie_id": 3,
                "title": "Spider Man 3",
                "poster_image_url": "https:url-movie.com",
                "popularity_summary": "5"
              }];
        
        res.send(
            movies
        )
         } )

     //.post(addNewMovie);

    app.route('/movie/:movieId')
    .put((req, res) =>
        res.send('PUT request sucessful!')
    )

    .delete((req, res) =>
        res.send('DELETE request sucessful!')
    )
}

export default routes;
