//install dependencies
const express = require("express");//install dependency
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config(); // install dotenv dependency

//choosing the port 5070 if available.otherwise choose randomly
const PORT = process.env.PORT || 5070;

app.use(cors()); //use the cores()
app.use(bodyParser.json()); //use the bodyParser

const URL = process.env.MONGODB_URL; //getting the db link to this file

//configurations related to mongodb
mongoose.connect(URL, {
    
    useNewUrlParser: true, //creating an index
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});



const connection = mongoose.connection; //assigning the mongodb connection to a seperate variable.
connection.once("open", () => {  //callbck function
    console.log("Mongodb Connection success!"); //if connection success,print this msg
})

const teacherRouter = require("./routes/Teachers.js");  //declare the root 
//to use a file
//we should give a request from browser to get a response
//if we type http://localhost:5070/teacher it should be load the teacherRouter(that mean Teachers.js file)
app.use("/teacher",teacherRouter);

app.listen(PORT, () => {  //starting the server on a port
    console.log(`Server is up and running on port number: ${PORT}`)
})


//MONGODB_URL=mongodb+srv://InfazGafoor:12345%40a%2A%23@cluster0.fsfzh7f.mongodb.net/Teachers_db?retryWrites=true&w=majority
//node js version 4.1 or later