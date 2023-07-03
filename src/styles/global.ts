import { createGlobalStyle } from "styled-components";

 export const GlobalStyle = createGlobalStyle`
 *{
 margin: 0;
 padding: 0;
 box-sizing: border-box;
 outline: none;
 font-family: 'Quicksand', sans-serif;
font-family: 'Roboto', sans-serif;
text-decoration: none;
list-style: none;
scroll-behavior: smooth; 
     
 } 

 ::-webkit-scrollbar {
    width: 6px;
}
::-webkit-scrollbar-thumb {
    
    border-radius: 5px;
}
 body {
 background-color: #0f0f0f;
 -webkit-font-smoothing: antialiased;
 
 } 
 body, input, textarea, button {
     
     font-weight: 400;
     
 } 
 button {
     cursor: pointer;
 }
 a {
     text-decoration: none;
 }
 `; 
 