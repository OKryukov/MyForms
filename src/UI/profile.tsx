import { FC } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { v1 } from 'uuid'
import { StateType } from '../BLL/store';

const MyProfileStyled = styled.div`
height: 100%;
display: grid;
grid-template-rows: 50px 1fr;
grid-gap: ${({theme})=>theme.gaps.extraLarge};
grid-template-areas: 'header' 'main';

.profile__header{
  grid-area: header;
  background-color: ${({theme})=>theme.colors.bc};
  transition: ${({theme})=>theme.trans.base};
}
.profile__main{
  grid-area: main;
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 200px 1fr 30px 110px;
  grid-gap: ${({theme})=>theme.gaps.extraLarge};
  grid-template-areas: 
  'photo data'
  '. .'
  'skillTitle skillTitle'
  'skills skills';
  background-color: ${({theme})=>theme.colors.bc};
  transition: ${({theme})=>theme.trans.base};
}
& >*{
  border-radius: ${({theme})=>theme.borrad.base};
  padding: ${({theme})=>theme.gaps.large};
}
.profile__photo{
  grid-area: photo;
  height: 200px;
  width: 200px;
  border-radius: ${({theme})=>theme.borrad.base};
}
.profile__photo img{
  height: 100%;
  width: 100%;
}
.profile__data{
  grid-area: data;
  color: ${({theme})=>theme.colors.c};
}
.profile__skillTitle{
  grid-area: skillTitle;
  display: grid;
  align-items: center;
  justify-items: center;
  background-color: ${({theme})=>theme.colors.lightGray};
  border-radius: ${({theme})=>theme.borrad.base};
  font-weight: 800;
  transition: ${({theme})=>theme.trans.base};
}
.profile__skills{
  grid-area: skills;
  display: grid;
  grid-template-rows: repeat(3 , 30px);
  grid-template-columns: repeat(7, 1fr);
  grid-column-gap: ${({theme})=>theme.gaps.extraLarge};
  grid-row-gap: ${({theme})=>theme.gaps.large};
}
.profile__skill{
  align-items: center;
  justify-items: center;
  display: grid;
  background-color: ${({theme})=>theme.colors.lightGray};
  border-radius: ${({theme})=>theme.borrad.base};
  cursor: pointer;
}
.profile__skill:hover{
  background-color: ${({theme})=>theme.colors.pink};
  font-size: 1.2em;
}
`

export const MyProfile:FC = ()=>{
  const data = useSelector((state:StateType)=> state.profile)
  const isEnglish = data.language === 'English'
  const profile = useSelector((state:StateType)=>isEnglish? state.profile.data.eng : state.profile.data.rus)
  const skills = data.skills.map(skill=><div className='profile__skill' key={v1()}><span>{skill}</span></div>)
  console.log("Перерисовка компоненты");
  return(
    <MyProfileStyled>
      <header className='profile__header'>Some text</header>
      <main className='profile__main'>
        <div className='profile__photo'>
          <img src={profile.photo} alt="" />
        </div>
        <div className='profile__data'>
          <div className='name'>
            <span>{profile.name.firstName} </span>
            <span>{profile.name.lastName}</span>
          </div>
          <div className='age'>{profile.age}</div>
          <div className='country'>{profile.location.country}</div>
          <div className='city'>{profile.location.city}</div>
          <div className='profession'>{profile.profession}</div>
        </div>
        <div className="profile__skillTitle">{profile.skillsTitle}</div>
        <div className='profile__skills'>{skills}</div>
      </main>
    </MyProfileStyled>
  )
}