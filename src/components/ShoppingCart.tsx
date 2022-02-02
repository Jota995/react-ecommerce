import {useState} from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { Cart } from "react-bootstrap-icons";
import { CircleNotification } from "./CircleNotification";
import { Context } from "../context/ProductsCart/ProductsCartContext";
import { useContext } from "react";
import { ShoppingCartProduct, IProductCart } from "./ShoppingCartProduct";

export function ShoppingCart({ ...props }) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { productsCart } = useContext(Context);
  
    return (
      <>
        <div className=" position-relative">
          <Button variant="dark" onClick={handleShow} className="me-2 rounded-circle">
            <Cart size={24} color="white"/>
          </Button>
          {productsCart.length > 0 && <CircleNotification productCount={productsCart.length}/> }     
        </div>
          
  
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Productos Seleccionados</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {productsCart.map((product:IProductCart) => <ShoppingCartProduct key={product.Id} Id={product.Id} Name={product.Name} Price={product.Price} Quantity ={product.Quantity} />)}
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }