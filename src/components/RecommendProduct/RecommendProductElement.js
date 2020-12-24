import styled from 'styled-components'

export const ProductContainer  = styled.div`
width:100vw;
min-height:100vh;
padding: 5rem calc((100vw - 1300px)/2);
background: #ffffff;





`;
export const ProductWrapper = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
margin:0 auto;


`;
export const ProductCard = styled.div`
margin: 0 2rem;
line-height:2;
width:300px;
background-color:#f2f2f2;
margin-top:2rem;
margin-bottom:1rem;
background-size:cover;
background-repeat:no-repeat;
  -webkit-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  top:0px;

`;

export const ProductImg  = styled.img`
display:flex;
align-items:center;
justify-content:center;
height:300px;
min-width:300px;
max-width: 100%;
box-shadow: 0px 8px 8px #707070;
`;

export const ProductHeading = styled.h1`
font-size: clamp(2rem,2.5vw,3rem);
text-align:center;
margin-bottom:5rem;
`;
export const ProductTitle = styled.h2`
font-weight: 700;
font-size:1.4em;
-webkit-font-smoothing: antialiased;
color: ##000

`;

export const ProductInfo = styled.div`
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:2rem;
text-align:center;
color:#000

`;
export const ProductDesc = styled.p`
margin-bottom:1rem; 
`;

export const ProductPrice = styled.p`
margin-bottom:1rem;
font-size:2rem;
`;

export const ProductButton = styled.button`
font-size:1rem;
padding:1rem 4rem;
border: none;
background: #FF9439;
x:#fff;
transition:0.2s ease-out;

&::hover{
    background:#ffc500;
    transition:0.2s ease-out;
    cursor:pointer;
    color:#ffffff;
}


`;


