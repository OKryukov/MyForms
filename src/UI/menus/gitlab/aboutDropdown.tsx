import { FC, useState } from 'react'
import { useSelector } from 'react-redux';
import styled from "styled-components";
import { StateType } from '../../../BLL/store';
import { DropdownSVG } from '../../commons/svgStorage';

const AboutDropdownStyled = styled.div`
position: relative;
z-index: 2;
overflow: visible;
.dropdown__current{
  cursor: pointer;
  height: 32px;
  padding: 6px 8px;
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
.dropdown__current-gray{
  background-color: #f2f7fae1;
  outline: #007bff solid 3px;
  outline-offset: 1px;
  span{
    color: black;
  }
  svg{
      fill: black;
  }
  :hover{
    background-color: #f2f7fae1;
  }
}
.dropdown__list{
  top: 48px;
  position: absolute;
  background-color: #f2f7fae1;
  border-radius: 4px;
  padding: 8px 0;
  display: grid;
}
.dropdown__item{
  padding: 8px 12px;
  cursor: pointer;
  :hover{
    background-color: #c4c8cadf;
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
.display_none{
  display: none;
}
.svg{
  display: flex;
  align-items: center;
  width: 16px;
}
.rotate{
  transform: rotate(180deg);
}
`
const AboutDropdown:FC = ()=>{
  const isEnglish = useSelector((state:StateType)=>state.theme.language==='English')
  const [isSelected, setIsSelected] = useState(false)
  const aboutClickHandler = ()=>{
    console.log('Click')
    setIsSelected(isSelected?false:true)
  }
  return(
    <AboutDropdownStyled>
      <button className={isSelected?'dropdown__current dropdown__current-gray':'dropdown__current'} onClick={aboutClickHandler}>
        <span>About GitLab</span>
        <div className={isSelected?'svg rotate':'svg'}>
          <DropdownSVG/>
        </div>
      </button>
      <ul className={isSelected?'dropdown__list':'dropdown__list display_none'}>
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