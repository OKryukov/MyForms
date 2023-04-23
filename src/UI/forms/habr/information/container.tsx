import { compose } from "redux";
import { DispatchType, StateType } from "../../../../BLL/store";
import { connect } from "react-redux";
import { Information } from "./information";
import { FC } from "react";

const InformationAPI:FC = (props)=>{
  return <Information {...props}/>
}

const mapStateToProps = (state:StateType)=>{
  return({
    isEnglish: state.theme.language === 'English',
    data: state.theme.language === 'English'?state.habr.data.eng:state.habr.data.rus,
    logo: state.habr.logo,
  })
}
const mapDispatchToProps = (state:DispatchType)=>{
  return({})
}

export const InformationContainer = compose(connect(mapStateToProps, mapDispatchToProps)(InformationAPI))