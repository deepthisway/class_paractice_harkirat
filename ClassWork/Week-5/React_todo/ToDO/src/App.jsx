import { useState } from 'react'
import Todo from './Components/todo';

function App() {
  const [todos, setTodos ] = useState([]);

function getTodos() {   // helps to add new random todos 
  setTodos([...todos,{
    title: "Go to NTA",
    descripton: "Buy NEET paper"
  }])
}

  return (
    <>
      <button onClick={getTodos}>Get Random Todos</button>
      <h1>This is a TODO list</h1>
      {
        todos.map((todo, index)=>  {
          return (<Todo title= {todo.title} descripton= {todo.descripton} key ={index}></Todo>)
          
        })
      }
      
    </>
  )
}


export default App;

