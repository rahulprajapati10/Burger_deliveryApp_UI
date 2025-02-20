import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pizza from '../../assets/about/pizza.png';
import Salad from '../../assets/about/salad.png';
import Delivery from '../../assets/about/delivery-bike.png';

function Section2(props) {
    // Mock Data Cards
    const mockData = [
        {
            image: Pizza,
            title: "Original",
            paragraph: `the original pizza is where it all began. With a perfectly crisp, hand-tossed crust, a rich and tangy tomato sauce, and a generous layer of melty mozzarella cheese, this classic creation is loved worldwide. Rooted in Italian tradition, the original pizza embodies the beauty of fresh ingredients and timeless recipes.`,
        },
        {
            image: Salad,
            title: "Quality Foods",
            paragraph: `Great food starts with quality ingredients, expert craftsmanship, and a passion for flavor. From farm-fresh produce to carefully sourced meats and cheeses, every bite should reflect freshness, authenticity, and care. Quality food isn’t just about taste—it’s about nutrition, sustainability, and a commitment to excellence`,
        },
        {
            image: Delivery,
            title: "Fastest Delivery",
            paragraph: `Craving something delicious? We’ve got you covered! Our quick and reliable delivery service ensures that your favorite meals arrive hot, fresh, and full of flavor—just the way they should be. Whether you're at home, the office, or anywhere in between, we bring the taste of quality straight to you`,
        },
    ];

    return (
        <>
            <section className="about_section">
                <Container>
                    <Row>
                        <Col lg={{ span: 8, offset: 2 }} className="text-center">
                            <h2>The burger tastes better when you eat it with your family</h2>
                            <p>
                                Great food tastes even better when shared with loved ones! Our delicious new burger, loaded with juicy flavors and crispy onions, is best enjoyed in the company of family.
                            </p>
                            <Link to="/" className="btn btn-danger order_now btn_red explore_more">
                                Explore full Menu
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="about_wrapper">
                <Container>
                    <Row className='justify-content-md-center'>
                        {mockData.map((item, index) => (
                            <Col key={index} lg={4} md={6} sm={12} className="mb-4 mb-md-0">
                                <div className="about_box text-center">
                                    <div className='about_icon'>
                                        <img src={item.image} alt={item.title} className='img-fluid' />
                                    </div>
                                    <h4>{item.title}</h4>
                                    <p>{item.paragraph}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Section2;
