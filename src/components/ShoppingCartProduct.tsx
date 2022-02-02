import { Col, Row } from "react-bootstrap";
import { XSquare, CaretDown, CaretUp } from "react-bootstrap-icons";
import { Context } from "../context/ProductsCart/ProductsCartContext";
import { useContext } from "react";

export interface IProductCart{
    Id:number,
    Name:string,
    Price:number,
    Quantity:number
}

export function ShoppingCartProduct({Id,Name,Price,Quantity}:IProductCart) {

  const { deleteProduct, sumProductCart, restProductCart } = useContext(Context);

  return (
      <div style={{boxSizing:"border-box"}} className="border border-secondary rounded mb-2 p-2">
          <Row>
              <Col lg={8}>
                <section className="d-flex flex-column h-100 justify-content-center">
                  <div>
                    {Name}
                  </div>
                  <div>
                    {Price}
                  </div>
                </section>
              </Col>
              <Col lg={2}>
                  <section className="h-100 d-flex flex-column align-items-center ">
                    <span className="btn" onClick={()=>sumProductCart(Id)}><CaretUp className="d-flex align-items-center justify-content-center"  size={15}/></span>
                    <span >{Quantity}</span>
                    <span className="btn" onClick={()=>restProductCart(Id)}><CaretDown className="d-flex align-items-center justify-content-center" size={15}/></span>
                  </section>
              </Col>
              <Col lg={2} className="d-flex align-items-center justify-content-center text-danger">
                <span className="btn" onClick={()=>deleteProduct(Id)}>
                  <XSquare style={{}} size={24}/>
                </span>
              </Col>
          </Row>
      </div>
  );
}
