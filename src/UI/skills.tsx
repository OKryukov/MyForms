import { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { v1 } from "uuid";
import { StateType } from "../BLL/store";

const SkillsStyled = styled.div`
grid-area:footer;
background-color:${({theme})=>theme.colors.bc};
display: grid;
grid-gap: ${({theme})=>theme.gaps.large};
grid-template-areas:
'skillTitle'
'skills';
transition: ${({theme})=>theme.trans.base};
.skills__title{
  grid-area: skillTitle;
  height: 30px;
  display: grid;
  align-items: center;
  justify-items: center;
  background-color: ${({theme})=>theme.colors.lightGray};
  border-radius: ${({theme})=>theme.borrad.base};
  font-weight: 800;
  transition: ${({theme})=>theme.trans.base};
}
.skills__list{
  grid-area: skills;
  display: grid;
  grid-auto-rows: 30px;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: ${({theme})=>theme.gaps.extraLarge};
  grid-row-gap: ${({theme})=>theme.gaps.large};
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
`
export const Skills:FC<{skillsTitle:string}> = (props)=>{
  const {skillsTitle} = props
  const skillsList = useSelector((state:StateType)=>state.profile.skills)
  const skills = skillsList.map(skill=><li className='skill' key={v1()}>{skill}</li>)
  return(
    <SkillsStyled>
      <div className="skills__title">{skillsTitle}</div>
      <ul className="skills__list">{skills}</ul>
    </SkillsStyled>
  )
}