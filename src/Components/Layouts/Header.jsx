import React, { useState } from 'react'
import '../../Styles/HeaderStyle.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo/logo.png'
// import LoginRegister from '../../Pages/Home/LoginRegister';



function Header() {

        const [nav, setNav] = useState(false)
        
        // scroll navbar

        const changeValueOnScroll = () =>{
            const scrollValue = document?.documentElement?.scrollTop;
            scrollValue > 100 ? setNav(true) : setNav(false);
        };

        window.addEventListener("scroll", changeValueOnScroll);


    return (
        <header>
            <Navbar collapseOnSelect expand="lg" className={`${nav === true? "sticky" : ""}`} >
                <Container>
                    <Navbar.Brand href="#home">
                        <Link to="/" className='logo'>
                            <img src={Logo} alt="Logo" className='img-fluid' />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav ">
                        <Nav className="ms-auto mynavbar">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/menu">Our Menu</Nav.Link>
                            {/* <Nav.Link as={Link} to="/shop">Shop</Nav.Link> */}
                            {/* <Nav.Link as={Link} to="/blog">Blog</Nav.Link> */}
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                            <Nav.Link as={Link} to="/login" >
                                <div className='cart' >
                                    <i class="bi bi-bag fs-5" ></i>
                                    <em className='roundpoint'>2</em>
                                </div>
                            </Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
