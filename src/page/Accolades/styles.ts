import styled from "styled-components";

export const  AccoladesContainer = styled.div`
max-width: 100%;
margin-left: auto;
margin-right: auto;
padding-left: 1.25rem;
padding-right: 1.25rem;
align-items: center;
justify-content: center;
height: 900px;
background-color: #fff;


> div {
display: flex;
align-items: center;
justify-content: center;
img {

width: 110px ;
display: inline-block;
margin: 45px;
}
}

h1 {
color: #000;
}

`
export const PictureContainer = styled.div`
max-width: 39.5rem;
margin: 3rem auto -7.5rem;
padding-left: 2rem;
padding-right: 2rem;
display: block;
position: relative;
box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;

> div {
display: flex;
align-items: center;
justify-content: center;


img {
width: 90%;
position: relative;
height: auto;
margin-top: 5%
}
}

.card {
position: absolute;
width: 50%;
height: auto;
top: 0;
right: 5%;
}
`
export const TitleContainerContent = styled.div`
max-width: 100%;
margin-left: auto;
margin-right: auto;
padding-left: 1.25rem;
padding-right: 1.25rem;
margin-top: 150px;
width: 100%;
> div {
text-align: center;
width: 100%;

h1 {
    width: 100%;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 3.5rem;
    font-weight: 400;
    line-height: 3.5rem;
}
}
`
export const FeaturesWraper = styled.div`
grid-column-gap: 3rem;
grid-row-gap: 2rem;
display: flex;
align-items: center;
justify-content: center;
height: 500px;

`
export const ContainerFlex = styled.div`

width: 245px;
height: 200px;
`
export const BusinesItem = styled.div`
width: 245px;
height: 200px;
display: flex;
grid-row-gap: 0.75rem;
text-align: center;
flex-direction: column;
align-items: center;

img {
width: 66px;
height: 66px;
}

h3 {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.65rem;
}
p {
color: #525252;
}
p:hover {
color: #434;
}
`