import styled, { createGlobalStyle } from "styled-components";
import { Color } from "./colors";
import { Media } from "./media";
import circles from "../assets/circles.svg";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body {
    font-family: "Noto sans", Arial, Helvetica, sans-serif;
    color: ${Color.Gray};
}

li{
    list-style-type: none;
}

button {
    font-size: inherit;
}


::-webkit-input-placeholder {
    color: ${Color.GrayLight};
}  

::-moz-placeholder { 
    color: ${Color.GrayLight};
}

:-ms-input-placeholder {
    color: ${Color.GrayLight};
}
     
:-moz-placeholder { 
    color: ${Color.GrayLight};
}
`;

export const StyledApp = styled.div`
  position: relative;
  background: no-repeat url(${circles}) ${Color.Secondary};
  padding: 150px 0px;
  text-align: center;
  height: 100vh;

  ${Media.MD} {
    max-width: 744px;
    padding: 190px 0px;
  }

  ${Media.SM} {
    margin-top: 0px;
    max-width: 390px;
    padding: 100px 0px 90px;
  }
`;
