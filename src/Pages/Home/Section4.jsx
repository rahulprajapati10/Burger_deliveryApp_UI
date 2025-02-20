import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import PromotionImage from '../../assets/promotion/pro.png'

const Section4 = () => {
    return (
        <>
            <section className='promotion_section'>
                <Container >
                    <Row className='align-items-center'>
                        <Col lg={6} className='text-center mb-5 mb-lg-0'>
                            <img src={PromotionImage} className='img-fluid' alt="Promotion" />
                        </Col>
                        <Col lg={6} className='px-5'>
                            <h2>Nothing brings people together like a good burger</h2>
                            <p>
                                There’s something special about sharing a delicious burger with friends and family. Whether it’s a backyard BBQ, a casual dinner, or a fun night out, nothing brings people together like a good burger.
                            </p>
                            <ul>
                                <li>
                                    <p>
                                        Whether it’s a birthday celebration, a game night, or just a casual get-together, a good burger is always the perfect choice to bring people closer. 🍔🎉
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        From classic cheeseburgers to loaded creations, there’s a burger for everyone. Sharing different flavors and toppings makes the experience even more fun! 🍔🤝

                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Great food sparks great conversations! A burger in hand makes every moment more enjoyable, turning simple meals into unforgettable memories. 🍔🗣️❤️
                                    </p>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>

            </section>

            {/* BG Parallax scroll */}

            <section className='bg_parallax_scroll'>

            </section>

        </>
    )
}

export default Section4
