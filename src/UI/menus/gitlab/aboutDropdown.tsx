import { FC } from 'react'
import { useSelector } from 'react-redux';
import styled from "styled-components";
import { StateType } from '../../../BLL/store';
import { DropdownSVG } from '../../commons/svgStorage';

const AboutDropdownStyled = styled.div`
.dropdown__current{
  cursor: pointer;
  height: 40px;
  padding: 10px;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  :hover{
    background-color: #6666c4;
  }
  span{
    font-weight: 600;
  }
}
span{
  color: #d1d1f0;
}
svg{
  stroke: transparent;
  fill: #d1d1f0;
  width: 20px;
  }
`
const AboutDropdown:FC = ()=>{
  const isEnglish = useSelector((state:StateType)=>state.theme.language=='English')
  return(
    <AboutDropdownStyled>
      <button className='dropdown__current'>
        <span>About GitLab</span>
        <DropdownSVG/>
      </button>
      <ul className='dropdown__list'>
        <li className='dropdown__item'>GitLab: the DevOps platform</li>
        <li className='dropdown__item'>Explore GitLab</li>
        <li className='dropdown__item'>Install GitLab</li>
        <li className='dropdown__item'>How GitLab compares</li>
        <li className='dropdown__item'>Get started</li>
        <li className='dropdown__item'>GitLab docs</li>
        <li className='dropdown__item'>GitLab Learn</li>
      </ul>
    </AboutDropdownStyled>
  )
}
export default AboutDropdown