import { createGlobalStyle } from "styled-components";

export let GlobalStyles = createGlobalStyle`

*,*::before,*::after {padding:0;margin:0;border:0;box-sizing:border-box;overflow:hidden;}
ul,ol,li {list-style: none;}
a {text-decoration: none; color: inherit;}
h1,h2,h3,h4,h5,h6 {font-weight: inherit; font-size: inherit;}

:root{
  --basic-padding: 30px;
  --basic-gap: 15px;
  --secondary-gap: 10px;
  --border-radius: 6px;

  --basic-background-color: #22272e;
  --secondary-background-color: #2d333b;
  --color-light-gray: #abb6bcc9;
  --color-pink: #ca4747;

  --transition: all 0.4s ease-in-out;
}
`