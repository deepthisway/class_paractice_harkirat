import { useState } from "react";
import useIsOnline from "./Hooks/useIsOnline";
// import {useTodos} from "./Hooks/useTodos"
import useTimeout from "./Hooks/useTimeout";

function App() {
  // const {todos,loading} = useTodos(4);
  const isOnline = useIsOnline();
  const [count, setCount]  =useState(0);

  // if(loading) {
  //   // return <div>Loading.......</div>
  // }
  useTimeout(()=> {
    setCount(c => c+1 )
  },1000)
  return (
      <>
      <h1>The current count is {count}</h1>
      {/* {isOnline ? <div>Online</div> : <div>Offline</div>}
      {todos.map ((todo)=> {
        return (
          <Deep key={todo.id} todo ={todo}/>
        )
      })} */}
    </>
  )
}

// function Deep({todo}) {
//     return <div>
//       <h1>{todo.title}</h1>
//       <br></br>
//       <h3>{todo.description}</h3>
//     </div>
// }
export default App
