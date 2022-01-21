import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart";
import Order from "./components/Order/Order";
import { CartContextProvider } from './context/CartContext';


function App() {
  return (    
    <CartContextProvider>
      <BrowserRouter>                                                  
        <NavBar/>    
        <Routes>
          <Route 
            exact 
            path="/" 
            element= {<ItemListContainer  /> } />
          <Route 
            exact
            path="/category/:idCat" 
            element= {<ItemListContainer  /> } />
          <Route 
            exact
            path="/detail/:id" 
            element= { <ItemDetailContainer  /> } />            
          <Route 
            exact 
            path="/cart" 
            element= { <Cart /> } />            
          <Route 
            exact 
            path="/order" 
            element= { <Order /> } />  
        </Routes>   
      </BrowserRouter>
    </CartContextProvider>          
  );
}

export default App;
