import styled from "styled-components";

export const BenefitContainer = styled.div`
width: 100%;
height: 382px;
color: #fff;
background-color: #fcfaf8;
background-image: linear-gradient(#0f0f0f 55%, #fcfaf8 55%);
display: flex;
align-items: center;
justify-content: center;
gap: 1rem;
transition: all 0.3s;

div:hover {
transform: translateY(-5px);
}
`
export const Container = styled.div`
max-width: 72.75rem;
height: 372px;
margin-left: auto;
margin-right: auto;
padding-left: 1.25rem;
padding-right: 1.25rem;
`

export const BenefitsWraper = styled.div`
width: 100%;
height: 372px;
grid-column-gap: 1rem;
grid-row-gap: 1rem;
display: flex;

`
export const FlexColum = styled.div`
width: 270px;
height: 372px;
flex: 1 1 0;
`
export const BenefitsItem = styled.div`
width: 270px;
height: 372px;
grid-column-gap: 16px;
grid-row-gap: 16px;
color: #fff;
cursor: pointer;
background-image: linear-gradient( to top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.3) );
border-radius: 1.25rem;
grid-template-rows: 100%;
grid-template-columns: 1fr;
grid-auto-columns: 1fr;
padding: 1px;
text-decoration: none;
transition: all 0.3s;

`
export const ContainerItemWraper = styled.div`
width: 267px;
height: 369px;
height: 100%;
background-color: #161617;
border-radius: 1.25rem;
flex-direction: column;
display: flex;

`
export const BenefitsPicture = styled.div`
width: 267px;
height: 213px;
position: relative;


img {
width: 100%;
height: auto;
max-height: 100%;
max-width: 100%;
}
`
export const Title = styled.div`
padding: 0.75rem 1.5rem 0.25rem;


h2 {
margin-top: 0;
margin-bottom: 0;
font-weight: 400;
    
}
`
export const ItemText = styled.div`
padding: 0.75rem 1.5rem 0.25rem;
width: 267px;
height: 112px;

p {
    width: 218px;
    height: 72px;
    color: #8f8f90;
    margin-bottom: 1.5rem;
    font-size: 0.875rem;
    line-height: 1.1375rem; 
}
`