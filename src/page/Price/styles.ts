
import styled from "styled-components";

export const ContainerPrice = styled.div`
background-color: #fff;
height: 700px;
width: 100%;

h2 {
color: #000;
text-align: center;
margin-top: 0;
margin-bottom: 0;
font-size: 3.5rem;
font-weight: 400;
line-height: 3.5rem;
}

p {
text-align: center;
color: #525252;
margin-top: 0.75rem;
margin-bottom: 2rem;
font-size: 1.25rem;
line-height: 1.75rem;
}
`

export const ContainerUl = styled.ul`
margin: 0px auto;
padding: 35px 0px;
display: flex;
flex-wrap: nowrap;
-webkit-box-pack: center;
justify-content: center;
gap: 30px;
overflow-x: scroll;
  

    li {
        
margin: 0 auto;
padding: 35px 0;
display: flex;
flex-wrap: nowrap;
justify-content: center;
grid-gap: 30px;
gap: 30px;
overflow-x: scroll;
    
 }
`
export const TitleContainer = styled.div`
border: 1px solid #000;
margin: 0px;
display: flex;
flex-direction: column;
gap: 10px;
width: 230px;
min-height: 200px;
padding: 20px 15px;
background: rgba(255, 255, 255, 0.8);
border-radius: 20px;
outline: transparent solid 2px;

h3 {
color: #333;
text-align: center;
font-size: 25px;
}
span{
margin-top: 10px;
text-align: center;
color: #000;
font-size: 20px;
}
p {
color: #59595a;
margin-top: 1rem
 }
 a {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin-top: 1rem;
    max-width: 315px;
    border-radius: 26px;
    border: 0px;
    font-size: 17px;
    line-height: 21px;
    text-align: center;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    border: 1px solid #000;
    color: #000
 }
 a:hover {
background-color: #333;
color: #fff;
 }
`