import express from "express";
import bodyParser from "body-parser";
import routes from './src/routes/apiRoutes';
import mongoose from "mongoose";
import { MovieSchema  } from '../webservice/src/models/apiModel';

const app = express();
const PORT = 3000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/APIdb', {
    useNewUrlParser: true
});





// bodyparser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

app.get('/',async (req, res)  =>  {
    res.send(`Node and express server is running on port ${PORT} and`)
}
    
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);