import React, { useState } from 'react';

/* bootstrap */
import { Container, Row, Col, Button, Modal, Tab, Nav, Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/* FontAwesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingCart, faUser, faUserPlus, faCar, faAngleDown } from '@fortawesome/free-solid-svg-icons'

import $ from 'jquery';

/* images */
import logo from '../assets/image/Logo.png';


function Header() {

    const [MenuShow, setMenuShow] = useState(false);

    return (
        <div>
            <header>
                <nav className='navbar default navbar-expand -sm fixed-tops navbar-light py-0'>
                    <Container fluid className='flex-wrap'>
                        <div className='pt-2 pb-2 header-align-center-class'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div className='menu-outer'>
                                    <Button size='sm' variant='dark' className='menu_btn' onClick={() => setMenuShow(true)}><FontAwesomeIcon icon={faBars} /><span> Menu</span></Button>
                                </div>
                                <div className='mx-auto mx-sm-0 px-2 logo-outer'>
                                    <a href='/'><img src={logo} alt='Digital Parts Platform' /></a>
                                </div>
                                <div className='ml-sm-auto pos-relative mr-auto my-2 my-lg-0 search-outer'>
                                    <input type='text' className='search_text form-control' placeholder='Search (sku, part, part number, vehicle, etc.)' />
                                </div>
                                <div className=' ml-lg-1 mr-lg-3 account-outer px-2'>
                                    <ul className='list-unstyled mb-0'>
                                        <li className='d-sm-inline-block small text-muted ms-3'><a href='#0'><FontAwesomeIcon icon={faUser} /> Log in</a></li>
                                        <li className='d-sm-inline-block small text-muted ms-3'><a href='#0'><FontAwesomeIcon icon={faUserPlus} /> Create Account</a></li>
                                        <li className='d-sm-inline-block small ms-3'><a href='#0'><FontAwesomeIcon icon={faCar} /> My Garage: Add Vehicle</a></li>
                                    </ul>
                                </div>
                                <div className='ml-0 cart-outer  px-2'>
                                    <Button size='sm' variant='success' className='menu_btn'><FontAwesomeIcon icon={faShoppingCart} /><span> Cart</span></Button>
                                </div>
                            </div>
                        </div>
                    </Container>
                </nav>
            </header>
            <Modal size='md' show={MenuShow} onHide={() => setMenuShow(false)} className='menu_modal'>
                <Modal.Header closeButton>
                    <Modal.Title>More about Menu</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul className='list-unstyled'>
                        <li className='p-3'>
                            <a className='font-size-1000 font-weight-bold ' title='Accessories' href='#0'><span>Accessories<FontAwesomeIcon icon={faAngleDown} /></span></a>
                        </li>
                        <li className='p-3'>
                            <a className='font-size-1000 font-weight-bold ' title='Bodywork &amp; Exterior' href='#0'><span>Bodywork &amp; Exterior<FontAwesomeIcon icon={faAngleDown} /></span></a>
                        </li>
                        <li className='p-3'>
                            <a className='font-size-1000 font-weight-bold ' title='Brakes' href='#0'><span>Brakes<FontAwesomeIcon icon={faAngleDown} /></span></a>
                        </li>
                        <li className='p-3'>
                            <a className='font-size-1000 font-weight-bold ' title='Car Care' href='#0'><span>Car Care<FontAwesomeIcon icon={faAngleDown} /></span></a>
                        </li>
                        <li className='p-3'>
                            <a className='font-size-1000 font-weight-bold ' title='Electrical' href='#0'><span>Electrical<FontAwesomeIcon icon={faAngleDown} /></span></a>
                        </li>
                        <li className='p-3'>
                            <a className='font-size-1000 font-weight-bold ' title='Engine Oils &amp; Lubricants' href='#0'><span>Engine Oils &amp; Lubricants<FontAwesomeIcon icon={faAngleDown} /></span></a>
                        </li>
                        <li className='p-3'>
                            <a className='font-size-1000 font-weight-bold ' title='Engine, Cooling &amp; Drivetrain' href='#0'><span>Engine, Cooling &amp; Drivetrain<FontAwesomeIcon icon={faAngleDown} /></span></a>
                        </li>
                        <li className='p-3'>
                            <a className='font-size-1000 font-weight-bold ' title='Filters' href='#0'><span>Filters<FontAwesomeIcon icon={faAngleDown} /></span></a>
                        </li>
                        <li className='p-3'>
                            <a className='font-size-1000 font-weight-bold ' title='Steering &amp; Suspension' href='#0'><span>Steering &amp; Suspension<FontAwesomeIcon icon={faAngleDown} /></span></a>
                        </li>
                    </ul>
                </Modal.Body>
            </Modal>
        </div >
    )
}
export default Header;