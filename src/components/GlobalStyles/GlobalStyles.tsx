// This file is part of MinIO Design System
// Copyright (c) 2022 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import React from "react";
import { createGlobalStyle } from "styled-components";
import get from "lodash/get";
import { darkColors, lightColors } from "../../global/themes";

const ARGBlackWoff = require("../assets/fonts/allroundgothic/allroundgothic-book-webfont.woff");
const ARGBoldWoff = require("../assets/fonts/allroundgothic/allroundgothic-bold-webfont.woff");

const GlobalStyles = createGlobalStyle`
    ${({ theme }) => {
      return `
    /* Fonts */
    @font-face {
      font-family: "AllRoundGothic";
      src: url(${ARGBlackWoff}) format("woff");
      font-weight: 900;
      font-style: italic;
      font-display: swap;
    }
    
    @font-face {
      font-family: "AllRoundGothic";
      src: url(${ARGBoldWoff}) format("woff");
      font-weight: bold;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: "AllRoundGothic";
      src: url(${ARGBoldWoff}) format("woff");
      font-weight: bold;
      font-style: italic;
      font-display: swap;
    }
    
    @font-face {
      font-family: "AllRoundGothic";
      src: url(${ARGBlackWoff}) format("woff");
      font-weight: 300;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: "AllRoundGothic";
      src: url(${ARGBlackWoff}) format("woff");
      font-weight: 900;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: "AllRoundGothic";
      src: url(${ARGBlackWoff}) format("woff");
      font-weight: normal;
      font-style: italic;
      font-display: swap;
    }
    
    @font-face {
      font-family: "AllRoundGothic";
      src: url(${ARGBlackWoff}) format("woff");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: "AllRoundGothic";
     src: url(${ARGBlackWoff}) format("woff");
      font-weight: 300;
      font-style: italic;
      font-display: swap;
    }
    
    @font-face {
      font-family: "AllRoundGothic";
     src: url(${ARGBlackWoff}) format("woff");
      font-weight: 100;
      font-style: normal;
      font-display: swap;
    }
    
    /* Main Page styling */
    
    *, *::before, *::after {
       box-sizing: inherit;
       outline:0;
    }
    
    html {
        box-sizing: border-box;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    body {
        background-color: ${get(theme, "bgColor", lightColors.white)};
        color: ${get(theme, "fontColor", lightColors.defaultFontColor)};
        height: 100vh;
        width: 100vw;
        font-family: 'AllRoundGothic', sans-serif;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 400;
        font-size: 14px;
        line-height: 1.5;
        transition: background-color 0s
    }
    
    fieldset, section {
        border: 1px solid ${get(theme, "borderColor", lightColors.borderColor)};
        border-radius: 3px;
        background-color: transparent;
        padding: 25px;
    }
    
    a {
        color: ${get(theme, "linkColor", lightColors.linkColor)};
    }
    
    a:hover {
        color: ${get(theme, "linkColor", lightColors.linkColor)};
    }
    
    hr {
        border-top: 0;
        border-left: 0;
        border-right: 0;
        border-color: ${get(theme, "borderColor", lightColors.borderColor)};
        background-color: transparent;
    }
    
    ul {
        padding-left: 20px;
        list-style: none;
        
        li:not([class*="Mui"])::before {
          content: '￭';
          color: ${get(theme, "bulletColor", lightColors.bulletColor)};
          font-size: 20px;
          display: inline-block;
          width: 1em;
          margin-left: -1em;
        }
        
        ul {
          list-style: none;
          li:not([class*="Mui"])::before {
            content: "￮";
            color: ${get(theme, "bulletColor", lightColors.bulletColor)},
            font-size: 20px;
            display: inline-block;
            width: 1em;
            margin-left: -1em;
          }
        }
      }
      
    button:active, button:focus, input: active, input:focus {
        outline: 0;
    }
    
    .min-icon {
        width: 26px;
    }
    
    #root: {
        height: 100%;
        width: 100%;
        display: flex;
        flex-flow: column;
        align-items: stretch;
      }
    
    #preload {
      display: none;
    }
    
    #loader-block {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100vh;
      justify-content: center;
      align-items: center;
    }
    
    .muted {
        color: ${get(theme, "mutedText", lightColors.mutedText)};
    }
    `;
    }}
`;

export default GlobalStyles;
