import { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { v1 } from "uuid";
import { StateType } from "../BLL/store";

const SkillsStyled = styled.ul`
grid-area: skills;
display: grid;
grid-auto-rows: 30px;
grid-template-columns: repeat(6, 1fr);
grid-column-gap: ${({theme})=>theme.gaps.extraLarge};
grid-row-gap: ${({theme})=>theme.gaps.large};
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
export const Skills:FC = ()=>{
  const skillsList = useSelector((state:StateType)=>state.profile.skills)
  const skills = skillsList.map(skill=><li className='skill' key={v1()}>{skill}</li>)
  return(
    <SkillsStyled>
      {skills}
    </SkillsStyled>
  )
}