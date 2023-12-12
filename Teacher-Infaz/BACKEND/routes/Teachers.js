const router = require("express").Router(); //importing the Router() func which have within express
let Teacher = require("../models/teacher"); //importing teacher.js .if error comes ,change Teacher to teacher

//if req - http://localhost:5070/teacher the response is load the teacherRouter(see server.js)
 
//what should we do if req - http://localhost:5070/teacher/add
router.route("/add").post((req, res) =>{ //post is the request sending http method

    //here,frontend send these details to backend
    //the backend gets them from the req body and save them in seperate variables
    const TID = Number(req.body.TID); //should be typecast as number.bcz,it gets strings as default
    const Name = req.body.Name;
    const Teaching_Module= req.body.Teaching_Module;
    const Contact_No = Number(req.body.Contact_No);
    const Address = req.body.Address;
    const Gender = req.body.Gender;
    const DOJ = req.body.DOJ;

    //creating an object for imported model
    const newTeacher = new Teacher({TID, Name, Teaching_Module, Contact_No, Address, Gender,DOJ});
    
    //newTeacher.save() - passing data received from frontend to database via(haraha) the teacher model 
    //.then .catch - JS promise
    //if success ,execute the then().otherwise run .catch()
    newTeacher.save().then(()=>{res.json("Teacher Added") //giving response to frontend in json format

        .catch((err) => {
            console.log(err); //print the error in terminal (exception handling)
            res.status(400).send({status: "Error with Adding Data",error: err.message});
        });
    
    })
});


//dispaly the teacher details
//http://localhost:5070/teacher 
router.route("/").get((req,res) => {   //in order to display the details in frontend we should use the http get().that means,backend should get the data from the db
    Teacher.find()   //find all teachers from the db
    .then((teachers) => {res.json(teachers)})  //if success send the response(all teachers) in json format
    .catch((err) => {console.log(err)});  //if fail display error
});


//update a teacher
//when we updating a particular teacher,we should select him/her first.
//for this purpose,the object id 's will be used.
//object id 's will be generated automatically by mongodb database while we inserting a particular object(here,teacher object)
//http:localhost:5070:/teacher/update/:id
router.route("/update/:id").put(async(req,res)=>{  //put() is used to update details.
    let userId= req.params.id;   // getting object id of teacher which we want to update from req parameter
    const {TID, Name, Teaching_Module, Contact_No, Address, Gender,DOJ} = req.body; //destructuring method is used to get and store those details from req body.these are the datas which we want to update
    /*  above code is equal to below code
     const TID = Number(req.body.TID); 
    const Name = req.body.Name;
    const Teaching_Module= req.body.Teaching_Module;
    const Contact_No = Number(req.body.Contact_No);
    const Address = req.body.Address;
    const Gender = req.body.Gender;
    const DOJ = req.body.DOJ;
    */

    const updateTeacher = {TID, Name, Teaching_Module, Contact_No, Address, Gender,DOJ} //object/details that we want to update

    const update = await Teacher.findByIdAndUpdate(userId, updateTeacher) //await - wait until one obj finish it's update //Teacher - model name  //findByIdAndUpdate(objId of teacher want to update,updating obj/deta)
                                                                           //findByIdAndUpdate(userId,{TID, Name, Teaching_Module, Contact_No, Address, Gender,DOJ}) - this also correct
    
    .then(()=>{    //if updating success
        res.status(200).send({status: "User Updated"} , {user:update})}) //returning msg with status code
                                                                          //send will return an json obj
                                                                          //user:update - sending the updated details
    .catch((err) => {  //if updating failed
        console.log(err);
        res.status(500).send({status: "Error with Updating Data",error: err.message});
    })
});
  /* 
  .then(() => {
    res.json("user updated");
  })
  .catch((err) => {
    console.log(err);
    res.json("Sorry...error occured while updating...")
  })
*/

//delete 
//http:localhost:5070:/teacher/delete/:id
router.route("/delete/:id").delete(async(req, res) => { // http delete is used to delete
        let userId= req.params.id;

        await Teacher.findByIdAndDelete(userId)
        .then(()=>{
            res.status(200).send({status: "Teacher Deleted"});

        }).catch((err) => {
            console.log(err.message); //print the error msg
            res.status(500).send({status: "Error with delete user",error:err.message});
        })
}); 

//search
//http:localhost:5070:/teacher/get/:id
router.route("/get/:id").get(async(req,res) => {
    let userId = req.params.id;

    await Teacher.findById(userId)
    .then(() => {
        res.status(200).send({msg:"Teacher found.."});
    })
    .catch((err) => {
        console.log(err);
        res.status(500).send({status:"error occured..",error:err.message});
    })
})
    
module.exports = router; //exports the router module