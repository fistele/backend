import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { urlimage } from "../Axios/Api";

const NavScroll = () => {
  const navigate = useNavigate();
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };
  const { cartTotalQuantity } = useSelector((state) => state.storecart);

  const { user } = useSelector((state) => state.auth);

  return (
    <Navbar className="bg-body-tertiary">
      <Container fluid>
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          color="error"
          onClick={() => {
            navigate("/cart");
          }}
        >
          <ShoppingCartIcon sx={{ fontSize: 40 }} />
          <Badge
            badgeContent={cartTotalQuantity > 0 ? cartTotalQuantity : 0}
            color="success"
          ></Badge>
        </IconButton>
        <Navbar.Brand href="#"> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Stack direction="row" spacing={2}>
          <h6 style={mystyle}>{user.email}</h6>
          <Avatar alt="Remy Sharp" src={ user.avatar} />
        </Stack>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/articles">
              Articles
            </Nav.Link>
            <Nav.Link as={Link} to="/categories">
              Catégories
            </Nav.Link>
            <Nav.Link as={Link} to="/scategories">
              Sous Catégories
            </Nav.Link>
            <NavDropdown title="Authentification " id="navbarScrollingDropdown">
              <NavDropdown.Item href="/register">Register</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav.Link as={Link} to="/logout">
              Logout
            </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavScroll;
