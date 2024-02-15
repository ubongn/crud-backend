import  express  from "express";

const app = express();


app.get('/', (req, res) => {
    res.send("Welcome to the CRUD with Node.js Express and MongoDB")
})

app.listen(8000, () => {
    console.log("Listening on   port 8000");
});