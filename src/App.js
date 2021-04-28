import React,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import LibraryHeader from './components/LibraryHeader';
import BooksList from './components/BooksList';
import FavoraitsList from './components/FavouritesList';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [cards, setCards] = useState([]);
  const [libVisible, setLibVisible] = useState(true);
  const [toDoVisible, setToDoVisible] = useState(false);
  const [display,setDisplay] = useState('first');
  const [todos, setTodos] = useState([]);
  const [favourites, setFavourites] = useState([]);

  

  const addTodo = (todo) => {
    const todosCopy = [...todos]  
    todosCopy.push({text: todo, complete: false})
    setTodos(todosCopy)
  }

  const showToDoList=() =>{
    setToDoVisible(true);
      setLibVisible(false);
  }

  const showLib=() =>{
    setToDoVisible(false);
      setLibVisible(true);
  }

  
 
    
     if (libVisible){
      return (
          <div className="App">

                <Navbar showLib={showLib} showToDoList={showToDoList}/>
                <LibraryHeader title="library" setCards={setCards}/>
                <div className="container">
                <div className="row">
                <div className="col-lg-8 mt-5 border">
                <h2>All Books</h2>
                <BooksList cards={cards} favourites={favourites} setFavourites={setFavourites}/>
                </div>
               <div className="col-lg-4 mt-5 border">
                  <h2>Favourites</h2>
                <FavoraitsList favourites={favourites}/>
                </div>
                </div >
                </div>
               
                
         <div className="d-none">
            <Navbar/>
            <Header title="to do list"/>
            <Form addTodoCallbackByFormComp={addTodo}/>
            <TodoList todosList={todos}  setTodosCallback={setTodos} />
            </div>
           </div>
    );
    }else if(toDoVisible){
  return(
    <div className="App">
    <div className="d-none">
    <Navbar/>
    <LibraryHeader title="library" setCards={setCards}/>
    <BooksList cards={cards}/>
    </div>
    <div className="toDo container mt-5">
    <Navbar showLib={showLib} showToDoList={showToDoList}/>
    <Header title="to do list"/>
    <Form addTodoCallbackByFormComp={addTodo}/>
    <TodoList todosList={todos} setTodosCallback={setTodos} />
    </div>

</div>

  );
 
}
}
export default App;
