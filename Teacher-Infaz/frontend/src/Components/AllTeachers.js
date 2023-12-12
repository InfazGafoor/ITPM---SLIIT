import React,{useState,useEffect} from "react";
import axios from "axios"; 


//creating a functional component and export(by default) it here
export default function AllTeachers() {

    const [teachers,setTeachers] = useState([]); //[] within useState tells us that teachers var is an array.

    useEffect(()=> {
        function getTeachers() {
            axios.get("http://localhost:5070/teacher/")
            .then((res)=> {
                setTeachers(res.data);
                //console.log(res);
            })
            .catch((err)=>{
                alert(err.message);
            }
               
            )
        }
          getTeachers(); //call the function

    } , [])

    return(
        <div className="container">
            <h1>All teachers</h1>

        </div>
    )

}
