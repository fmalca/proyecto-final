import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  const logo =
    "https://res.cloudinary.com/ds3gb0bqn/image/upload/v1642111434/logo_ysbytb.jpg";

  return (
    <Navbar bg="light" variant="dark">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            <Link to="/categoria/hogar">Hogar</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/categoria/empresa">Empresa</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/categoria/gamer">Gamer</Link>
          </Nav.Link>
        </Nav>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </Container>
    </Navbar>
  );
};

export default NavBar;
