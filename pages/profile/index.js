import Head from 'next/head';
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import styles from './Profile.module.css';
import company from '../../images/company.png';
import Image from 'next/image';
import profile from '../../images/profile.svg';
import location from '../../images/location.svg';
import sms from '../../images/sms.svg';
import ArrowUp from '../../images/arrowUp.svg'
import ArrowDown from '../../images/arrowDown.svg'
import Select from 'react-select';
import { selectStyles } from '../../constant';

const Index = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    const roleOptions = [
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two' },
        { value: 'three', label: 'Three' }
    ];

    const stateOptions = [
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two' },
        { value: 'three', label: 'Three' }
    ];

    const officeOptions = [
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two' },
        { value: 'three', label: 'Three' }
    ];

    const hearOptions = [
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two' },
        { value: 'three', label: 'Three' }
    ];

    return (
        <>
            <Head>
                <title>Profile</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header /> 
            <div className='px-2 px-lg-0'>
            <div className='my-5 container fullwidth border rounded-20'>
                <div className='d-lg-flex align-items-center justify-content-between text-center text-md-start p-40 pb-4'>
                    <div className='d-md-flex justify-content-start'>
                        <div className='position-relative d-inline-block'>
                            <Image className='rounded-3' src={company} alt='image' />
                            <span className='axiformaSemiBold f-16 position-absolute top-50 start-50 translate-middle text-center'>Company Logo</span>
                        </div>
                        <div className='ms-md-3 d-block d-md-flex flex-column'>
                            <span className='axiformaSemiBold mb-2 f-24 '>Company Name</span>
                            <div className='d-flex align-items-center justify-content-center justify-content-md-start flex-wrap gap-2 mt-1 mt-md-0'>
                                <div className='d-flex align-items-center'>
                                    <Image src={profile} alt="bell" className='h-100' />
                                    <span className='me-2 f-16 h-100 ms-2'>Sunlight Solar</span>
                                </div>
                                <div className='d-flex align-items-center  '>
                                    <Image src={location} alt="bell" className='h-100' />
                                    <span className='me-2 f-16 h-100 ms-2'>SF, Bay Area </span>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <Image src={sms} alt="bell" className='h-100' />
                                    <span className='me-2 f-16 h-100 ms-2'>Company@kt.com</span>
                                </div>
                            </div>
                            <div className='d-flex align-items-center mt-3 justify-content-center justify-content-md-start'>
                                <div className='border-dashed p-2 me-4'>
                                    <div className='d-flex align-items-center'>
                                        <Image src={ArrowUp} alt='image' />
                                        <span className='f-16 theme-color axiformaSemiBold'>$32,400</span>
                                    </div>
                                    <span className='mx-1 f-12 text-gray'>This month Earnings</span>
                                </div>
                                <div className='border-dashed p-2'>
                                    <div className='d-flex align-items-center'>
                                        <Image src={ArrowDown} alt='image' />
                                        <span className='f-16 theme-color axiformaSemiBold'>80</span>
                                    </div>
                                    <span className='mx-1 f-12 text-gray'>This month Projects</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='position-relative d-inline-block mt-3 mt-lg-0'>
                            <Image className='rounded-3' src={company} alt='image' />
                            <span className='axiformaSemiBold f-16 position-absolute top-50 start-50 translate-middle text-center'>Company Badge</span>
                        </div>
                    </div>
                </div>
                <div className='px-lg-5 px-2'>
                    <ul className='d-flex nav justify-content-start flex-nowrap overflow-auto'>
                        <li role='button' onClick={() => setActiveTab('Overview')} className={'nav-item text-gray axiformaSemiBold text-nowrap me-5 pb-3 ' + (activeTab === 'Overview' ? ` ${styles.greenActiveTab}` : null)}>Overview</li>
                        <li role='button' onClick={() => setActiveTab('Profile')} className={'nav-item text-gray axiformaSemiBold text-nowrap me-5 pb-3 ' + (activeTab === 'Profile' ? ` ${styles.greenActiveTab}` : null)}>Profile</li>
                        <li role='button' onClick={() => setActiveTab('Services')} className={'nav-item text-gray axiformaSemiBold text-nowrap me-5 pb-3 ' + (activeTab === 'Services' ? ` ${styles.greenActiveTab}` : null)}>Services</li>
                        <li role='button' onClick={() => setActiveTab('Certification')} className={'nav-item text-gray axiformaSemiBold text-nowrap me-5 pb-3 ' + (activeTab === 'Certification' ? ` ${styles.greenActiveTab}` : null)}>Certification</li>
                        <li role='button' onClick={() => setActiveTab('Gallery')} className={'nav-item text-gray axiformaSemiBold text-nowrap me-5 pb-3 ' + (activeTab === 'Gallery' ? ` ${styles.greenActiveTab}` : null)}>Gallery</li>
                        <li role='button' onClick={() => setActiveTab('Review and ratings')} className={'nav-item text-gray axiformaSemiBold text-nowrap me-5 pb-3 ' + (activeTab === 'Review and ratings' ? ` ${styles.greenActiveTab}` : null)}>Review and ratings</li>
                        <li role='button' onClick={() => setActiveTab('Partners')} className={'nav-item text-gray axiformaSemiBold text-nowrap me-5 pb-3 ' + (activeTab === 'Partners' ? ` ${styles.greenActiveTab}` : null)}>Partners</li>
                    </ul>
                </div>
            </div>

            {activeTab === 'Overview' ?
                <div className='border container rounded-20 p-40 my-5'>
                    <div className='mb-3'>
                        <label htmlFor="cname" className='theme-color f-14 axiformaSemiBold mb-3 d-block'>Company Name</label>
                        <input type="text" name="cname" id="cname" placeholder='Company Name' className='w-100 h-40 form-control border text-black focus:outline-none rounded px-3' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="url" className='theme-color f-14 axiformaSemiBold mb-3 d-block '>Website URL</label>
                        <input type="text" name="url" id="url" placeholder='Website URL' className='w-100 h-40 border form-control text-black focus:outline-none rounded px-3' />
                    </div>
                    <div className='row mb-3'>
                        <div className='col-lg-6 mb-3 mb-lg-0'>
                            <label htmlFor="fname" className='theme-color f-14 axiformaSemiBold mb-3 d-block'>First Name</label>
                            <input type="text" name="fname" id="fname" placeholder='First Name' className='w-100 h-40 border form-control text-black focus:outline-none rounded px-3' />
                        </div>
                        <div className='col-lg-6'>
                            <label htmlFor="lname" className='theme-color f-14 axiformaSemiBold mb-3 d-block'>Last Name</label>
                            <input type="text" name="lname" id="lname" placeholder='Last Name' className='w-100 h-40 border form-control text-black focus:outline-none rounded px-3' />
                        </div>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email" className='theme-color f-14 axiformaSemiBold mb-3 d-block'>Email</label>
                        <input type="email" name="email" id="email" placeholder='Email' className='w-100 h-40 form-control border text-black focus:outline-none rounded px-3' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="phone" className='theme-color f-14 axiformaSemiBold mb-3 d-block'>Phone Number</label>
                        <input type="number" name="phone" id="phone" placeholder='Phone Number' className='w-100 h-40 border form-control text-black focus:outline-none rounded px-3' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="role" className='theme-color f-14 axiformaSemiBold mb-2 d-block'>Role at Company</label>
                        <span className='f-14 fw-normal text-gray'>Before partnering with any solar company, Two Bit Media needs to have a conversation with somebody in an executive or senior management role. If you are a sales rep and are interested in getting leads from Two Bit Media, please pass this application on to a manager who is fit for this conversation.</span>
                        <Select options={roleOptions} className='mt-3 h-40' classNamePrefix="select" styles={selectStyles} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="address" className='theme-color f-14 axiformaSemiBold mb-2 d-block'>Street address</label>
                        <span className='f-14 fw-normal text-gray'>Please provide the address of your company headquarters</span>
                        <input type="text" name="address" id="address" placeholder='Address' className='w-100 h-40 mt-3 border form-control text-black focus:outline-none rounded px-3 py-3' />
                    </div>
                    <div className='row mb-3'>
                        <div className='col-lg-6 mb-3 mb-lg-0'>
                            <label htmlFor="city" className='theme-color f-14 axiformaSemiBold mb-3 d-block'>City</label>
                            <input type="text" name="city" id="city" placeholder='City' className='w-100 h-40 border form-control text-black focus:outline-none rounded px-3 py-3' />
                        </div>
                        <div className='col-lg-6'>
                            <label htmlFor="state" className='theme-color f-14 axiformaSemiBold mb-3 d-block'>State/Region</label>
                            <input type="text" name="state" id="state" placeholder='State/Region' className='w-100 h-40 border form-control text-black focus:outline-none rounded px-3 py-3' />
                        </div>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="postalcode" className='theme-color f-14 axiformaSemiBold mb-3 d-block'>Postal Code</label>
                        <input type="number" name="postalcode" id="postalcode" placeholder='Postal Code' className='w-100 h-40 border form-control text-black focus:outline-none rounded px-3 py-3' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="mstates" className='theme-color f-14 axiformaSemiBold mb-3 d-block'>Does your company install in multiple states?</label>
                        <Select options={stateOptions} className='h-40' classNamePrefix="select" styles={selectStyles} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="offices" className='theme-color f-14 axiformaSemiBold mb-3 d-block'>Number of offices</label>
                        <Select options={officeOptions} className='h-40' classNamePrefix="select" styles={selectStyles} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="establish" className='theme-color f-14 axiformaSemiBold mb-3 d-block'>Year established</label>
                        <input type="number" name="estrablish" id="establish" placeholder='Your establish' className='w-100 h-40 border form-control text-black focus:outline-none rounded px-3 py-3' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="goal" className='theme-color f-14 axiformaSemiBold mb-3 d-block'>What are your monthly sales goals for the upcoming year?</label>
                        <textarea name="goal" id="goal" cols="10" rows="3" className='w-100 border form-control text-black focus:outline-none rounded px-3 py-3' ></textarea>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="hearabout" className='theme-color f-14 axiformaSemiBold mb-3 d-block'>How did you hear about us?</label>
                        <Select options={hearOptions} className='h-40' classNamePrefix="select" styles={selectStyles} />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="promocode" className='theme-color f-14 axiformaSemiBold mb-3 d-block'>Promo code</label>
                        <input type="number" name="promocode" id="promocode" placeholder='Enter Promo code' className='w-100 h-40 border form-control text-black focus:outline-none rounded px-3 py-3' />
                    </div>
                    <div>
                        <button type="button" className={'btn text-white px-5 h-40 f-16 ' + `${styles.editButton}`}>Edit</button>
                        <button type="button" className="btn text-white bg-button px-5 h-40 f-16 ms-3 ">Save</button>
                    </div>
                </div>
                : null
            }
            {activeTab === 'Profile' ?
                <div className='border container rounded-20 p-40 my-5'>
                    <div className='mb-3'>
                        <label htmlFor="cdetails" className='theme-color f-14  axiformaSemiBold mb-3 d-block'>Company Details</label>
                        <input type="text" name="cdetails" id="cdetails" placeholder='Company Details' className='w-100 h-40 form-control border text-black focus:outline-none rounded px-3 py-3' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="reason" className='theme-color f-14 axiformaSemiBold mb-3 d-block '>Why you should choose us</label>
                        <input type="text" name="reason" id="reason" placeholder='Add Text here....' className='w-100 h-40 border form-control text-black focus:outline-none rounded px-3 py-3' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="address" className='theme-color f-14 axiformaSemiBold mb-3 d-block '>Office Address</label>
                        <input type="text" name="address" id="address" placeholder='Enter Address' className='w-100 h-40 border form-control text-black focus:outline-none rounded px-3 py-3' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="stateServe" className='theme-color f-14 axiformaSemiBold mb-3 d-block'>State served</label>
                        <Select options={stateOptions} className='h-40' classNamePrefix="select" styles={selectStyles} />
                    </div>
                </div>
                : null
            }
            </div>
        </>
    );
};

export default Index;
