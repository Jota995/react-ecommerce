import { IProduct, Product } from "./Product";
import { Row, Col } from 'react-bootstrap';
import { useProducts } from "../hooks/useProducts";

export function ProductList() {
    const [products] = useProducts()

  return (
      <Row>
        {
            products.map((product:IProduct) => 
                (
                    <Col key={product.Id}  className="d-flex justify-content-center" sm ={12} md={4}  lg={3}>
                        <Product
                            Name={product.Name} 
                            Price={product.Price}
                            Categories={product.Categories}
                            Rate={product.Rate}
                            Id={product.Id}
                            Quantity={product.Quantity}
                        />
                    </Col>
                )
            )
        }
      </Row>
  );
}
