import styled from "styled-components";

export const BookingContainer = styled.div`
  float:right;
  border: 2px solid black;
  border-radius: 3px;
  width:40vw;
  height: 300vh;
  max-height: 400px;
  margin-bottom:1rem;
  margin-top:2rem;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  text-align: center;
  

  h1 {
    margin-top: 1rem;
    margin: 1rem;
    font-size: clamp(1.1rem, 2vw, 1rem);
    color: #000000;
  }
  p {
    margin-bottom: 1rem;
    margin: 0 4rem;
    font-size: clamp(0.5rem, 1.5vw, 1rem);
    color: #000000;
  }
`;