import { useState } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { countAtom, evenSelector } from './stock/Atoms/count';

function App() {
    const [count, setCount] = useState(0);;

  return (
    <>
        <RecoilRoot>
          <Count/>
         </RecoilRoot>

    </>
  )
}

function Count()  {
  return <div>
    <CountRenderer/>
    <Buttons/>
  </div>
}

function CountRenderer()  {
  const count =useRecoilValue(countAtom);
  return  <div>
    {count}
    <EvenCountRenderer/>
  </div>
}
function EvenCountRenderer()  {
  const isEven =useRecoilValue(evenSelector);
  return <div>
    {isEven? "Even Count": "Odd"}
  </div>
}

function Buttons()  {   // it needs both count and setCount 

  const [count, setCount] = useRecoilState(countAtom);

  return <div>
    <button onClick={()=>{ 
      setCount(count + 1);
    }}>
        Increase
    </button>
    
    <button onClick={()=>{ 
      setCount(count - 1);
    }}>
        Decrease
    </button>
  </div>
}
export default App
 