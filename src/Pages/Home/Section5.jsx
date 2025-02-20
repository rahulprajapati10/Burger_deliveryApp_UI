import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import StoreIOS from '../../assets/shop/appstore.png'
import StoreGoogle from '../../assets/shop/googleplay.png'
import DownloadImage from '../../assets/shop/e-shop.png'
import { Carousel } from 'react-bootstrap'
import Brand1 from '../../assets/brands/brand-11.png'
import Brand2 from '../../assets/brands/brand-12.png'
import Brand3 from '../../assets/brands/brand-13.png'
import Brand4 from '../../assets/brands/brand-14.png'
import Brand5 from '../../assets/brands/brand-15.png'
import Brand6 from '../../assets/brands/brand-16.png'
import Brand7 from '../../assets/brands/brand-17.png'
import Brand8 from '../../assets/brands/brand-18.png'

const Section5 = () => {
    return (
        <div>
            <section className='shop_section'>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={6} className='text-center text-lg-start mb-5 mb-lg-0'>
                            <h4>Download Mobile App and</h4>
                            <h2>Save upto 20%</h2>
                            <p>
                            Whether enjoyed plain or with a sprinkle of fresh basil, every bite is a taste of history and pure satisfaction
                            </p>
                            <Link to='/'>
                                <img src={StoreIOS} alt="Ios" className='img-fluid store me-3' />

                            </Link>
                            <Link to='/'>
                                <img src={StoreGoogle} alt="Android" className='img-fluid store me-3' />

                            </Link>

                        </Col>

                        <Col lg={6}>
                            <img src={DownloadImage} alt="e-shop" className='img-fluid' />

                        </Col>

                    </Row>
                </Container>

            </section>

            <section className='brand_section'>
                <Container>
                    <Row>
                        <Carousel>
                            <Carousel.Item>
                                <Carousel.Caption>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <div className="brand_img">
                                            <img src={Brand1} alt="brand-1" className='img-fluid' />
                                        </div>
                                        <div className="brand_img">
                                            <img src={Brand2} alt="brand-1" className='img-fluid' />
                                        </div>
                                        <div className="brand_img">
                                            <img src={Brand3} alt="brand-1" className='img-fluid' />
                                        </div>
                                        <div className="brand_img">
                                            <img src={Brand4} alt="brand-1" className='img-fluid' />
                                        </div>
                                        <div className="brand_img">
                                            <img src={Brand5} alt="brand-1" className='img-fluid' />
                                        </div>
                                        <div className="brand_img">
                                            <img src={Brand6} alt="brand-1" className='img-fluid' />
                                        </div>
                                        <div className="brand_img">
                                            <img src={Brand7} alt="brand-1" className='img-fluid' />
                                        </div>
                                        <div className="brand_img">
                                            <img src={Brand8} alt="brand-1" className='img-fluid' />
                                        </div>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Carousel.Caption>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        {/* <div className="brand_img">
                                        <img src={Brand1} alt="brand-1" className='img-fluid' />
                                    </div>
                                    <div className="brand_img">
                                        <img src={Brand2} alt="brand-1" className='img-fluid' />
                                    </div> */}
                                        <div className="brand_img">
                                            <img src={Brand3} alt="brand-1" className='img-fluid' />
                                        </div>
                                        <div className="brand_img">
                                            <img src={Brand4} alt="brand-1" className='img-fluid' />
                                        </div>
                                        <div className="brand_img">
                                            <img src={Brand5} alt="brand-1" className='img-fluid' />
                                        </div>
                                        <div className="brand_img">
                                            <img src={Brand6} alt="brand-1" className='img-fluid' />
                                        </div>
                                        <div className="brand_img">
                                            <img src={Brand7} alt="brand-1" className='img-fluid' />
                                        </div>
                                        <div className="brand_img">
                                            <img src={Brand8} alt="brand-1" className='img-fluid' />
                                        </div>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Row>
                </Container>

            </section>

        </div>
    )
}

export default Section5
