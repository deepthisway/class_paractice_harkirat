import { useEffect, useState } from "react";
import axios from "axios"
import App2 from "./App2";

function App() {
  const [button, setButton] = useState(1)
  
  return (
    <>
    {/* <button onClick={()=> {
      setButton(1)
    }}>1</button>
    <button onClick={()=>{
      setButton(2)
    }}>2</button>
    <button onClick={()=>{
      setButton(3)
    }}>3</button>
    <Todo id= {parseInt(button)}/> */}
    <App2/>
    </>
  )
}


//   return (
//     <div>
//       {newtodos.map(todo => (
//         <Todo title={todo.title} description={todo.description} key={todo.id} />
//       ))}
//     </div>
//   );
// }

function Todo({id}) {
  const [todos, setTodos] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:9990/todos/"+id)  
      .then(response=>  {
        setTodos(response.data)
      })
  },[id])     //
  return (
    <>
      <h2>Id is: {id}</h2>
      <h2>{todos.title}</h2>
      <h4>{todos.description}</h4>
    </>
  );
}
export default App;
