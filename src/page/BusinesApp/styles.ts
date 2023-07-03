import styled from "styled-components";

export const ContainerApp = styled.div`
width: 100%;
height: 1000px;
background-position: 50% 100%;
background-repeat: no-repeat;
background-size: auto;
padding-top: 25rem;
background-image: url(https://rauva.com/images/business_askedfor_bg.png);

`
export const ContainerContent = styled.div`
max-width: 72.75rem;
margin-left: auto;
margin-right: auto;
padding-left: 1.25rem;
padding-right: 1.25rem;
 
> div{
grid-column-gap: 3rem;
grid-row-gap: 3rem;
align-items: center;
display: flex;
}
`
export const BusinesImgage = styled.div`
width: 50%;
margin-top: -3rem;
margin-bottom: -3rem;

img {
width: 560px;
height: 600px;
    
}
`
export const Advantages = styled.div`
width: 427px;
height: 427px;
h2 {
color: #000;
margin-top: 0;
margin-bottom: 0;
font-size: 3.5rem;
font-weight: 400;
line-height: 3.5rem;
}

ul {
color: #555352;
grid-row-gap: 1rem;
flex-direction: column;
margin-top: 2rem;
display: flex;
list-style: none;
padding-left: 0;

}
`