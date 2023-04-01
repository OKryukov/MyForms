import { FC } from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './globalStyles';
import { Main } from './components/main';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Navbar } from './components/nav';

const StyledAPP = styled.div`
height: 100vh;
display: grid;
grid-template-columns: 245px 1fr;
grid-template-rows: 70px 1fr 70px;
grid-template-areas:'header header' 'nav main' 'footer footer';

header{
   grid-area: header;
   background-color: #a5d0cfdd;
}
nav{
   grid-area: nav;
   background-color: #bfc1c1dd;
}
main{
   grid-area: main;
}
footer{
   grid-area: footer;
   background-color: #a5d0cfdd;
}
`

export const App:FC = () => {
   return (
      <StyledAPP>
         <Header/>
         <Navbar/>
         <Main/>
         <Footer/>
         <GlobalStyles/>
      </StyledAPP>
   )
}

