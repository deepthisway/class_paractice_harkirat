import { useEffect, useState } from "react";

function App2() {
    const [count, setCount] = useState(0)
    const [sum, setSum] = useState(0)
    const [finalSum, setFinalSum] = useState(0)

    useEffect(()=>  {
        let total=0;
        for(let i=0; i<=sum; i++)   {
        total = total + i;
    }
    setFinalSum(total)},[sum]);
    
    function addCount() {
        setCount(count + 1);
    }

    return (

            <div>
            <input onChange={(e)=>{
                setSum(e.target.value)
            }}></input>
            <h4>Sum is: {finalSum}</h4>
            <br/>
            <br/>
            <button onClick={addCount}>
                count {count}
            </button>


            </div>
    )
}

export default App2;
