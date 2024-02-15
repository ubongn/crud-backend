import  express  from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGO).then(() =>{
    console.log("Connected to MongoDB"); 
    app.listen(8000, () => {
        console.log("Listening on   port 8000");
    });
}).catch((err) =>{
    console.log(err);
})


app.get('/', (req, res) => {
    res.send("Welcome to the CRUD with Node.js Express and MongoDB")
})
