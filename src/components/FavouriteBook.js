import React, {useState} from 'react';
import "../css/all.min.css";
import "./book.css";



function FavouriteBook({thumbnail, 
               title,
               authors,
                 }){
    return(
  <div className="card h-100">
    <img src={thumbnail} className="card-img-top position-relative h-75" alt={title}/>
    <div className="card-body text-center bg-light h-25">
      <h5 className="card-text h5-size">{title}</h5>
      <p className="card-text p-size">Authors: {authors}</p>
     
    </div>
   
  </div>
  
    );
}

export default FavouriteBook;