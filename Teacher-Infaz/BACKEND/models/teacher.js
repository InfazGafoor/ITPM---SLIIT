const mongoose = require("mongoose"); //to connect with mongodb 

const Schema = mongoose.Schema; //create a schema in mongodb
const teacherschema = new Schema({  //create a schema object
    TID: {type : Number,required: true},
    Name : {type : String,required: true},
    Teaching_Module: { type: String, required: true },
    Contact_No:{type : Number,required: true},
    Address: { type: String, required: true },
    Gender: { type: String, required: true },
    DOJ:{type:Date,required:true}

})

const Teacher = mongoose.model("Teacher",teacherschema); //model("document/table name in db we are going to send this schema", schema we created )
//note - we have given the table name as Teacher.
//but,when we send this to the db, 1.it will be converted as small(eg - teacher) 2.it/the name will be pluralized(teachers)
//so,if input-Teacher  output - teachers

module.exports = Teacher; //exporting the Teacher module(const Teacher)

//the datas will go to server from models through the routes