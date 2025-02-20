import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Section7 = () => {
    return (
        <section className='contact_section'>
            <Container>
                <Row className='justify-content-center'>
                    <Col sm={8} className='text-center'>
                        <h4>We Guarntee</h4>
                        <h2>30 Minutes Delivery!</h2>
                        <p>
                        just the way they should be. Whether you're at home, the office, or anywhere in between, we bring the taste of quality straight to you
                        </p>
                        <Link to='/' className='btn btn_red  btn-danger px-4 py-2 rounded-0'>
                        Call: 999-888-777
                        
                        </Link>

                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default Section7
