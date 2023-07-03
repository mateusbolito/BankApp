import styled from "styled-components";

export const ContainerProtegida = styled.div`
width: 100%;
height: 1050px;
color: #fff;
background-color: #131313;
padding-top: 6rem;
padding-bottom: 6rem; 
display: flex;


`
export const ContainerContentP = styled.div`
max-width: 72.75rem;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.25rem;
    padding-right: 1.25rem;

    > div {
    width: 100%;
    height: 530px;
    text-align: center;

    h2 {
        font-size: 32px;
    
}
    }
    h1 {
    text-align: center;
    }
    
`
export const ProtectWraper = styled.div`
width: 100%;
height: 372px;
grid-column-gap: 1.25rem;
grid-row-gap: 1.25rem;
margin-top: 3rem;
margin-bottom: 3rem;
display: flex;

 > div {
    width: 361px;
    height: 372px;
    flex: 1 1 0;
 }
`
export const ProtectItems = styled.div`
   width: 361px;
   height: 372px;
    background-color: #000;
    border-radius: 1.25rem;
    padding: 5rem 1.25rem 2.5rem;

    img {
    width: 76px;
    height: 76px;
    margin-bottom: 32px;
    }

    h3 {
    font-size: 23px;
    margin-top: 0;
    margin-bottom: auto;
    }
`
export const TitleProtect = styled.div`
width: 300px;
height: 67px;
color: #b8b8b8;
margin-top: 1.5rem;
`
export const ContainerExtra = styled.p`
color: #fff;
height: 250px;
    background-color: #000;
    background-position: 100% 0;
    background-image: url(https://rauva.com/images/rauva_testimonials_gradient.png);
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 1.25rem;
    margin-top: 3rem;
    padding: 6.75rem 3.75rem 3.75rem;

    h2 {
        font-size: 24px;
        text-align: center;
    }
`