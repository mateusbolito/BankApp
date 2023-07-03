import styled from "styled-components";

export const ContainerFooter = styled.div`
width: 100%;
height: 530px;
color: #fff;
background-color: #131313;
padding-top: 4rem;
padding-bottom: 1rem;
`
export const ContainerContent = styled.div`
width: 1164px;
height: 400px;
max-width: 72.75rem;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    h3 {
font-size: 16px;
margin-top: 10px;
color: #bdbdbd;
}

h3:hover {
color: #fff;
}
a:hover {
color: #fff;
}
`
export const FooterWraper = styled.div`
width: 1124px;
height: 140px;
grid-column-gap: 5vw;
    grid-row-gap: 3rem;
    display: flex;
    position: relative;

    > div {
        width: 230px;
        height: 146px;
        font-size: 18px;
        h3 {
            margin-bottom: 1rem;
    font-size: 1.25rem;
    line-height: 1.875rem;
        }
    a {
    display: block;
    color: #bdbdbd;
    margin-bottom: 0.875rem;
    line-height: 1.1rem;
    text-decoration: none;
   
    }
        
}
        

`
export const TitleFinal = styled.div`
color: #bdbdbd;
margin-top: 4rem;
font-size: .875rem;
`
export const Sociais = styled.div`
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
    opacity: .85;
    display: flex;

    svg {
        margin-top: 2rem;
    }


`