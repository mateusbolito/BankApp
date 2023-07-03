import styled from "styled-components";

export const ContainerHeader = styled.header`
width: 100%;
height: 200px;
color: #fff;
background-image: linear-gradient( #101010, rgba(20, 20, 20, 0.69) 20%, rgba(23, 23, 23, 0.4) 45%, rgba(27, 27, 27, 0.1) 80%, rgba(28, 28, 28, 0) );
padding-top: 1.5rem;
padding-bottom: 1.5rem;
position: absolute;
top: 0%;
bottom: auto;
left: 0%;
right: 0%;
`

export const HeaderDiv = styled.div`
max-width: 72.75rem;
margin-left: auto;
margin-right: auto;
padding-left: 1.25rem;
padding-right: 1.25rem;
`
export const HeaderWrap = styled.div`
grid-column-gap: 2rem;
grid-row-gap: 1.5rem;
justify-content: space-between;
align-items: center;
display: flex;

a {
max-width: 100%;
display: inline-block;
color: #0f0f0f;


img {
width: 150px;
height: 20px;
margin-top: 10px;
height: auto;
display: inline-block;
}
}
`
export const MenuHeader = styled.div`
width: 2180px;
height: 55px;
grid-column-gap: 35px;
grid-row-gap: 35px;
align-items: center;
margin-left: 300px;
display: flex;

a{
max-width: 100%;
display: inline-block;
color: #ffff;
}

button {
width: 120px;
height: 35px;
color: #fff;
border: 1px solid #fff;
border-radius: 2rem;
padding-left: 1.25rem;
padding-right: 1.25rem;
line-height: 2rem;
text-decoration: none;
text-align: center;
background: transparent;
font-size: 15px;
}

button:hover {
background-color: #434;
}
a:hover {
color: #434;
}
`

export const MenuPt = styled.div`
width: 117px;
height: 34px;
cursor: pointer;
background-color: #22140e;
border: 1px solid #edeef2;
border-radius: 3rem;
padding: 1px;

a{
    color: #fff;
    padding-left: 1rem;
    padding-right: 1rem;
    line-height: 2rem;
    text-decoration: none;
}
.None {
    background-color:  #434;
    background-image: linear-gradient(#fff, #bcbcbc);
    border: 1px  #434;
    border-radius: 3rem;
    margin-left: 0.125rem;
    margin-right: 0.125rem;
    padding-left: 1rem;
    padding-right: 1rem;
    line-height: 1.75rem;
    text-decoration: none;
    width: 50px;
    height: 29px;
}
`

export const ContainerMain = styled.div`
margin-top: 100px;
max-width: 72.75rem;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
`
export const MainContent = styled.div`
grid-column-gap: 1vw;
    grid-row-gap: 3rem;
    align-items: center;
    display: flex;
`
export const ColumWraper = styled.div`
flex: 1 1 0;
`

export const ColumFlex = styled.div`
width: 555px;
height: 555px;
grid-row-gap: 1.5rem;
    flex-direction: column;
    display: flex;

    h1 {
    flex-direction: column;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 4.25rem;
    font-weight: 400;
    line-height: 4.25rem;

    span {
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(to right, #fff, #434, 85%, #e2927c 104%);
    -webkit-background-clip: text;
    }
}
    
`
export const Paragrafo = styled.div`
max-width: 85%;
    color: #bcbcbc;
    font-size: 1.25rem;
    line-height: 1.75rem;
`
export const AppLogos = styled.div`
width: 555px;
height: 488px;
flex: 1 1 0;


img {
    width: 100%;
    height: auto;
    max-height: 100%;
    max-width: 100%;
    display: inline-block;
    animation: float 5s ease-in-out infinite;
    
}


    transform: matrix3d(24cg);
    @keyframes float {
    0% {
         transform: translateY(0px);
    } 50% {
        transform: translateY(-30px);
    } 100% {
        transform: translateY(0px);
    }
}
`