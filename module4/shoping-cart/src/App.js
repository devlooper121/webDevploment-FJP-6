


import Cart from './components/Cart';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { Product } from './components/Product';
import {CartElement} from "./components/CartElement"
function App() {
  return (
    <>
    <NavBar/>
    <Cart/>
    <CartElement/>
    {/* <Home/> */}
    </>
  );
}

export default App;
