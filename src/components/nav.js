// import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
// import Form from 'react-bootstrap/Form';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.css";
import logout from "../pages/Logout";
import { useNavigate } from "react-router-dom";
// import Madrid from './card';
// import App from './App';

function NavScrollExample() {
  const navigate = useNavigate();
  return (
    <div className="me-auto">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container
          style={{ display: "flex", justifyContent: "space-between" }}
          fluid
        >
          <div style={{display: "flex", alignItems: "center"}}>
            <Navbar.Brand href="App">
              <h1>BOSTON HOUSING PRICE</h1>
            </Navbar.Brand>
          </div>

          <div style={{paddingRight: "80px"}}>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavDropdown title="Menu" id="navbarScrollingDropdown">
                  {" "}
                  <h5>
                    <NavDropdown.Item href="#action3">
                      <h5>Profile</h5>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      <h5>Settings</h5>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      button
                      onClick={() => {
                        navigate("/")
                      }}
                    >
                      Log Out{" "}
                    </NavDropdown.Item>
                  </h5>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavScrollExample;
