import { FC } from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './globalStyles';
import { Main } from './UI/main';
import { Home } from './UI/home';
import { Footer } from './UI/footer';
import { Navbar } from './UI/navbar';
import { Links } from './UI/links';
import { StateType} from './BLL/store';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { darkTheme, lightTheme } from './BLL/themeReducer';

const StyledAPP = styled.div`
position: relative;
height: 100vh;
display: grid;
grid-template-columns: 245px 1fr 50px;
grid-template-rows: 50px 1fr 130px;
grid-template-areas:'home main links' 'navbar main links' 'footer main links';
grid-gap: ${({theme})=>theme.gaps.extraLarge};
padding: ${({theme})=>theme.gaps.extraLarge+" 0 "+theme.gaps.extraLarge+" "+theme.gaps.extraLarge};
background-color: ${({theme})=>theme.colors.wbc};
transition: ${({theme})=>theme.trans.base};
&>*{
  transition: ${({theme})=>theme.trans.base};
  border-radius: ${({theme})=>theme.borrad.base};
}
`

export const App: FC = () => {
  const currentTheme = useSelector((state:StateType)=>state.theme.current)
  return (
    <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
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