import { Navbar, Container, Nav } from "react-bootstrap";
import { Shop } from "react-bootstrap-icons";
import { ShoppingCart } from "./ShoppingCart";

const iconSizes = 24;

export function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="d-flex" href="#home">
          <Shop size={30} />
          <h3 className="ms-2">Ecommerce</h3>
        </Navbar.Brand>
        <Nav className="">
          <ShoppingCart placement={"end"} />
        </Nav>
      </Container>
    </Navbar>
  );
}
