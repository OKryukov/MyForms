import { createGlobalStyle } from "styled-components";

export let GlobalStyles = createGlobalStyle`

*,*::before,*::after {padding:0;margin:0;border:0;box-sizing:border-box;overflow:hidden;}
ul,ol,li {list-style: none;}
a {text-decoration: none; color: inherit;}
h1,h2,h3,h4,h5,h6 {font-weight: inherit; font-size: inherit;}

:root{
   --color-npm-background: #f7f7f7;
   --color-npm-white: #fff;
   --color-npm-gray: #000000b3;
   --color-npm-dark-gray: #333333;
}
`