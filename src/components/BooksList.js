import React, {useState} from 'react';
import Book from './Book';


function BooksList({cards,favourites,setFavourites}){
  const addFavouriteBook = (book) => {
    const newFavouriteList = [...favourites, book];
    setFavourites(newFavouriteList);
  };
    const items = cards.map((item, i) => {
        let thumbnail = '';
        if (item.volumeInfo.imageLinks) {
          thumbnail = item.volumeInfo.imageLinks.thumbnail;
        }

      

        return (
            
          <div className='card-deck col-lg-6 mb-5' key={item.id}>
            <Book
              thumbnail={thumbnail}
              title={item.volumeInfo.title}
              pageCount={item.volumeInfo.pageCount}
              language={item.volumeInfo.language}
              authors={item.volumeInfo.authors}
              publisher={item.volumeInfo.publisher}
              description={item.volumeInfo.description}
              previewLink={item.volumeInfo.previewLink}
              infoLink={item.volumeInfo.infoLink}
              handleFavouritesClick={addFavouriteBook}
             
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
  


export default BooksList;