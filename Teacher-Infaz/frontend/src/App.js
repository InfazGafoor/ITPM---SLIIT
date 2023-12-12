import './App.css';

import Header from './Components/Header';
import AddTeacher from './Components/AddTeacher';
import AllTeachers from './Components/AllTeachers';
import {BrowserRouter as Router ,Route,Routes} from "react-router-dom"; //to navigate the home and other pages

//to import this we should type in fronteend directory "npm install react-router-dom"

//route is use to navigate the commponents
//exact component means to load that component only when calling the path
//this is front end routing

function App() {
  return (
    


<Router>
<Routes>
  
    <Route index element={<Header />} />
    <Route path="/add" exact element={<AddTeacher />} />
    <Route path="/" exact element={<AllTeachers />}>
    
  </Route>
</Routes>
</Router>


   
     
  
  );
}

export default App;
