import React,{useState} from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    const todosCopy = [...todos]  
    todosCopy.push({text: todo, complete: false})
    setTodos(todosCopy)
  }
  return (
    <div className="App">
      <Header title="to do list"/>
      <Form addTodoCallbackByFormComp={addTodo}/>
      <TodoList todosList={todos} setTodosCallback={setTodos} />
    </div>
  );
}

export default App;
