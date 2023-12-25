import './App.css';
import Login from './Pages/Login';
import {Route ,Routes} from "react-router-dom"
import Navs from './Navbar';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
     <Navs />
      <Routes>
      <Route path='/Home' element={<Home />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/' element={<Home />}></Route>
       
      </Routes>
      
    </div>
  );
}

export default App;
