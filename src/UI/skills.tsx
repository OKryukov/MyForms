import { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { v1 } from "uuid";
import { StateType } from "../BLL/store";

const SkillsStyled = styled.div`
grid-area:footer;
background-color:${({theme})=>theme.colors.bc};
display: grid;
grid-gap: ${({theme})=>theme.gaps.extraLarge};
transition: ${({theme})=>theme.trans.base};
.title{
  height: 30px;
  display: grid;
  align-items: center;
  justify-items: center;
  background-color: ${({theme})=>theme.colors.lightGray};
  border-radius: ${({theme})=>theme.borrad.base};
  font-weight: 800;
  transition: ${({theme})=>theme.trans.base};
}
.skill{
  align-items: center;
  justify-items: center;
  display: grid;
  background-color: ${({theme})=>theme.colors.lightGray};
  border-radius: ${({theme})=>theme.borrad.base};
  cursor: pointer;
  font-weight: 500;
}
.skill:hover{
  background-color: ${({theme})=>theme.colors.pink};
  font-size: 1.2em;
}
.skills{
  display: grid;
  grid-column-gap: ${({theme})=>theme.gaps.extraLarge};
  grid-row-gap: ${({theme})=>theme.gaps.extraLarge};
}
.frontend, .backend, .other{
  display: grid;
  grid-gap: ${({theme})=>theme.gaps.large};
}
.frontend__title{
  background-color: #fdcd55eb;
}
.backend__title{
  background-color: #fdcd55eb;
}
.other__title{
  background-color: #fdcd55eb;
}
.frontend__skills,.backend__skills,.other__skills{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 30px;
  grid-gap: ${({theme})=>theme.gaps.large};
}
`
export const Skills:FC<{skillsTitle:string}> = (props)=>{
  const {skillsTitle} = props
  const skillsList = useSelector((state:StateType)=>state.profile.skills)
  const frontend = skillsList.frontend.map(skill=><li className='skill' key={v1()}>{skill}</li>)
  const backend = skillsList.backend.map(skill=><li className='skill' key={v1()}>{skill}</li>)
  const other = skillsList.other.map(skill=><li className='skill' key={v1()}>{skill}</li>)
  return(
    <SkillsStyled>
      <div className="title">{skillsTitle}</div>
      <div className="skills">
        <div className="frontend">
          <div className="frontend__title title">Frontend</div>
          <ul className="frontend__skills">{frontend}</ul>
        </div>
        <div className="backend">
          <div className="backend__title title">Backend</div>
          <ul className="backend__skills">{backend}</ul>
        </div>
        <div className="other">
          <div className="other__title title">Other</div>
          <ul className="other__skills">{other}</ul>
        </div>
      </div>
    </SkillsStyled>
  )
}