import React,{useState} from "react";
import axios from "axios";


//creating a functional component and export it here
export default function AddTeacher(){  
        const [TID,setTID] = useState("");
        const [name,setName] = useState("");
        const [Tmodule,setTmodule] = useState("");
        const [cNo,setcNo] = useState("");
        const [addr,setaddr] = useState("");
        const [gender,setgender] = useState("");
        const [date,setdate] = useState("");

        function sendData(event){ 
         // event.preventDefault(); //to  prevent the default behaviour of the submit option
          //alert("Please fill the relevant fiels and submit again!"); //after click submit this fun should execute.so we hv given this fun into form starting tag.
        }
        
        const newTeacher = {
          TID,
          name,
          Tmodule,
          cNo,
          addr,
          gender,
          date
        }
        //console.log(newTeacher);

        //to send the data to backend first we should install npm install axios in front end folder
        //after that we should send the data(newTeacher object) to /add location
        //we can give authentication as 3rd parameter
        axios.post("http://localhost:5070/teacher/add",newTeacher)
        .then(()=>{alert("Teacher added successfully!");})
        .catch((err)=>{
          alert(err);
          console.log("error occured while adding teacher!")
        })




    return( //here ,we are going to use bootstrap form code for adding teacher.it is a JSX code.so,definetely we should close all tags.here,some tags are not closed(input tags).so,edit here.
 <div className="container">  


<form onSubmit={sendData}> 
<div class="form-group">
    <label for="TID">TID</label>
    <input type="text" class="form-control" id="TID" placeholder="Teacher ID"
    onChange={(e)=> {
    setTID(e.target.value);
    }
  }
    />
  </div>

  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" class="form-control" id="name" placeholder="Teacher Name"
     onChange={(e)=> {
      setName(e.target.value);
      }
    }
    
     />
  </div>

  <div class="form-group">
    <label for="Tmodule">Teaching Module</label>
    <select class="form-control" id="Tmodule" onChange={(e)=> {
    setTmodule(e.target.value);
    }
  }>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>

  <div class="form-group">
    <label for="cNo">Contact Number</label>
    <input type="text" class="form-control" id="cNo" placeholder="Mobile No"
     onChange={(e)=> {
      setcNo(e.target.value);
      }
    }
    />
  </div>

  <div class="form-group">
    <label for="addr">Address</label>
    <input type="text" class="form-control" id="addr" placeholder="Permenant Address"
     onChange={(e)=> {
      setaddr(e.target.value);
      }
    }
    />
  </div>

  <div class="form-group">
    <label for="gender">Gender</label>
    <select class="form-control" id="gender"
     onChange={(e)=> {
      setgender(e.target.value);
      }
    }
    >
      <option>Male</option>
      <option>Female</option>
      </select>
  </div>
  
  <div class="form-group" data-provide="datepicker">
    <label for="date">Date</label>
    <input type="date" class="form-control" id="date"
     onChange={(e)=> {
      setdate(e.target.value);
      }
    }
    />
   </div>
   <div>
   <button type="submit" class="btn btn-primary">Submit</button>
   </div>

</form>

</div>

    )
};