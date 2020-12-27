import { Link } from "react-router-dom";
import styled from "styled-components";

export const PricingSection = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fafafa;
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PricingHeading = styled.h1`
  color: #000;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const PricingCard = styled(Link)`
  background: #ff9439;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 280px;
  height: 500px;
  text-decoration: none;
  border-radius: 4px;

  &:nth-child(2) {
    margin: 24px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

export const PricingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #fff;
`;

export const PricingCardIcon = styled.div`
  margin: 24px 0;
`;

export const PricingCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 40px;
`;

export const PricingCardCost = styled.h4`
  font-size: 24px;
`;

export const PricingCardLength = styled.p`
  font-size: 20px;
  margin: 25px;
  /* margin-bottom: 24px; */
  padding: 3%;
`;

export const PricingCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`;

export const PricingCardFeature = styled.li`
  margin-bottom: 10px;
`;

// export const PricingHeadingContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;
//   padding: 0;
//   margin: 0;
//   box-sizing: border-box;
// `;
// export const PricingHeadingSpan = styled.span`
//   margin: 0 15px;
//   line-height: 0.7;
//   text-shadow: 0 0 2px rgba(0, 0, 0, 0.45);
//   animation: span 3s ease-in infinite alternate;
// `;

// export const span = styled.div`
//   display: inline-flex;
//   height: 30px;
//   width: 27px;
//   /* border: 2.5px solid #FF1EAD; */
//   border: 2.35px solid black;
//   border-radius: 14px;
//   box-shadow: 0 0 2px rgba(0, 0, 0, 0.75), inset 0 0 2px rgba(0, 0, 0, 0.45);
//   animation: letter 3s ease-in-out infinite alternate;
// `;

// exportconst letter = keyframes`
// 0%, 30% {
//   margin: 0 15px;
// }
// 70%, 100% {
//   margin: 0 5px;
// }
// }
// `;

// const 
