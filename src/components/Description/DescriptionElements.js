import styled from "styled-components";

export const DescriptionContainer = styled.div`
  float:left;
  width:50vw;
  height: 300vh;
  max-height: 500px;
  margin: 0 4rem 1rem;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: left;
  color: #696969;
  text-align: left;

  h1 {
    align-items: center;
    text-align: center;
    margin: 2rem;
    ont-size: clamp(0.7rem, 1.5vw, 1rem);
    color: #696969;
  }
  h2 {
    margin: 0.4rem 4rem ;
    font-size: clamp(0.6rem, 1.5vw, 1rem);
    color: #696969;
  }
  p {
    margin: 0 4rem 3rem;
    font-size: clamp(0.5rem, 1.5vw, 1rem);
    color: #696969;
  }
`;