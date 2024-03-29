import React from "react";


const ToDoList = (props) => {


    return (
        <>
            <div className="todo_style">
                <i className="fa-solid fa-xmark fa-fade" 
                onClick={()=>{
                    props.onselect(props.id);
                }} />
                <li> {props.text}
                </li>
            </div>
        </>
    );
};

export default ToDoList;