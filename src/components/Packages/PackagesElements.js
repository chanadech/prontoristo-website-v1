import styled from "styled-components";

export const PackagesContainer = styled.div`
background: 
linear-gradient(
    to right,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.3)
  );
width:40vw;
height: 100vh;
max-height: 200px;
margin: 0 9rem;
margin-bottom:1rem;
margin-top:2rem;
background-position: center;
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
color: #ffffff;
text-align: center;
padding: 0 1rem;

  h1 {
    font-size: clamp(1rem, 3vw, 2rem);
    color: #000000;
  }
  p {
    margin-top: 1rem;
    font-size: clamp(1rem, 1.5vw, 1rem);
    color: #000000;
  }
`;
export const PackagesButton = styled.button`
  font-size: 1.2rem;
  padding: 0.5rem 2.5rem;
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
