import { FC } from "react";
import styled from "styled-components";
import { TopHeader } from "./topHeader";
import { MiddleHeader } from "./middleHeader";
import { BottomHeader } from "./bottomHeader";

const AllInstrumentsStyled = styled.div`
background-color: white;
min-height: 100%;
.main{
  height: 2000px;
}
`

export const AllInstruments:FC = ()=>{
  return(
    <AllInstrumentsStyled>
      <header>
        <TopHeader/>
        <MiddleHeader/>
        <BottomHeader/>
      </header>
      <main className="main">
        MAIN
      </main>
    </AllInstrumentsStyled>
  )
}