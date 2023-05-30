import './App.css';
import  'postcss';
import Register from './components/Register';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './components/Login';
import HomePage from './components/HomePage';
import RendomUser from './components/RendomUser';
import Maping from './components/Maping';
import RendomJokes from './components/RendomJokes';


function App() {
  return (
  <>
  <BrowserRouter>
 
  <Routes>

<Route exact path='/' element={<Maping/>}></Route>
<Route exact path='/joke' element={<RendomJokes/>}></Route>

  <Route exact path='/maping' element={<Maping/>}></Route>
  <Route exact path='/rendomuser' element={<RendomUser/>}></Route>
  <Route exact path='/home' element={<HomePage/>}></Route>
  <Route exact path='/Register' element={<Register/>}></Route>
  <Route exact path='/Login' element={<Login/>}></Route>
  </Routes>
  
  </BrowserRouter>

  </>
  );
}

export default App;
