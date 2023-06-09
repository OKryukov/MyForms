import { FC } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { StateType } from '../BLL/store';
import { AgeSVG, CitySVG, CountrySVG, NameSVG, ProfessionSVG } from './commons/svgStorage';
import { Skills } from './skills';

const MyProfileStyled = styled.div`
height: 100%;
display: grid;
grid-template-rows: 50px 1fr auto;
grid-gap: ${({theme})=>theme.gaps.extraLarge};
grid-template-areas: 'header' 'main' 'footer';

.profile__header{
  grid-area: header;
  background-color: ${({theme})=>theme.colors.bc};
  transition: ${({theme})=>theme.trans.base};
}
.profile__main{
  grid-area: main;
  display: grid;
  grid-template-rows: 200px 1fr;
  grid-gap: ${({theme})=>theme.gaps.extraLarge};
  background-color: ${({theme})=>theme.colors.bc};
  transition: ${({theme})=>theme.trans.base};

}
.profile__section_1{
  display: grid;
  grid-template-areas: 
  'photo data'
  '. .';
  grid-template-columns: 200px 1fr;
  grid-gap: ${({theme})=>theme.gaps.extraLarge};
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
  display: grid;
  align-items: center;
  transition: ${({theme})=>theme.trans.base};
}
.profile__data svg{
  height: 20px;
  width: 20px;
  fill: ${({theme})=>theme.colors.fill};
  transition: ${({theme})=>theme.trans.base};
}
.profile__data>*{
  display: grid;
  grid-template-columns: 20px 1fr;
  grid-gap: ${({theme})=>theme.gaps.large};
}
`

export const MyProfile:FC = ()=>{
  const isEnglish = useSelector((state:StateType)=> state.profile.language) === 'English'
  const profile = useSelector((state:StateType)=>isEnglish? state.profile.data.eng : state.profile.data.rus)
  console.log("Перерисовка компоненты");
  return(
    <MyProfileStyled>
      <header className='profile__header'>Some text</header>
      <main className='profile__main'>
        <section className='profile__section_1'>
        <div className='profile__photo'>
          <img src={profile.photo} alt="" />
        </div>
        <div className='profile__data'>
          <div className='name'>
            <NameSVG/>
            <span>{profile.name}</span>
          </div>
          <div className='age'>
            <AgeSVG/>
            <span>{profile.age}</span>
          </div>
          <div className='country'>
            <CountrySVG/>
            <span>{profile.location.country}</span>
          </div>
          <div className='city'>
            <CitySVG/>
            <span>{profile.location.city}</span>
          </div>
          <div className='profession'>
            <ProfessionSVG/>
            <span>{profile.profession}</span>
          </div>
        </div>
        </section>
        <section className='profile__section_2'>
        </section>
      </main>
      <Skills skillsTitle={profile.skillsTitle}/>
    </MyProfileStyled>
  )
}