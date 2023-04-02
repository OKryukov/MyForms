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
grid-template-rows: 60px 1fr 60px;
grid-template-areas:'header header' 'nav main' 'footer footer';
grid-gap: var(--basic-gap);

padding: var(--basic-padding);
background-color: var(--basic-background-color);

header{
  grid-area: header;
}
nav{
  grid-area: nav;
}
main{
  grid-area: main;
  background-color: #f5f5f5;
}
footer{
  grid-area: footer;
}
&>*{
  border-radius: var(--border-radius);
}
&>*:not(main){
  background-color:var(--secondary-background-color);
}
`

export const App: FC = () => {
  return (
    <StyledAPP>
      <Header />
      <Navbar />
      <Main />
      <Footer />
      <GlobalStyles />
    </StyledAPP>
  )
}

