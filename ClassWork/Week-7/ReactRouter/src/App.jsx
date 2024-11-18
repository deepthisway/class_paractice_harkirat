import {React,Suspense,lazy} from 'react';
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom';
const Dashboard = lazy(()=> import('./Components/Dashboard'))
const Login = lazy(()=> import('./Components/Login'))

function App() {

  return (
    <>
    <div>

      <BrowserRouter>
      <Topbar/>
        <Routes>
        <Route path = "/" element= {<Suspense fallback={"Loading...."}><Login/></Suspense> }/>
        <Route path="/dashboard" element={<Suspense fallback={'Loading....'}><Dashboard/></Suspense>}/>
        </Routes>
 
      </BrowserRouter>
    </div>

    </>
  )
}

function Topbar() {
  const navigate = useNavigate();
  return <div>

<div>
      <h1 style={{color: "red", backgroundColor: "black"}}>React App</h1>
      <button onClick={()=>  {
          navigate("/")
      }}>
        Login 
        </button>
        <br/>
        <br/>
      <button onClick={()=>  {
          navigate("/dashboard")
      }}>
        Dashboard
      </button>
      </div>
  </div>
}

export default App
