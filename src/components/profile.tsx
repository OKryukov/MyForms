import { FC } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { v1 } from 'uuid'
import { StateType } from '../bll/store';

const MyProfileStyled = styled.div`
display: grid;
grid-template-rows: 50px 1fr;
grid-gap: var(--basic-gap);
grid-template-areas: 'header' 'main';

header{
  grid-area: header;
}
main{
  grid-area: main;
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 200px 1fr 30px 110px;
  grid-gap: var(--basic-gap);
  grid-template-areas: 
  'photo data'
  '. .'
  'skillTitle skillTitle'
  'skills skills';
}
& >*{
  background-color:var(--secondary-background-color);
  border-radius: var(--border-radius);
  padding: var(--secondary-gap);
}
.photo{
  grid-area: photo;
  height: 200px;
  width: 200px;
  border-radius: var(--border-radius);
}
.data{
  grid-area: data;
}
.photo img{
  height: 100%;
  width: 100%;
}
.skillTitle{
  display: grid;
  align-items: center;
  justify-items: center;
  grid-area: skillTitle;
  background-color: var(--color-light-gray);
  border-radius: var(--border-radius);
  font-weight: 800;
}
.skills{
  grid-area: skills;
  display: grid;
  grid-template-rows: repeat(3 , 30px);
  grid-template-columns: repeat(7, 1fr);
  grid-column-gap: var(--basic-gap);
  grid-row-gap: var(--secondary-gap);
}
.skills div{
  align-items: center;
  justify-items: center;
  display: grid;
  background-color: var(--color-light-gray);
  border-radius: var(--border-radius);
  cursor: pointer;
}
.skills div:hover{
  background-color: var(--color-pink);
  span{
    transform: scale(1.2);
  }
}
`

export const MyProfile:FC = ()=>{
  const data = useSelector((state:StateType)=> state.profile)
  const isEnglish = data.language === 'English'
  const profile = useSelector((state:StateType)=>isEnglish? state.profile.data.eng : state.profile.data.rus)
  const skills = data.skills.map(skill=><div key={v1()}><span>{skill}</span></div>)
  return(
    <MyProfileStyled>
      <header>Some text</header>
      <main>
        <div className='photo'>
          <img src={profile.photo} alt="" />
        </div>
        <div className='data'>
          <div className='name'>
            <span>{profile.name.firstName} </span>
            <span>{profile.name.lastName}</span>
          </div>
          <div className='age'>{profile.age}</div>
          <div className='country'>{profile.location.country}</div>
          <div className='city'>{profile.location.city}</div>
          <div className='profession'>{profile.profession}</div>
        </div>
        <div className="skillTitle">{profile.skillsTitle}</div>
        <div className='skills'>{skills}</div>
      </main>
    </MyProfileStyled>
  )
}