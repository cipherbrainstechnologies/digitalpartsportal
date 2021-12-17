import React from 'react';

import Header from '../common/header';
import Footer from '../common/footer';

/* bootstrap */
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/* FontAwesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck, faCogs, faEnvelopeOpen, faCar } from '@fortawesome/free-solid-svg-icons'

/* css */
import '../assets/css/style.css';

/* images */
import Oil_Filters from '../assets/image/Oil_Filters.jpg';
import Brake_Fluid from '../assets/image/Brake_Fluid.jpg';
import Synthetic_Oil from '../assets/image/Synthetic_Oil.jpg';
import Pre_Mixed_Coolant from '../assets/image/Pre_Mixed_Coolant.jpg';
import ZipPay from '../assets/image/ZipPay.png';
import Afterpay from '../assets/image/Afterpay.png';
import HT_Castrol from '../assets/image/HT_Castrol.webp';
import HT_Ryco from '../assets/image/HT_Ryco.webp';
import HT_Nulon from '../assets/image/HT_Nulon.webp';
import HT_Mann from '../assets/image/HT_Mann.webp';
import HT_Penrite from '../assets/image/HT_Penrite.webp';
import HT_Xforce from '../assets/image/HT_Xforce.webp';
import Servicing_Maintenance from '../assets/image/Servicing_Maintenance.webp';
import Off_Road from '../assets/image/Off_Road.webp';
import Performance from '../assets/image/Performance.webp';
import Tools_Workshop from '../assets/image/Tools_Workshop.webp';
import ryco_filters from '../assets/image/ryco_filters.png';
import nulon from '../assets/image/nulon.png';
import castrol from '../assets/image/castrol.png';
import wesfil_filters from '../assets/image/wesfil_filters.png';
import motul from '../assets/image/motul.png';
import penrite from '../assets/image/penrite.png';
import community from '../assets/image/community.jpg';
import newsletter from '../assets/image/newsletter.jpg';
import zip_banner from '../assets/image/zip_banner.webp';
import top from '../assets/image/home.jpg';

/* Offer JSON */
const Offer = [
    { id: 1, title: 'Up to 20% OFF', subtitle: 'Castrol Engine Oils', link: '#0', image: HT_Castrol },
    { id: 2, title: 'Up to 20% OFF', subtitle: 'Ryco Filters', link: '#0', image: HT_Ryco },
    { id: 3, title: 'Up to 10% OFF', subtitle: 'Nulon Engine Oils', link: '#0', image: HT_Nulon },
    { id: 4, title: 'Up to 15% OFF', subtitle: 'Mann Filters', link: '#0', image: HT_Mann },
    { id: 5, title: 'Up to 20% OFF', subtitle: 'Penrite Engine Oils', link: '#0', image: HT_Penrite },
    { id: 6, title: 'Up to 10% OFF', subtitle: 'Xforce Exhaust Systems & Accessories', link: '#0', image: HT_Xforce }
];

/* PopularParts JSON */
const PopularParts = [
    { id: 1, title: 'Oil Filters', link: '#0', image: Oil_Filters },
    { id: 2, title: 'Brake Fluid', link: '#0', image: Brake_Fluid },
    { id: 3, title: 'Synthetic Oil', link: '#0', image: Synthetic_Oil },
    { id: 4, title: 'Pre-Mixed Coolant', link: '#0', image: Pre_Mixed_Coolant }
];

/* ProductCat JSON */
const ProductCat = [
    { id: 1, title: 'Servicing & Maintenance', link: '#0', image: Servicing_Maintenance },
    { id: 2, title: 'Off-Road & 4x4', link: '#0', image: Off_Road },
    { id: 3, title: 'Performance', link: '#0', image: Performance },
    { id: 4, title: 'Tools & Workshop', link: '#0', image: Tools_Workshop }
];

/* PopularBrands JSON */
const PopularBrands = [
    { id: 1, link: '#0', image: ryco_filters },
    { id: 2, link: '#0', image: nulon },
    { id: 3, link: '#0', image: castrol },
    { id: 4, link: '#0', image: wesfil_filters },
    { id: 5, link: '#0', image: motul },
    { id: 6, link: '#0', image: penrite }
];

function Home() {
    return (
        <div className='main_div'>

            <Header />

            {/* Subscribe section Start */}
            <div className='top_section bg-light py-5' style={{ backgroundImage: 'url(' + top + ')', }}>
                <Container>
                    <Row className='justify-content-md-center'>
                        <Col md={6}>
                            <div className='card h-100'>
                                <div className='card-body'>
                                    <div className='pt-3 mb-3 card-title text-center'>
                                        <h5 className='text-muted'>Currently displaying parts for your</h5>
                                        <p className='text-muted'><FontAwesomeIcon icon={faCar} /> 1993 Audi, 80, 1.6 E (B4) 74kw</p>
                                        <Button variant='primary' size='md' className='btn-block'>Price</Button>
                                        <hr className='mt-3 mb-2' />
                                        <h6 className='text-muted text-center'>Clear Vehicle</h6>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* Subscribe section End */}

            {/* Infomation Section Start */}
            <div className='infomation_section py-3'>
                <Container>
                    <Row>
                        {/* Infomation Section 01 */}
                        <Col xs={12} md={4}>
                            <div className='infomation_section_div text-center px-5'>
                                <a className='text_decor_no black_font' href='#0'>
                                    <FontAwesomeIcon icon={faTruck} className='fa-2x mb-1' />
                                    <p className='mb-0'>FREE shipping Australia wide on orders over $99.<sup>*</sup></p>
                                    <p className='extra_small mb-0'>*conditions apply</p>
                                </a>
                            </div>
                        </Col>
                        {/* Infomation Section 01 */}
                        <Col xs={12} md={4} className='no_mobile'>
                            <div className='infomation_section_div text-center px-5'>
                                <a className='text_decor_no black_font' href='#0'>
                                    <FontAwesomeIcon icon={faCogs} className='fa-2x mb-1' />
                                    <p className='mb-0'>Fitment Guarantee</p>
                                </a>
                            </div>
                        </Col>
                        {/* Infomation Section 01 */}
                        <Col xs={12} md={4} className='no_mobile'>
                            <div className='infomation_section_div text-center px-5'>
                                <span className='finance_option_span'><a href='#0' className='finance_option_a text_decor_no black_font'><img src={ZipPay} className='finance_option_img_zip img-fluid' alt='ZipPay' /></a> <a href='#0' className='finance_option_a text_decor_no black_font'><img src={Afterpay} className='finance_option_img_afterpay img-fluid' alt='Afterpay' /></a></span>
                                <p className='mb-0'>Finance Available</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* Infomation Section End */}

            {/* Popular Part section Start */}
            <div className='popular_part_section bg-light py-4'>
                <Container>
                    <Row>
                        <Col xs={12} md={12}>
                            <h3 className='title_h3'>Popular Parts</h3>
                        </Col>

                        {/* Popular Parts */}
                        {PopularParts.map(PopularParts => (
                            <Col xs={6} md={3}>
                                <a className='text_decor_no' href={PopularParts.link}>
                                    <div className='popular_part_div text-center p-4 mt-2'>
                                        <img src={PopularParts.image} className='img-fluid popular_part_img' alt={PopularParts.title} />
                                        <p className='popular_part_title big fw-bold black_font'>{PopularParts.title}</p>
                                    </div>
                                </a>
                            </Col>
                        ))}

                        {/* Popular Parts Buttons */}
                        <Col xs={12} md={12}>
                            <p className='text-center mt-4'>
                                <a className='u-url btn btn-primary' href='#0'><span className='p-name'>Shop All Parts</span></a>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* Popular Part section End */}

            {/* Offer section Start */}
            <div className='offer_section py-4'>
                <Container>
                    <Row>
                        {/* Offers */}
                        {Offer.map(Offer => (
                            <Col xs={12} md={6} className='mb-4' >
                                <a className='text_decor_no offer_hover' href={Offer.link}>
                                    <div className='bg-white card offer_card'>
                                        <div className='offer_div'>
                                            <img src={Offer.image} className='img-fluid offer_img' alt={Offer.subtitle} />
                                            <div className='offer_info card-body'>
                                                <Row>
                                                    <Col sm={12} md={7} lg={8} xl={9}>
                                                        <h6 className='mb-1'>{Offer.title}</h6>
                                                        <p className='mb-2 text-muted'>{Offer.subtitle}</p>
                                                    </Col>
                                                    <Col sm={12} md={5} lg={4} xl={3}>
                                                        <span className='btn btn-outline-secondary btn-sm btn-block'>More details</span>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div >
            {/* Offer section End */}

            {/* Shopping section Start */}
            <div className='shopping_cat_section bg-light py-4'>
                <Container>
                    <Row>
                        <Col xs={12} md={12}>
                            <h3 className='title_h3'>What are you shopping for?</h3>
                        </Col>

                        {/* Product Cat */}
                        {ProductCat.map(ProductCat => (
                            <Col xs={6} md={3}>
                                <a className='text_decor_no' href={ProductCat.link}>
                                    <div className='shopping_cat_div text-center py-4 px-2 mt-2'>
                                        <img src={ProductCat.image} className='img-fluid shopping_cat_img' alt={ProductCat.title} />
                                        <p className='shopping_cat_title big fw-bold black_font mt-3'>{ProductCat.title}</p>
                                    </div>
                                </a>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
            {/* Shopping section End */}

            {/* Subscribe section Start */}
            <div className='subscribe_section bg-light py-5' style={{ backgroundImage: 'url(' + newsletter + ')', }}>
                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            <div className='card h-100 bg-dark'>
                                <div className='card-body'>
                                    <div className='pt-4 mb-3 card-title text-center white_font'>
                                        <FontAwesomeIcon icon={faEnvelopeOpen} className='fa-2x mb-2 fa-inverse' />
                                        <h6 >Subscribe and get $10 off your next order</h6>
                                    </div>
                                    <Form>
                                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                                            <Form.Control type='email' placeholder='Your email' />
                                        </Form.Group>
                                        <Button className='btn-block' variant='primary' type='submit'>
                                            Subscribe
                                        </Button>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <a href='#0' className='subscribe_a'>
                                <img src={zip_banner} className='img-fluid zip_image' alt='zip_banner' />
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* Subscribe section End */}

            {/* Popular Brands section Start */}
            <div className='popular_brands_section py-4'>
                <Container>
                    <Row>
                        <Col xs={12} md={12}>
                            <h3 className='title_h3'>Popular Brands</h3>
                        </Col>

                        {/* Product Cat */}
                        {PopularBrands.map(PopularBrands => (
                            <Col xs={6} md={2}>
                                <a className='text_decor_no' href={PopularBrands.link}>
                                    <div className='popular_brands_div text-center p-4 mt-2'>
                                        <img src={PopularBrands.image} className='img-fluid popular_brands_img' alt={PopularBrands.title} />
                                    </div>
                                </a>
                            </Col>
                        ))}

                        {/* Popular Brands Buttons */}
                        <Col xs={12} md={12}>
                            <p className='text-center mt-4'>
                                <a className='u-url btn btn-primary' href='#0'><span className='p-name'>Shop All Brands</span></a>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* Popular Brands section End */}

            {/* Join Now section Start */}
            <div className='joinnow_section bg-light py-5' style={{ backgroundImage: 'url(' + community + ')', }}>
                <Container>
                    <Row>
                        <Col xs={12} md={12}>
                            <h1 className='text-center fw-bolder pt-3 pb-5 fontsize4rem white_font'>Love Your Car?</h1>
                            <h3 className='text-center pt-4 white_font'>Park your car in your garage <b>now</b> for exclusive benefits.</h3>
                            <center className='pt-3'>
                                <div className='d-inline-block'>
                                    <a href='#0' className='btn btn-primary btn-lg mx-3'>Join</a>
                                    <a href='#0' className='btn btn-light btn-lg mx-3'>Learn More</a>
                                </div>
                            </center>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* Join Now section End */}

            <Footer />

        </div >
    )
}
export default Home;