import React from "react";
import 'react-multi-carousel/lib/styles.css';
// import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { ImUserPlus } from "react-icons/im";
import amberbaker from '../img/AMBER-BAKER.webp'

function Bookingtempletthrd() {
    return ( 
        <div className="services_page" id="services987">
            <div className="container">
                <div className="row loction_w_ourtem">
                    <div className="col-9 only_winfo">
                        <div className="productlists booking_info_right">
                            <h1 className="back_line">Book an Appointment</h1>
                            <div className="form_setup_loction">
                                <div className="row">
                                    <div className="col back_lines">
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
                                    <div className="col back_lines" style={{background: "#68c9cc2e"}}>
                                        <div className="point_number">
                                            <span style={{background: "#68c9cc"}}>3</span>
                                        </div>
                                        <div className="form_name">
                                            <span>Select Provider</span>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="point_number">
                                            <span>4</span>
                                        </div>
                                        <div className="form_name">
                                            <span>Select Date & Time</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Promotions_infoboxs">
                                <h5 style={{color: "#000"}}>Please select one provider.</h5>
                                <div className="row thrd_boxes">
                                    <div className="col">
                                        <div className="provider_name_info">
                                            <div className="provider_icon_name">
                                                <div className="provider_fc">
                                                    <ImUserPlus />
                                                </div>
                                                <div className="provider_dp">
                                                    <h6 style={{color: "#68C9CC"}}>Book with first available!</h6>
                                                </div>
                                            </div>
                                            <div className="provider">
                                                <h6>Not sure which staff member to choose?
                                                    Select this option to find first available
                                                    provider for your service....<Link to="" style={{color: "#68C9CC"}}>Read more</Link>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col" style={{background: "#68c9cc2e"}} >
                                        <div className="provider_name_info">
                                            <div className="provider_icon_name">
                                                <div className="provider_fcs">
                                                <img src={amberbaker} className="sitlogo" alt="sitelogo"  width="60px" />
                                                </div>
                                                <div className="provider_dp">
                                                    <h5 style={{color: "#525252"}}>Amber Baker</h5>
                                                    <h6 style={{color: "#757575"}}>Family Nurse Practitioner</h6>
                                                </div>
                                            </div>
                                            <div className="provider">
                                                <h6>Not sure which staff member to choose?
                                                    Select this option to find first available
                                                    provider for your service....<Link to="" style={{color: "#68C9CC"}}>Read more</Link>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="provider_name_info">
                                            <div className="provider_icon_name">
                                                <div className="provider_fcs">
                                                <img src={amberbaker} className="sitlogo" alt="sitelogo"  width="60px" />
                                                </div>
                                                <div className="provider_dp">
                                                    <h5 style={{color: "#525252"}}>Amber Baker</h5>
                                                    <h6 style={{color: "#757575"}}>Family Nurse Practitioner</h6>
                                                </div>
                                            </div>
                                            <div className="provider">
                                                <h6>Not sure which staff member to choose?
                                                    Select this option to find first available
                                                    provider for your service....<Link to="" style={{color: "#68C9CC"}}>Read more</Link>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row thrd_boxes">
                                    <div className="col">
                                        <div className="provider_name_info">
                                            <div className="provider_icon_name">
                                                <div className="provider_fcs">
                                                <img src={amberbaker} className="sitlogo" alt="sitelogo"  width="60px" />
                                                </div>
                                                <div className="provider_dp">
                                                    <h5 style={{color: "#525252"}}>Amber Baker</h5>
                                                    <h6 style={{color: "#757575"}}>Family Nurse Practitioner</h6>
                                                </div>
                                            </div>
                                            <div className="provider">
                                                <h6>Not sure which staff member to choose?
                                                    Select this option to find first available
                                                    provider for your service....<Link to="" style={{color: "#68C9CC"}}>Read more</Link>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="provider_name_info">
                                            <div className="provider_icon_name">
                                                <div className="provider_fcs">
                                                <img src={amberbaker} className="sitlogo" alt="sitelogo"  width="60px" />
                                                </div>
                                                <div className="provider_dp">
                                                    <h5 style={{color: "#525252"}}>Amber Baker</h5>
                                                    <h6 style={{color: "#757575"}}>Family Nurse Practitioner</h6>
                                                </div>
                                            </div>
                                            <div className="provider">
                                                <h6>Not sure which staff member to choose?
                                                    Select this option to find first available
                                                    provider for your service....<Link to="" style={{color: "#68C9CC"}}>Read more</Link>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="provider_name_info">
                                            <div className="provider_icon_name">
                                                <div className="provider_fcs">
                                                <img src={amberbaker} className="sitlogo" alt="sitelogo"  width="60px" />
                                                </div>
                                                <div className="provider_dp">
                                                    <h5 style={{color: "#525252"}}>Amber Baker</h5>
                                                    <h6 style={{color: "#757575"}}>Family Nurse Practitioner</h6>
                                                </div>
                                            </div>
                                            <div className="provider">
                                                <h6>Not sure which staff member to choose?
                                                    Select this option to find first available
                                                    provider for your service....<Link to="" style={{color: "#68C9CC"}}>Read more</Link>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="priview_next">
                                <div className="row">
                                    <div className="col">
                                        <Link class="buttons_sites_all" to="/AR/booking-system-setup-two">&#8249; &nbsp; Previous</Link>
                                    </div>
                                    <div className="col butn_end">
                                        <Link class="buttons_sites_all" to="/AR/booking-system-setup-four">Next &nbsp; &#8250;</Link>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
                    <div className="col-3 loction_winfo">
                        <div className="appiment_booking_leftside">
                        <div className="map_loction_time">
                                <h4><b>Location</b></h4>
                                <h6 style={{color: "#68c9cc"}}>Downtown Columbus, OH</h6>
                                <h4><b>Services</b></h4>
                                <h6 style={{color: "#68c9cc"}}>Partial Face Wrinkle Relaxers-Jeuveau/<br/>Dysport/ Botox (1 -2 areas)</h6>
                                <h6 style={{color: "#68c9cc"}}>Wrinkle Relaxers for Hyperhidrosis</h6>
                                <h6 style={{color: "#68c9cc"}}>Wrinkle Relaxers for First Time Clients <br/>(Jeuveau, Dysport, Botox)</h6>
                                <h4><b>Provider</b></h4>
                                <h4><b>Date & Time</b></h4>
                                <h4><b>Your Info</b></h4>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
        );
    }
    
    export default Bookingtempletthrd;