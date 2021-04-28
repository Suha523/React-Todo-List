import React from 'react';
import './navbar.css';



function Navbar({showLib,showToDoList}){

  // changeVisibility = () => {
  //   setVisible({ visible: visible === 'first' ? 'second' : 'first' });
  // }
    return(
       
            <nav className="navbar navbar-expand-lg navbar-dark bg-trans fixed-top ">
           <a className="navbar-brand" href="#">My First React App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item ">
        <a className="nav-link" href="#" onClick={showToDoList}>To Do List</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#" onClick={showLib}>Library</a>
      </li>
    </ul>
    
  </div>
</nav>
       
    );
}

export default Navbar;