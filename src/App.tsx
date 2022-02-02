import { Container} from 'react-bootstrap';
import './App.css';
import { NavBar } from './components/NavBar';
import { ProductList } from './components/ProductList';
import {ProductsCartContextProvider} from "./context/ProductsCart/ProductsCartContext"

function App() {
  return (
    <div>
      <ProductsCartContextProvider>
        <NavBar/>
        <Container style={{padding:"20px"}}>
          <ProductList/>
        </Container>
      </ProductsCartContextProvider>
    </div>
  );
}

export default App;
