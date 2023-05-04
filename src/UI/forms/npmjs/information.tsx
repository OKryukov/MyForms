import { FC } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { StateType } from "../../../BLL/store";

const InformationStyled = styled.div<({bi:any})>`
height: 100%;
position: relative;
transition: ${({theme})=>theme.trans.base};
border-radius: ${({theme})=>theme.borrad.base};
background-image: url(${({bi})=>bi});
&::before{
  content:'';
  position: absolute;
  z-index: 2;
  height: 100%;
  width: 100%;
  background-color: #2d333b4e;
}
.information{
  position: relative;
  z-index: 3;
  display: grid;
  grid-template-columns: minmax(300px, 1000px);
  grid-auto-rows: auto;
  grid-gap: ${({theme})=>theme.gaps.extraLarge};
  justify-content: center;
}
.information__text{
font-size: 1.5rem;
font-weight: 500;
text-align: center;
background-color: #dce0e272;
padding: ${({theme})=>theme.gaps.extraLarge};
border-radius: ${({theme})=>theme.borrad.base};
}
.information__image{
  max-width: 600px;
  justify-self: center;
}
.information__image img{
  width: 100%;
  height: 100%;
}
.information__more{
  justify-self: center;
  display: grid;
  width: 240px;
  height: 56px;
}
.information__more a{
  background-color: #ffc329;
  border-radius: ${({theme})=>theme.borrad.base};
  text-align: center;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  transition: ${({theme})=>theme.trans.base};
}
.information__more a:hover{
  background-color: #ebcd81;
  color: ${({theme})=>theme.colors.pink};
}

`
export const Information:FC = ()=>{
  const isEnglish = useSelector((state:StateType)=>state.theme.language==='English')
  const allState = useSelector((state:StateType)=>state.npmjs)
  const data = isEnglish?allState.data.eng:allState.data.rus
  return(
    <InformationStyled bi={allState.bi}>
      <div className="information">
        <div className="information__title"></div>
        <div className="information__image">
          <img src="https://static.npmjs.com/attachments/ck3uwg04jmswh9y74n3cgcj4k-teams-wombats.full.png" alt="" />
        </div>
        <div className="information__text">{data.inform}</div>
        <div className="information__more">
          <a href="https://www.npmjs.com/" target="_blank">{isEnglish?<span>Learn more</span>:<span>Узнать подробнее</span>}</a>
        </div>
      </div>
    </InformationStyled>
  )
}