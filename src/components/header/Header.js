import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { loginSuccess, logoutSuccess } from "../../features/login/loginSlice";
import { getUserProfile } from '../../features/user/userAction';
import './Header.css'
import { Container, NavDropdown, Navbar, Nav, Modal } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
import Login from '../login/Login';
import { userLogout } from "../../api/userApi";
import { Link } from 'react-router-dom';


export default function Header() {

    // useNavigate is the new version of useHistory
    const dispatch = useDispatch();
    const { isAuth } = useSelector((state) => state.login);
    const { user } = useSelector((state) => state.user);
    // const navigate =  useNavigate();

    useEffect(() => {
        !user.id && dispatch(getUserProfile())

        !isAuth && sessionStorage.getItem('authToken') && dispatch(loginSuccess()) && handleModelClose()

    }, [dispatch, isAuth, user.id]);

    // login Model Toggle
    const [ modelOpen, setModelOpen ] = useState(false);
    const handleModelClose = () => setModelOpen(false);
    const handleModelOpen = () => setModelOpen(true);

    //console.log(isAuth);

    // logout function
    const logMeOut = () => {
        userLogout().then(()=>{
            sessionStorage.removeItem('authToken');
            dispatch(logoutSuccess());
            handleModelClose();
        });
        //navigate('/');
    }



    return (
    <Navbar collapseOnSelect expand="lg" bg="bg-white" variant="light">
        <Container>
            <Navbar.Brand>
                <LinkContainer to="/">
                    <Nav.Link>Blog Site Name</Nav.Link>
                </LinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav>
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="About">
                        <Nav.Link>About</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="Posts">
                        <Nav.Link>Blogs</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="Contact">
                        <Nav.Link>Contact</Nav.Link>
                    </LinkContainer>

                    {
                        isAuth === true ?
                        <NavDropdown title="Person Name" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="Dashboard">
                                Dashboard
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={logMeOut}>Logout</NavDropdown.Item>
                        </NavDropdown>
                        :
                        <Nav.Link  variant="primary" to="Login" onClick={handleModelOpen}>Login</Nav.Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </Container>

        <Modal show={modelOpen && !isAuth } onHide={handleModelClose}>
            <Modal.Header closeButton>
                <Modal.Title>Admin Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Login />
            </Modal.Body>
        </Modal>
    </Navbar>
  )
}
