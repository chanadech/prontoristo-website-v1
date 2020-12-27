import React from "react";
import { Button } from "../../globalStyles";
import { AiFillThunderbolt } from "react-icons/ai";
import { GiCrystalBars } from "react-icons/gi";
import { GiCutDiamond, GiRock } from "react-icons/gi";
import { GiFloatingCrystal } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingHeadingTop,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
} from "./Pricing.elements";
import "./pricingSpecial.css";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <div class="containerPrice">
            <h5>About us</h5>
            <div class="overlay"></div>
          </div>{" "}
          <PricingHeading>Why Pronto Risto ?</PricingHeading>
          <PricingContainer>
            <PricingCard to="/services">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond color="white" />
                </PricingCardIcon>
                <PricingCardPlan>Best Price</PricingCardPlan>
                <PricingCardCost>For customer</PricingCardCost>
                <PricingCardLength>
                  we decide to keep the best price for the customer
                </PricingCardLength>
                {/* <PricingCardFeatures>
                  <PricingCardFeature>100 New Users</PricingCardFeature>
                  <PricingCardFeature>$10,000 Budget</PricingCardFeature>
                  <PricingCardFeature>Retargeting analytics</PricingCardFeature>
                </PricingCardFeatures> */}
                {/* <Button primary>Choose Plan</Button> */}
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/services">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock color="white" />
                </PricingCardIcon>
                <PricingCardPlan>Best Deal</PricingCardPlan>
                <PricingCardCost>For the owner </PricingCardCost>
                <PricingCardLength>
                  we have the most cost-effective deal waiting for you
                </PricingCardLength>
                {/* <PricingCardFeatures>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button> */}
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/services">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars color="white" />
                </PricingCardIcon>
                <PricingCardPlan>Best Choice</PricingCardPlan>
                <PricingCardCost>For Everyone</PricingCardCost>
                <PricingCardLength>
                 we intend to be the best choice for you
                </PricingCardLength>
                {/* <PricingCardFeatures>
                  <PricingCardFeature>Unlimited Users</PricingCardFeature>
                  <PricingCardFeature>Unlimited Budget</PricingCardFeature>
                  <PricingCardFeature>24/7 Support</PricingCardFeature>
                </PricingCardFeatures> */}
                {/* <Button primary>Choose Plan</Button> */}
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
