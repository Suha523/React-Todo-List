import React from 'react';
import  "../css/all.min.css";
import  "./list.css";


function TodoItem({todo, todoIndex, deleteTodo, editTodo}) {
    return (
        <div className="item">
        <li className="todo-item" key={todoIndex.toString()}>

        <div className="item-text"><label className="lab" id="lab" contentEditable="true">{ todo.text }</label></div>

        <div className="operations">
        <input 
                    className="operation"
                    type="checkbox" value={todo.complete} 
                    onChange={() => {editTodo(todoIndex, 'complete', !todo.complete);}}
                />
            
        <a href="#"><i className="fas fa-pencil-alt" onClick={()=> {
            
            editTodo(todoIndex,'',  todo.text )
            }}></i></a>
        
            <a href="#" onClick={() =>{
            deleteTodo(todoIndex);
           }}><i className="fas fa-trash-alt"></i></a>
        </div>
            
        </li>
        </div>
    );

}

export default TodoItem;