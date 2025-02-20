import React from 'react'
import { Container, Row, } from 'react-bootstrap'
import { Carousel } from 'react-bootstrap'
import user1 from '../../assets/blog/review-author-1.jpg'
import user2 from '../../assets/blog/review-author-2.jpg'
import user3 from '../../assets/blog/review-author-3.jpg'
import user4 from '../../assets/blog/review-author-5.jpg'

const Section6 = () => {
    return (
        <section className='blog_section'>
            <Container>
                <Row>
                    <Carousel>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className='d-flex align-items-center justify-content-between  hrx'>
                                    <div className="user_img"> <br />
                                        <img src={user1} alt="brand-1" className='img-fluid ' />
                                    </div>
                                    <br />
                                    <p>
                                        "This burger was pure perfection! From the first bite to the last, every ingredient was fresh, flavorful, and perfectly balanced. The juicy, perfectly grilled patty was packed with rich, smoky goodness, while the melty cheese, crisp lettuce, and fresh tomato added the perfect touch "
                                    </p>
                                    <br />
                                    <div className="item_rating mb-2">
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                    </div>
                                    <h5>BY AMELIE NEWLOVE</h5>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div className="user_img">
                                        <img src={user2} alt="brand-1" className='img-fluid' />
                                    </div>
                                    <p>
                                        " This burger was pure perfection! From the first bite to the last, every ingredient was fresh, flavorful, and perfectly balanced. The juicy, perfectly grilled patty was packed with rich, smoky goodness, while the melty cheese, crisp lettuce, and fresh tomato added the perfect touch "
                                    </p>
                                    <div className="item_rating mb-2">
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                    </div>
                                    <h5>BY AMELIE NEWLOVE</h5>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div className="user_img">
                                        <img src={user3} alt="brand-1" className='img-fluid' />
                                    </div>
                                    <p>
                                        " This burger was pure perfection! From the first bite to the last, every ingredient was fresh, flavorful, and perfectly balanced. The juicy, perfectly grilled patty was packed with rich, smoky goodness, while the melty cheese, crisp lettuce, and fresh tomato added the perfect touch "
                                    </p>
                                    <div className="item_rating mb-2">
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                    </div>
                                    <h5>BY AMELIE NEWLOVE</h5>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div className="user_img">
                                        <img src={user4} alt="brand-1" className='img-fluid' />
                                    </div>
                                    <p>
                                        " This burger was pure perfection! From the first bite to the last, every ingredient was fresh, flavorful, and perfectly balanced. The juicy, perfectly grilled patty was packed with rich, smoky goodness, while the melty cheese, crisp lettuce, and fresh tomato added the perfect touch "
                                    </p>
                                    <div className="item_rating mb-2">
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                    </div>
                                    <h5>BY AMELIE NEWLOVE</h5>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>
                </Row>
            </Container>
        </section>
    )
}

export default Section6
