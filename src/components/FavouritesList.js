import React from 'react';
import FavouriteBook from './FavouriteBook';

function FavouritesList({favourites}){
   
  
        const items = favourites.map((item, i) => {
            let title = item.title;
            return (
                
              <div className='card-deck col-lg-12 mb-5' key={item.id}>
                <FavouriteBook
                  thumbnail={item.thumbnail}
                  title={title}
                  authors={item.authors}

                />
              </div>
            );
          });
          return (
            <div className='container mt-5'>
              <div className='row'>{items}</div>
            </div>
          );
    }
  


export default FavouritesList;
