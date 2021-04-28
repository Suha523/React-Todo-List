import React from 'react';
import TodoItem from './TodoItem';
import  "./list.css";

function TodoList({todosList,setTodosCallback}){
    const deleteTodo = (todoIndex) => {
        const list = [...todosList];
        const updatedList = list.filter(item => list.indexOf(item) !== todoIndex);
        setTodosCallback(updatedList);
    }
    const editTodo = (todoIndex, todo_key, todo_value) => {
        const todosCopy = [...todosList];
        todosCopy[todoIndex][todo_key] = todo_value;
        setTodosCallback(todosCopy);
    }
    
    return (
        <ul className="todo-list">
        {
            todosList.map((todo, index) => (
                        <TodoItem 
                            key={index.toString()}
                            todo={todo}
                            todoIndex={index}
                            deleteTodo={deleteTodo}
                            editTodo={editTodo}
                        />)
                    )
        }
        </ul>
    );
}

export default TodoList;
