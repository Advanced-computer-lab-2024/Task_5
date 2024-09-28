// External variables
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');


// THIS IS WRONG NEVER DO THAT !! Only for the task we put the DB Link here!! NEVER DO THAAAT AGAIN !!
//Check db connection links in README file
const MongoURI = process.env.MONGO_URI ;
const {getUsers, signUp,getUserById}= require('./Controller/userController')


//App variables
const app = express();
app.use(cors());
const port = process.env.PORT || "8000";
const user = require('./Models/User');
// #Importing the userController


// configurations
// Mongo DB
mongoose.connect(MongoURI)
.then(()=>{
  console.log("MongoDB is now connected!")
// Starting server
 app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  })
})
.catch(err => console.log(err));
app.get("/home", (req, res) => {
    res.status(200).send("You have everything installed!");
  });

app.use(express.json());
app.use(cookieParser());


app.post("/signup", signUp);
app.get('/users', getUsers);
app.get('/users/:id',getUserById);

// default export App.js
module.exports = app;

