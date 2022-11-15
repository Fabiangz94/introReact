import logoCargado from './logo.svg';
import Home from './components/home';
import './css/App.css';
import Navbar from './components/navbar';
import Ruta2 from './components/ruta2';
import {Route, Link, Routes} from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <ul>
        <li><Link to={"/ruta2"}>Ir a Ruta 2</Link></li>
        <li><Link to={"/"}>Ir a Home</Link></li>
      </ul>

      <Routes>
        <Route path='/' element={<Home logo={logoCargado}/>}/>
        <Route path='/ruta2' element={<Ruta2/>}/>
      </Routes>
    </div>
  );
}

export default App;
