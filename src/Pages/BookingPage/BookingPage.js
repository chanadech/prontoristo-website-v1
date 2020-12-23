import React from "react";
import { GlobalStyle } from "../../globalStyles";
import Restaurant from "../../components/Restaurant";
import Description from "../../components/Description";
import Packages from "../../components/Packages";
import GoogleMaps from "../../components/GoogleMaps";
import Booking from "../../components/Booking";

function BookingPage() {
  return (
    <div>
        <GlobalStyle />
        <Restaurant />
        <Description />
        <Booking />
        <Packages />
        <GoogleMaps/> 
    </div>
    );
}

export default BookingPage;
