import { FC } from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './globalStyles';
import { Main } from './components/main';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Navbar } from './components/nav';
import { Links } from './components/links';

const StyledAPP = styled.div`
height: 100vh;
display: grid;
grid-template-columns: 245px 1fr 50px;
grid-template-rows: 50px 1fr 50px;
grid-template-areas:'header main links' 'nav main links' 'footer footer links';
grid-gap: var(--basic-gap);

padding: var(--basic-gap) 0 var(--basic-gap) var(--basic-padding);
background-color: var(--basic-background-color);

header{
  grid-area: header;
}
nav:first-of-type{
  grid-area: nav;
}
nav:last-of-type{
  grid-area: links;
}
main{
  grid-area: main;
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
      <Links/>
      <Footer />
      <GlobalStyles />
    </StyledAPP>
  )
}