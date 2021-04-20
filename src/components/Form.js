import React, {useState} from 'react';
import "./form.css";


function Form({addTodoCallbackByFormComp}){
    const [todo_text, setTodoText] = useState("");
    
    return(
        <div className="myForm">
        <form>
            <input 
            type="text" 
            placeholder="write a task..." 
            className="toDo-input" 
            id="toDo-input" 
            value={todo_text}
            onChange={(ev) => setTodoText(ev.target.value)}>
            </input>

            
            <button 
            type="button" 
            id="add-btn" 
            className="add-btn" 
            onClick={(ev) => {
            ev.preventDefault();
            addTodoCallbackByFormComp(todo_text)
            setTodoText('');
        }}>add task</button>
        </form>
        </div>
    );
}

export default Form;