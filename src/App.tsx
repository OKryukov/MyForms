import { FC } from 'react';
import { useSelector } from "react-redux";
import { StateType } from './BLL/store';
import styled from 'styled-components';
import { GlobalStyles } from './globalStyles';
import { ThemeType } from './BLL/themeReducer';
import { Main } from './UI/main';
import { Home } from './UI/home';
import { Footer } from './UI/footer';
import { Navbar } from './UI/nav';
import { Links } from './UI/links';

const StyledAPP = styled.div<{theme:ThemeType}>`
height: 100vh;
display: grid;
grid-template-columns: 245px 1fr 50px;
grid-template-rows: 50px 1fr 50px;
grid-template-areas:'home main links' 'nav main links' 'footer main links';
grid-gap: var(--basic-gap);
padding: var(--basic-gap) 0 var(--basic-gap) var(--basic-gap);
background-color: ${({theme})=>theme.wbc};
transition: var(--transition);
&>header{
  grid-area: home;
  background-color: ${({theme})=>theme.home.bc};
  svg{
    fill: ${({theme})=>theme.home.fill};
    transition: var(--transition);
  }
}

nav:first-of-type{
  grid-area: nav;
  background-color: ${({theme})=>theme.nav.bc};
}
nav:last-of-type{
  grid-area: links;
  background-color: ${({theme})=>theme.links.bc};
  color: ${({theme})=>theme.links.c};
  svg{
    fill: ${({theme})=>theme.links.fill};
    transition: var(--transition);
  }
}
main{
  grid-area: main;
}

&>footer{
  grid-area: footer;
  background-color: ${({theme})=>theme.footer.bc};
  color: ${({theme})=>theme.footer.c};
  svg{
    fill: ${({theme})=>theme.links.fill};
    transition: var(--transition);
  }
}
&>*{
  transition: var(--transition);
  border-radius: var(--border-radius);
}
&>*:not(main, header, footer){
  background-color:var(--secondary-background-color);
}
`

export const App: FC = () => {
  const theme = useSelector((state:StateType)=>state.theme)
  return (
    <StyledAPP theme={theme}>
      <Home />
      <Navbar />
      <Main />
      <Links/>
      <Footer />
      <GlobalStyles />
    </StyledAPP>
  )
}