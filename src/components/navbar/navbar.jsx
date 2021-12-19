import React from 'react';
import logo from '../../logo/full-stack-Logo.svg'



const Navbar = function () {



    return (
        <nav class="navbar  bg-dark justify-content-end ">
  <div class="container  mw-100">
      
      <img  src={logo} alt="no carga" width="290" height="50"/>
    <ul class="nav justify-content-end ">
            
            <li class="nav-item   ">
                <a class="btn btn-dark rounded-start rounded-0 " >Proyects</a>
            </li>
            <li class="nav-item rounded-0 ">
                <a class="btn btn-dark  rounded-0 " >About me</a>
            </li>
            <li class="nav-item  ">
                <a class="btn btn-dark rounded-end  rounded-0 " href='https://vinotecapp.vercel.app/' target="_blank" >VinotecApp</a>
            </li>
            
        </ul>
  </div>
</nav>
        
    )
}
export default Navbar;