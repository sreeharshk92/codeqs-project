import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      {/* <Login/> */}
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/login' element ={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App