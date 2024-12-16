import { NavDropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';

function Header() {
    const user = JSON.parse(localStorage.getItem("user-info"));
    // console.log("LocalStorage user", user);
    const Navigate = useNavigate();
    function logout() {
        localStorage.removeItem("user-info");
        Navigate("/login");
    }
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">LOGO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            {
                                localStorage.getItem("user-info") ?
                                    <>
                                        <NavLink className="navbar-brand" to="/addproduct">Add Product</NavLink>
                                        <NavLink className="navbar-brand" to="/updateproduct">Update Product</NavLink>
                                    </>
                                    :
                                    <>
                                        <NavLink className="navbar-brand" to="/login">Login</NavLink>
                                        <NavLink className="navbar-brand" to="/register">Register</NavLink></>
                            }
                        </Nav>
                        {
                            localStorage.getItem("user-info") ?
                                <Nav>
                                    <NavDropdown title={user && user.name} id="navbarScrollingDropdown">
                                        <NavDropdown.Item onClick={logout}>Log Out</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                : null
                        }
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default Header