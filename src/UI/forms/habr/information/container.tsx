import { compose } from "redux";
import { DispatchType, StateType } from "../../../../BLL/store";
import { connect } from "react-redux";
import { Information } from "./information";
import { FC } from "react";

const InformationAPI:FC = ()=>{
  return <Information/>
}

const mapStateToProps = (state:StateType)=>{
  return({})
}
const mapDispatchToProps = (state:DispatchType)=>{
  return({})
}

export const InformationContainer = compose(connect(mapStateToProps, mapDispatchToProps)(InformationAPI))