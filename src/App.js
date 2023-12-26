import './App.css';
import Login from './Pages/Login';
import {Route ,Routes} from "react-router-dom"
import Navs from './components/Navbar';
import Home from './Pages/Home';
import MyCollection from './Pages/MyCollection';
import AddMovie from './Pages/AddMovie';

function App() {
  return (
    <div className="App">
     <Navs />
      <Routes>
      <Route path='/Home' element={<Home />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/MyMovies' element={<MyCollection />}></Route>
        <Route path='/AddMovies' element={<AddMovie />}></Route>
        <Route path='/' element={<Home />}></Route>
       
      </Routes>
      
    </div>
  );
}

export default App;
