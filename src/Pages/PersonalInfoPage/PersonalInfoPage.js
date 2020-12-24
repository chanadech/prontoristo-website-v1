import React from "react";
import { GlobalStyle } from "../../globalStyles";
import InfoTop from "../../components/InfoTop";
import GuestInfo from "../../components/GuestInfo";
import Packages from "../../components/Packages";
import Booking from "../../components/Booking";
import ScrollToTop from "../ScrollToTop";
function PersonalInfoPage() {
  return (
    <ScrollToTop>
    <div>
        <GlobalStyle />
        <InfoTop />
        <GuestInfo />
        <Booking />
        <Packages />
    </div>
    </ScrollToTop>
    );
}

export default PersonalInfoPage;
