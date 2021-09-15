import React, { useState, useEffect } from "react";
import './App.css';
//importing components
import Form from './components/Form';
import Todo from "./components/Todo";
import ToDoList from './components/ToDoList'

function App() {
  
  //State stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status,setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  //Run once when the app is loaded
  useEffect(()=>{
    getLocalTodos();
  }, []);
  //USE Effect
  useEffect( () => {
    filterHandler();
    saveLocalTodos();
  },[todos,status]);
  //Functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
        case 'uncomplete':
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;  
        default:
          setFilteredTodos(todos);
          break; 
    }
  }
  //save to local
  const saveLocalTodos = () =>{
      localStorage.setItem("todos", JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
     let todoLocal = JSON.parse(localStorage.getItem("todos"));
     setTodos(todoLocal);
    }
  }
  return (
    <div className="App">
      <div className="borderTodo">
      <header>
        <h1>ToDo list</h1>
      </header>
      <Form 
          inputText={inputText} 
          todos={todos} 
          setTodos={setTodos} 
          setInputText={setInputText}
          setStatus={setStatus}
      />
      <ToDoList setTodos={setTodos} todos={todos}  filteredTodos={filteredTodos}/>
      </div>
    </div>
  );
}

export default App;
