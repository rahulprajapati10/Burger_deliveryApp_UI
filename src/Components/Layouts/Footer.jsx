import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'


function Footer() {

  const [isVisible , setIsVisible] = useState(false);
  const scrollTop = () =>{
    window.scrollTop({
      top:0,
      behavior:"smooth",
    })
  };

  const listenToScroll = ()=>{
    let heightToHidden = 250;
    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop

    windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
  }

    useEffect(()=>{
      window.addEventListener('scroll', listenToScroll);
    });

  return (
    <>
    <footer>
      <Container>
        <Row>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className="text-center">
              <h5>Location</h5>
              <p>D-25, Noida Sector 62</p>
              <p>Dr. Fixit , FL 33126</p>
              <p>Uttar Pradesh</p>
            </div>
          </Col>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className="text-center">
              <h5>Working Hours</h5>
              <p>Mon-fri: 9:00AM - 10:00PM</p>
              <p>Saturday: 10:00AM - 8:30PM</p>
              <p>Sunday: 12:00PM - 5:30PM</p>

            </div>
          </Col>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className="text-center order-now">
              <h5>Order Now</h5>
              <p>Hurry up! place your order</p>
              <p><Link to='tel:999888555' className="calling" style={{ textDecoration: "none" }}>999-888-777</Link></p>
            </div>
          </Col>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className="text-center">
              <h5>Follow Us</h5>
              <p>Feel free to connect with us</p>
              <ul className="list-unstyled text-center mt-2 d-flex justify-content-evenly">
                <li>
                  <Link to='/'>
                    <i className='bi bi-facebook'></i>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <i className='bi bi-twitter'></i>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <i className='bi bi-instagram'></i>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <i className='bi bi-youtube'></i>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className='copy_right'>
          <Col>
              <div>
                <ul className="list-unstyled text-center mb-0 ">
                  <li>
                    <Link to='/' style={{ textDecoration: "none" }}>
                    © 2025 <span>Tasty Burger</span>. All Rights Reserved <br />
                    </Link>
                  </li>
                 <div className="policy">
                 <li>
                    <Link to='/' style={{ textDecoration: "none" }}>
                    About Us
                    </Link>
                  </li>
                  <li>
                    <Link to='/' style={{ textDecoration: "none" }}>
                    Terms Of Use
                    </Link>
                  </li>
                  <li>
                    <Link to='/' style={{ textDecoration: "none" }}>
                    Privacy Policy
                    </Link>
                  </li>
                 </div>
                </ul>
              </div>
          </Col>
        </Row>
      </Container>
    </footer>


    {/* Scroll to top */}

    {isVisible && (
    <div className="scroll_top" onClick={scrollTop}>
      <i className='bi bi-arrow-up'></i>
    </div>
    )}

    </>
  )
}

export default Footer
