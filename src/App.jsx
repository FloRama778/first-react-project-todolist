import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import ToDoCard from "./components/ToDoCard";
import { useState , useEffect} from "react";

function App() {
 

    const [todos, setTodos] = useState([ ])
    const [todoValue, setTodoValue] = useState('')

    function persistData (newList)
    {
      localStorage.setItem('todos', JSON.stringify({
        todos: newList 
      }))
    }

    function handleAddTodos(newTodo)
    {
      const newTodoList = [...todos, newTodo]
      persistData(newTodoList)
      setTodos(newTodoList)
    }

    function handleDeleteTodo(index)
    {
      const newTodoList = todos.filter((todos, todoIndex) => {
        return todoIndex !== index

      })
      persistData(newTodoList)
      setTodos(newTodoList)
    }
  
   

    function handleEditTodo(index){

      const valueToBeEdited = todos[index]
      setTodoValue(valueToBeEdited)
      handleDeleteTodo(index);  

    }



    useEffect (() => {

      if(!localStorage){
        return
      }
      let localTodos = localStorage.getItem('todos')
      if(!localTodos){
        return
      }
      console.log(localTodos)
      localTodos = JSON.parse(localTodos).todos
      setTodos(localTodos)
    }, [])

  return (
    <>

    <ToDoInput handleAddTodos={handleAddTodos} todoValue={todoValue} setTodoValue={setTodoValue}/>
    <ToDoList handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} todos={todos}/> 
    
    </>

  );
}

export default App
