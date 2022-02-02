import { Card,Button } from "react-bootstrap";
import { Context } from "../context/ProductsCart/ProductsCartContext";
import { useContext } from "react";

export interface IProduct {
  Id:number,
  Name:string,
  Price:number,
  Rate:number,
  Categories:Array<string>,
  Quantity:number
}

export function Product({Id,Name, Price, Categories, Rate,Quantity}:IProduct) {
  const { productsCart,agregarAlCarrito } = useContext(Context);
  const addProductToCart = () =>{
    agregarAlCarrito({Id,Name, Price, Categories, Rate, Quantity})
  }
  console.log("products cart",productsCart)
  return (
    <Card style={{ width: "16rem", padding: "10px", marginBottom:"40px", cursor: "pointer" }}>
      <Card.Img
        variant="top"
        height={300}
        src="https://cdnx.jumpseller.com/blackpinkphone/image/20876713/resize/540/540?1638127224"
      />
      <Card.Body>
        <Card.Title style={{ fontSize: "10 px" }}>{Name}</Card.Title>
        <Card.Text>
          <span className="d-flex justify-content-between">
            <span>Price</span>
            <span>${Price}</span>
          </span>
          <span className="d-flex justify-content-between">
            <span>Rate</span>
            <span>{Rate} votes</span>
          </span>
        </Card.Text>
        <Button onClick={addProductToCart} variant="outline-secondary" className="w-100">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}
