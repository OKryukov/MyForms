import { FC } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
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
  grid-gap: var(--basic-gap);
}
& >*{
  background-color:var(--secondary-background-color);
  border-radius: var(--border-radius);
  padding: var(--secondary-gap);
}
.photo{
  height: 200px;
  width: 200px;
  border-radius: var(--border-radius);
}
.photo img{
  height: 100%;
  width: 100%;
}
`
export const MyProfile:FC = ()=>{
  const isEnglish = useSelector((state:StateType)=>state.decor.language.value === 'English')
  const photo = useSelector((state:StateType)=>state.profile.photo)
  const profile = useSelector((state:StateType)=>state.profile)
  return(
    <MyProfileStyled>
      <header>Some text</header>
      <main>
        <div className='photo'>
          <img src={photo} alt="" />
        </div>
        <div className='data'>
          <div className='name'>
            <span>{isEnglish?profile.name.eng.firstName: profile.name.rus.firstName} </span>
            <span>{isEnglish? profile.name.eng.lastName : profile.name.rus.lastName}</span>
          </div>
          <div className='age'>{profile.age}</div>
          <div className='country'>{isEnglish? profile.location.eng.country : profile.location.rus.country}</div>
          <div className='city'>{isEnglish? profile.location.eng.city : profile.location.rus.city}</div>
          <div className='profession'>{isEnglish? profile.profession.eng : profile.profession.rus}</div>
        </div>
        <div className='skills'>

        </div>
      </main>
    </MyProfileStyled>
  )
}