import { FC } from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './globalStyles';
import { Main } from './UI/main';
import { Home } from './UI/home';
import { Footer } from './UI/footer';
import { Navbar } from './UI/nav';
import { Links } from './UI/links';

import { StateType} from './BLL/store';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { darkTheme, lightTheme } from './BLL/themeReducer';

const StyledAPP = styled.div`
height: 100vh;
display: grid;
grid-template-columns: 245px 1fr 50px;
grid-template-rows: 50px 1fr 50px;
grid-template-areas:'home main links' 'nav main links' 'footer main links';
grid-gap: var(--basic-gap);
padding: var(--basic-gap) 0 var(--basic-gap) var(--basic-gap);
background-color: ${({theme})=>theme.colors.wbc};
transition: var(--transition);
&>header{
  grid-area: home;
  background-color: ${({theme})=>theme.colors.bc};
  svg{
    fill: ${({theme})=>theme.colors.fill};
    transition: var(--transition);
  }
}

nav:first-of-type{
  grid-area: nav;
  background-color: ${({theme})=>theme.colors.bc};
}
nav:last-of-type{
  grid-area: links;
  background-color: ${({theme})=>theme.colors.bc};
  color: ${({theme})=>theme.colors.wbc};
  svg{
    fill: ${({theme})=>theme.colors.fill};
    transition: var(--transition);
  }
}
main{
  grid-area: main;
}

&>footer{
  grid-area: footer;
  background-color: ${({theme})=>theme.colors.bc};
  color: ${({theme})=>theme.colors.wbc};
  svg{
    fill: ${({theme})=>theme.colors.fill};
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
  const sttheme = useSelector((state:StateType)=>state.theme.current)
  return (
    <ThemeProvider theme={sttheme === 'light' ? darkTheme : lightTheme}>
      <StyledAPP>
        <Home />
        <Navbar />
        <Main />
        <Links />
        <Footer />
        <GlobalStyles />
      </StyledAPP>
    </ThemeProvider>
  )
}