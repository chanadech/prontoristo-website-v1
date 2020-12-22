import styled from "styled-components";

export const DescriptionContainer = styled.div`
  background: 
  linear-gradient(
      to right,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.3)
    );
  width:50vw;
  height: 300vh;
  max-height: 400px;
  margin: 0 4rem;
  margin-bottom:1rem;
  margin-top:2rem;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: left;
  color: #ffffff;
  text-align: left;

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