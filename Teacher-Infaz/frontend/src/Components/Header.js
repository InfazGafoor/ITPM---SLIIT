import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
   return(  //JSX code = JS + HTML so that,if we want to give any css properties we should give those within the {}. for example see the style attribute of navbar
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#" style={{color:"red"}}>Navbar</a>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">

      <li class="nav-item active">
      <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        
      </li>

      <li class="nav-item">
        <a class="nav-link" href="/add">Create Teacher</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>

      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>

    </ul>
  </div>
</nav>

   );
   
}
export default Header;