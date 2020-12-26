import styled from "styled-components";

export const PackagesContainer = styled.div`

width:40vw;
height: 100vh;
max-height: 200px;
margin: 2rem 8rem 1rem;
background-position: center;
background-size: cover;
display: flex;
flex-direction: column;
align-items: left;
color: #ffffff;
text-align: left;
padding: 0 1rem;

h1 {
  align-items: center;
  text-align: center;
  ont-size: clamp(0.7rem, 1.5vw, 1rem);
  color: #696969;
  margin-bottom: 0.5rem;
}
  p {
    margin: 0.5rem 0 0.5rem;
    font-size: clamp(1rem, 1.5vw, 1rem);
    color: #000000;
  }
`;
export const PackagesChoice = styled.div`
  align-items: center;
  text-align: center;
  font-size: 1.2rem;
  float:center;
  border: 2px solid;
  border-radius: 3px;
  border-color: gray;
  transition: 0.2s ease-out;
  color: #696969
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
`;
