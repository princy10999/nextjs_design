import Head from "next/head";
import Image from "next/image";
import React from "react";
import Message from "../../images/message.svg";
import pdfIcon from "../../images/pdfIcon.svg";
import { Button, Col, Row, UncontrolledAccordion, AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";
import User from "../../images/user-square.svg";
import dollar from "../../images/dollar.svg";
import bill from "../../images/bill.svg";
import roof from "../../images/roof.svg";
import toolbox from "../../images/toolbox.svg";
import charging from "../../images/charging.svg";
import electricPlug from "../../images/electricPlug.svg";

const Inquiries = () => {
    return (
        <>
            <Head>
                <title>Inquiries</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='my-5 container pt-4'>
                <div className="d-flex justify-content-end mb-3">
                    <div className="d-flex">
                        <div className="bg-button message justify-content-center d-flex align-items-center p-2 h-40 me-2 me-sm-4"><Image src={Message} alt='image' /></div>
                        <Button className="accepted me-2 me-sm-3 focus:none h-40 axiformaMedium">Accepted</Button>
                        <button type='button' className='f-18 h-40 border-0 rounded-3 text-center text-nowrap mx-auto d-block px-2 px-sm-4 theme-bg-color axiformaMedium text-light' >Submit a proposal</button>
                    </div>
                </div>
                <div className=" border rounded-20 p-4 mb-4">
                    <Row>
                        <Col lg={6} className='d-flex align-items-center justify-content-between d-lg-block'>
                            <p className="f-20 theme-color me-3 me-lg-0 axiformaSemiBold mb-1">Customer Details</p>
                            <Image className="w-30" src={User} alt='image' />
                        </Col>
                        <Col lg={6} className="mt-2">
                            <UncontrolledAccordion defaultOpen={['1', '2', '3']} stayOpen >
                                <AccordionItem>
                                    <AccordionHeader targetId="1">
                                        <div className="d-flex f-14 justify-content-between align-items-center">
                                            <span className="f-14 text-gray axiformaSemiBold d-inline-block w-100 w-lg-50">Customer Personal Details and Budget</span>
                                        </div>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="1">
                                        <div className="d-flex justify-content-between">
                                            <ul className="p-0">
                                                <li className="f-14 text-gray axiformaSemiBold mb-2">Name</li>
                                                <li className="f-14 text-gray axiformaSemiBold mb-2">Address</li>
                                                <li className="f-14 text-gray axiformaSemiBold mb-2">Contact preference</li>
                                                <li className="f-14 text-gray axiformaSemiBold mb-2">Contact Number</li>
                                                <li className="f-14 text-gray axiformaSemiBold mb-2">Availability</li>
                                                <li className="f-14 text-gray axiformaSemiBold mb-2">Est Budget</li>
                                            </ul>
                                            <ul className="p-0">
                                                <li className="f-14 theme-color axiformaSemiBold mb-2">John Doe</li>
                                                <li className="f-14 theme-color axiformaSemiBold mb-2">123, Lorem ipsum dolor, lorem.</li>
                                                <li className="f-14 theme-color axiformaSemiBold mb-2">Over Email</li>
                                                <li className="f-14 theme-color axiformaSemiBold mb-2">+91 9595959595</li>
                                                <li className="f-14 theme-color axiformaSemiBold mb-2">Office Hours</li>
                                                <li className="f-14 theme-color axiformaSemiBold mb-2">$32,400</li>
                                            </ul>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                            </UncontrolledAccordion>
                        </Col>
                    </Row>
                </div>
                <div className=" border rounded-20 p-4 mb-4">
                    <Row>
                        <Col lg={6} className='d-flex d-lg-block align-items-center justify-content-between'>
                            <p className="f-20 theme-color me-3 me-lg-0 axiformaSemiBold mb-1">Electricity Bill</p>
                            <Image className="w-30" src={bill} alt='image' />
                        </Col>
                        <Col lg={6} className="mt-2">
                            <p className="f-14 text-gray  axiformaSemiBold">Your electric bill document</p>
                            <Image className="w-30" src={pdfIcon} alt='image' />
                        </Col>
                    </Row>
                </div>
                <div className=" border rounded-20 p-4 mb-4">
                    <Row>
                        <Col lg={6} className='d-flex d-lg-block align-items-center justify-content-between'>
                            <p className="f-20 theme-color me-3 me-lg-0 axiformaSemiBold mb-1">Roof plans</p>
                            <Image className="w-30" src={roof} alt='image' />
                        </Col>
                        <Col lg={6} className="mt-2">
                            <UncontrolledAccordion defaultOpen={['1', '2', '3']} stayOpen >
                                <AccordionItem>
                                    <AccordionHeader targetId="2">
                                        <div className="d-flex f-14 justify-content-between align-items-center">
                                            <span className="f-14 text-gray axiformaSemiBold d-inline-block">Your Roof Plans</span>
                                        </div>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="2">
                                        <div className="d-flex justify-content-between">
                                            <ul className="p-0">
                                                <li className="f-14 text-gray axiformaSemiBold mb-2">Property Type</li>
                                                <li className="f-14 text-gray axiformaSemiBold mb-2">Roof Type</li>
                                                <li className="f-14 text-gray axiformaSemiBold mb-2">Grid</li>
                                                <li className="f-14 text-gray axiformaSemiBold mb-2">Roof Area</li>
                                                <li className="f-14 text-gray axiformaSemiBold mb-2">Roof plan document  </li>
                                                <Image className="w-30" src={pdfIcon} alt='image' />
                                            </ul>
                                            <ul className="p-0">
                                                <li className="f-14 theme-color axiformaSemiBold mb-2">Residential</li>
                                                <li className="f-14 theme-color axiformaSemiBold mb-2">Slopped</li>
                                                <li className="f-14 theme-color axiformaSemiBold mb-2">On Grid</li>
                                                <li className="f-14 theme-color axiformaSemiBold mb-2">100 square meter</li>
                                            </ul>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                            </UncontrolledAccordion>
                        </Col>
                    </Row>
                </div>
                <div className=" border rounded-20 p-4 mb-4">
                    <Row>
                        <Col lg={6} className='d-flex d-lg-block align-items-center justify-content-between'>
                            <p className="f-20 theme-color me-3 me-lg-0 axiformaSemiBold mb-1">Ownership & financing</p>
                            <Image src={dollar} className="w-30" alt='image' />
                        </Col>
                        <Col lg={6} className="mt-2">
                            <UncontrolledAccordion defaultOpen={['1', '2', '3']} stayOpen >
                                <AccordionItem>
                                    <AccordionHeader targetId="3" >
                                        <div className="d-flex f-14 justify-content-between align-items-center">
                                            <span className="f-14 text-gray axiformaSemiBold d-inline-block">Financing options</span>
                                        </div>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="3">
                                        <div className="d-flex justify-content-between">
                                            <ul className="p-0">
                                                <li className="f-14 text-gray axiformaSemiBold mb-2">Financing</li>
                                                <li className="f-14 text-gray axiformaSemiBold mb-2">Installation Cost</li>
                                            </ul>
                                            <ul className="p-0">
                                                <li className="f-14 theme-color axiformaSemiBold mb-2">No Preference</li>
                                                <li className="f-14 theme-color axiformaSemiBold mb-2">$0</li>
                                            </ul>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                            </UncontrolledAccordion>
                        </Col>
                    </Row>
                </div>
                <div className=" border rounded-20 p-4 mb-4">
                    <Row>
                        <Col lg={6} className='d-flex d-lg-block align-items-center justify-content-between'>
                            <p className="f-20 theme-color me-3 me-lg-0 axiformaSemiBold mb-1">Roof Age</p>
                            <Image src={roof} className="w-30" alt='image' />
                        </Col>
                        <Col lg={6} className="mt-2">
                            <div className="d-flex f-14 justify-content-between align-items-center mb-2">
                                <span className="f-14 text-gray axiformaSemiBold">Age of your roof</span>
                                <span className="f-14 theme-color axiformaSemiBold">More than 20 years</span>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className=" border rounded-20 p-4 mb-4">
                    <Row>
                        <Col lg={6} className='d-flex d-lg-block align-items-center justify-content-between'>
                            <p className="f-20 theme-color me-3 me-lg-0 axiformaSemiBold mb-1">Solar Equipment</p>
                            <Image src={toolbox} className="w-30" alt='image' />
                        </Col>
                        <Col lg={6} className="mt-2">
                            <div className="d-flex f-14 justify-content-between align-items-center mb-2">
                                <span className="f-14 text-gray axiformaSemiBold">Equipment </span>
                                <span className="f-14 theme-color axiformaSemiBold">Most advanced technology </span>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className=" border rounded-20 p-4 mb-4">
                    <Row>
                        <Col lg={6} className='d-flex d-lg-block align-items-center justify-content-between'>
                            <p className="f-20 theme-color me-3 me-lg-0 axiformaSemiBold mb-1">Energy Interests</p>
                            <Image className="w-30" src={electricPlug} alt='image' />
                        </Col>
                        <Col lg={6} className="mt-2">
                            <div className="d-flex f-14 justify-content-between align-items-center mb-2">
                                <span className="f-14 text-gray axiformaSemiBold  w-50">Energy products or services</span>
                                <span className="f-14 theme-color axiformaSemiBold">Smart home products</span>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className=" border rounded-20 p-4 mb-4">
                    <Row>
                        <Col lg={6} className='d-flex d-lg-block align-items-center justify-content-between'>
                            <p className="f-20 theme-color me-3 me-lg-0 axiformaSemiBold mb-1">Battery Storage</p>
                            <Image className="w-30" src={charging} alt='image' />
                        </Col>
                        <Col lg={6} className="mt-2">
                            <div className="d-flex f-14 justify-content-between align-items-center mb-2">
                                <span className="f-14 text-gray axiformaSemiBold w-100 w-lg-50">Interested in batteries for home energy storage?</span>
                                <span className="f-14 theme-color axiformaSemiBold">Yes, please provide</span>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}
export default Inquiries;