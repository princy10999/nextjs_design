import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../../images/logo.png'
import bellIcon from '../../images/bellicon.svg';
import question from '../../images/question.svg';
import headphone from '../../images/headphone.svg';
import search from '../../images/search.svg';
import styles from './Navbar.module.css';
import { useRouter } from 'next/router';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';

const Navbar1 = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <>
            <Navbar expand={'lg'} fixed={'top'} container={'lg'} dark={true} className='w-100 theme-bg-color text-white py-1'>
                <NavbarBrand>
                    <div className='d-flex align-items-center justify-content-between position-relative '>
                        <div className='me-5 xl:mr-36 d-flex' role='button' onClick={() => { router.push('/dashboard'); }}>
                            <Image src={logo} alt="Landscape picture" />
                        </div>
                        <div className='position-relative  d-sm-block d-none'>
                            <input className={'w-100 pl-10 f-16 search text-white focus:outline-none rounded-md px-5 py-1 ' + `${styles.searchInput}`} type="text" name="search" id="search" placeholder='Search' />
                            <span className='seachIcon'><Image src={search} alt="bell" /></span>
                        </div>
                    </div>
                </NavbarBrand>
                <div className={'position-absolute d-none d-sm-block' + `${styles.navBellIcon2}`}>
                    <Image src={bellIcon} alt="bell" />
                    <span className='badge bg-button'>1</span>
                </div>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ms-auto" navbar>
                        <NavItem className='d-flex align-items-center justify-content-center'>
                            <div className={'pe-4 position-relative  ' + `${styles.navBellIcon}`}>
                                <Image src={bellIcon} alt="bell" />
                                <span className='badge bg-button'>1</span>
                            </div>
                        </NavItem>
                        <NavItem className='d-flex align-items-center justify-content-center'>
                            <div className={'px-4 mb-2 mb-sm-0 ' + `${styles.navIcon}`}>
                                <span className='me-2 f-16'>Help </span>
                                <Image src={question} alt="bell" className='h-100' />
                            </div>
                        </NavItem>
                        <NavItem className='d-flex align-items-center justify-content-center'>
                            <div className={'px-4 my-2 my-lg-0 ' + `${styles.navIcon}`}>
                                <span className='me-2 f-16'>Support</span>
                                <Image src={headphone} alt="bell" className='h-100' />
                            </div>
                        </NavItem>
                        <NavItem className='d-flex align-items-center justify-content-center'>
                            <div className='mx-5 my-2  mb-3 my-lg-0 ms-xl-4'>
                                {router.pathname === '/register' ? <button type="button" onClick={() => { router.push('/register'); }} className="btn text-white h-40 bg-button px-4">Register</button>
                                    :
                                    <div className={`${styles.navBtn}`}>
                                        <span className='me-2'>Hi, Sean</span>
                                        <button type="button" className="btn h-40 text-white bg-button px-3">S</button>
                                    </div>
                                }
                            </div>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    );
};

export default Navbar1;
