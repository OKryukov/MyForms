import { FC } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { v1 } from 'uuid'
import { StateType } from '../BLL/store';
import { AgeSVG, CitySVG, CountrySVG, NameSVG, ProfessionSVG } from './commons/svgStorage';

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

.profile__footer{
  grid-area:footer;
  background-color:${({theme})=>theme.colors.bc};
  display: grid;
  grid-gap: ${({theme})=>theme.gaps.large};
  grid-template-areas:
  'skillTitle'
  'skills';
  transition: ${({theme})=>theme.trans.base};
}
.profile__skillTitle{
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
      <footer className="profile__footer">
        <div className="profile__skillTitle">{profile.skillsTitle}</div>
        <div className='profile__skills'>{skills}</div>
      </footer>
    </MyProfileStyled>
  )
}