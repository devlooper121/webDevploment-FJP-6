


import Cart from './components/Cart';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { Product } from './components/Product';
import {CartElement} from "./components/CartElement"

import Preview from "./components/Preview"

import { BrowserRouter ,Routes, Route} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
        <Route path ='/cart' element={<Cart/>}>
          
        </Route>
          
        <Route path ='/preview' element={<Preview/>}>
        </Route>
        <Route path ='/' element={<Home/>} >
          
        </Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
