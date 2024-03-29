import Head from 'next/head';
import React from 'react';
import banner from '../../images/registerBanner1.png';
import banner2 from '../../images/registerBanner2.png';
import Image from 'next/image';
import Select from 'react-select';
import { selectStyles } from '../../constant';

const Index = () => {

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
                <title>Register</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='my-5 container cu-container pt-4'>
                <div id="carouselExampleFade" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item ">
                            <div className='d-flex justify-content-between align-items-center d-block w-100'>
                                <Image src={banner2} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <div className="carousel-item active">
                            <div className='position-relative'>
                                <Image src={banner} alt='register' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border rounded-20 p-40 mt-4'>
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
                    <button type="button" className="btn text-white bg-button px-5 h-40 f-14 d-flex justify-content-center align-items-center">Submit</button>
                </div>
            </div>
        </>
    );
};

export default Index;
