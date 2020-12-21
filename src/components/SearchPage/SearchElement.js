import styled from "styled-components";
import FeaturePic from "../../images/bg_deal2.png";

export const FeatureContainer = styled.div`
  background: 
  linear-gradient(
      to right,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.1)
    ), url(${FeaturePic});
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;
  margin-bottom:3rem;


  h1 {
    font-size: clamp(2rem, 5vw, 5rem);
  }
  div {
      margin-top:0.5rem;
    font-size: clamp(1rem, 3vw, 2rem);  }
  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
  }
`;
export const FeatureButton = styled.button`
  font-size: 1.4rem;
  margin-top:5rem;
  margin-bottom:5rem;
  padding: 0.6rem 3rem;
  border: none;
  background: #ffc500;
  color: #000;
  transition: 0.2s ease-out;

  &:hover {
    color: #fff;
    background: #e31837;
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;
