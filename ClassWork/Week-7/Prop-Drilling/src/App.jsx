import { useState } from "react"

function App() {
   const [count, setCount] = useState(0)

  return (
    <>
     <h1> Prop-Drilling</h1>
    <Count count= {count}/>
    <Buttons count={count} setCount={setCount}/>
    </>
  )
}
function Count({count})  {
    return <div>
      {count}
    </div>
}

function Buttons({count, setCount})  {
  return <div>
    <button onClick={()=> {
        setCount(count+1)
    }}>
      Increase
    </button>

    <button onClick={()=>{
      setCount(count-1)
    }}>
      Decrease
    </button>
  </div>
}

export default App
