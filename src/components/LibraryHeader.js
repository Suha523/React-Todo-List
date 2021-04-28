import React,{useState} from 'react';
import './libraryHeader.css';
import '../css/all.min.css';
import axios from 'axios';



function LibraryHeader({title,setCards}){
    const [query, setQuery] = useState('');
    const search=()=>{
        axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${query}`
        )
        .then(res => {
            if (res.data.items.length > 0) {
              setCards(res.data.items);
            }
          
        })
        .catch(err => {
          console.log(err.response);
        });
    
    
  };
    
    return(
       <div className="libHeader d-flex justify-content-center align-items-center flex-column">
           <div className="overlay">
           </div>
           <header className="z-i">
              <h1 className="text-capitalize z-i">{title}</h1>
           </header>
           <div className="input-group container rounded">
                  <input type="text" className="form-control rounded ml-5 mt-5 mb-5 " placeholder="Search a book" aria-label="Search"
                        aria-describedby="search-addon" value={query} onChange={e=> setQuery(e.target.value)}/>
                  <button type="button" className="mt-5 mb-5 mr-5 rounded" onClick={search}>
                     <span className="input-group-text border-0" id="search-addon">
                       <i className="fas fa-search"></i>
                     </span>
                  </button>       
           </div>
     </div>
    );
    
}

export default LibraryHeader;