import {Route, Routes } from "react-router-dom";
import Homemain from "./component/home-page";
import Cartpage from "./component/addtocart-page";
import Loginpage from "./component/Login-page"
import Staffpage from "./component/Staff-page"
import Membershippage from "./component/Memberships-page"
import Promotionpage from "./component/Promotions";
import Giftcards from "./component/Gift-cards";
import Giftform from "./component/GIft-card-form";
import Bkssystem from "./component/booking-system-setup-one";
import Bookingtemplettwo from "./component/booking-system-setup-two";
import Bookingtempletthrd from "./component/booking-system-setup-thrd";
import Bookingtempletfour from "./component/booking-system-setup-four";
import Bookingtempletverify from "./component/booking-system-verify";
import Bookingunperson from "./component/booking-inperson";
import Bookingcardtemplet from "./component/booking-system-credit-card";
import Appointmentbooked from "./component/Appointment-booked"


function Navbar() {
    return ( 
        <Routes>
            <Route  path="/AR" element={<Homemain />} />
            <Route  path="/AR/addtocart-page" element={<Cartpage />} />
            <Route  path="/AR/Login-page" element={<Loginpage />} />
            <Route  path="/AR/Staff-page" element={<Staffpage />} />
            <Route  path="/AR/Memberships-page" element={<Membershippage />} />
            <Route  path="/AR/Promotions" element={<Promotionpage />} />
            <Route  path="/AR/Gift-cards" element={<Giftcards />} /> 
            <Route  path="/AR/Gift-card-form" element={<Giftform />} /> 
            <Route  path="/AR/booking-system-setup-one" element={<Bkssystem />} />
            <Route  path="/AR/booking-system-setup-two" element={<Bookingtemplettwo />} />
            <Route  path="/AR/booking-system-setup-thrd" element={<Bookingtempletthrd />} />
            <Route  path="/AR/booking-system-setup-four" element={<Bookingtempletfour />} />
            <Route  path="/AR/booking-system-verify" element={<Bookingtempletverify />} />
            <Route  path="/AR/booking-inperson" element={<Bookingunperson />} />
            <Route  path="/AR/booking-system-credit-card" element={<Bookingcardtemplet />} />
            <Route  path="/AR/Appointment-booked" element={<Appointmentbooked/>} />
        </Routes>
     );
}

export default Navbar;
