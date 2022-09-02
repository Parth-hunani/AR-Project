import React from "react";
import 'react-multi-carousel/lib/styles.css';
import { Link } from "react-router-dom";



function Bookingappoiment() {
    return ( 
        <div className="services_page" id="services987">
            <div className="container">
                <div className="row loction_w_ourtem">
                    <div className="col-6 only_winfo">
                        <div className="productlists booking_info_right">
                            <h1 className="back_line">Appointment Booked</h1>
                            <div className="form_setup_loction">
                                <div className="row">
                                    {/* <div className="col back_lines">
                                            <div className="point_number">
                                                <span style={{background: "#68c9cc"}}>1</span>
                                            </div>
                                            <div className="form_name">
                                                <span>Enter Your Information</span>
                                            </div>
                                    </div>
                                    <div className="col back_lines">
                                        <div className="point_number">
                                            <span style={{background: "#68c9cc"}}>2</span>
                                        </div>
                                        <div className="form_name">
                                            <span>Select Service(s)</span>
                                        </div>
                                    </div>
                                    <div className="col back_lines">
                                        <div className="point_number">
                                            <span style={{background: "#68c9cc"}}>3</span>
                                        </div>
                                        <div className="form_name">
                                            <span>Select Provider</span>
                                        </div>
                                    </div>
                                    <div className="col" style={{background: "#68c9cc2e"}}>
                                        <div className="point_number">
                                            <span style={{background: "#68c9cc"}}>4</span>
                                        </div>
                                        <div className="form_name">
                                            <span>Select Date & Time</span>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="Promotions_infoboxs">
                                <h5 style={{color: "#000"}}>Thanks for booking your appointment with Lovely Lines.<br/>
                                    Below are the appointment details for your reference.</h5>
                                    <div className="appiment_booking_leftsides">
                                <div className="map_loction_time">
                                        <h4 style={{color: "#000"}}><b>Location</b></h4>
                                        <h6 style={{color: "#68c9cc"}}>Downtown Columbus, OH</h6>
                                        <h4 style={{color: "#000"}}><b>Services</b></h4>
                                        <h6 style={{color: "#68c9cc"}}>Partial Face Wrinkle Relaxers-Jeuveau/Dysport/ Botox (1 -2 areas)</h6>
                                        <h6 style={{color: "#68c9cc"}}>Wrinkle Relaxers for Hyperhidrosis</h6>
                                        <h6 style={{color: "#68c9cc"}}>Wrinkle Relaxers for First Time Clients (Jeuveau, Dysport, Botox)</h6>
                                        <h4 style={{color: "#000"}}><b>Provider</b></h4>
                                        <h6 style={{color: "#68c9cc"}}>Amber Baker</h6>
                                        <h4 style={{color: "#000"}}><b>Date & Time</b></h4>
                                        <h6 style={{color: "#68c9cc"}}>Thu May 19th, 2022</h6>
                                        <h4 style={{color: "#000"}}><b>Your Info</b></h4>
                                        <h6 style={{color: "#68c9cc"}}>Jane Doe</h6>
                                        <h6 style={{color: "#68c9cc"}}>jane.doe@domain.com</h6>
                                        <h6 style={{color: "#68c9cc"}}>+1 212 456 7890</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="priview_next">
                                <div className="row">
                                    <div className="col">
                                        <Link class="buttons_sites_all" to="/AR">&nbsp;&nbsp; Add to Calendar&nbsp;&nbsp;</Link>
                                    </div>
                                    <h3>We look forward to seeing you then!</h3>
                                </div>
                            </div>
                        </div>    
                    </div>
                    <div className="col-6 loction_winfo">

                    </div>    
                </div>
            </div>
        </div>
        );
    }
    
    export default Bookingappoiment;