import styled from "styled-components";
import { StyleSheet } from 'react-native'

export const GuestInfoContainer = styled.div`
  float:left;
  width:40vw;
  height: 300vh;
  max-height: 550px;
  margin: 0 8rem 2rem;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  text-align: center;

  h1 {
    align-items: center;
    text-align: center;
    ont-size: clamp(0.7rem, 1.5vw, 1rem);
    color: #696969;
    margin-bottom: 0.5rem;
  }
  p {
    margin-bottom: 1rem;
    margin: 0 4rem;
    alignItems:'center';
    font-size: clamp(0.5rem, 1.5vw, 1rem);
    color: #000000;
  }
`

export const GuestButton = styled.button`
font-size:1rem;
padding:1rem 4rem;
border: none;
background: #FF9439;
color: #fff;
border-radius:0.8rem;
transition : 0.2s ease-out;
position:relative;
font-family: 'aldo', sans-serif;
display:flex;
font-weight: bold;
&:hover {
  background: #ffc500;
  transition: 0.2s ease-out;
  cursor: pointer;
  color: #000;
}
`;

export const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 7,
    margin:7,
    width:300,
  }
});