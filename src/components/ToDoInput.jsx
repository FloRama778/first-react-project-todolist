import React, { useState } from 'react'

export default function ToDoInput(props) {
  const {handleAddTodos, todoValue, setTodoValue} = props
  
  return (
    <header>
        <input name='input1' value={todoValue} onChange={(e) => {
          setTodoValue(e.target.value)
        }} placeholder='Enter ToDo ...'/>
        <button onClick={() => {
          handleAddTodos(todoValue); 
          setTodoValue('');
        }}>Add</button>
    </header>
  )
}

