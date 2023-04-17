import axios from "axios"
import { SignUpDataType } from "../BLL/npmjsReducer"

const myAxios = axios.create({
  baseURL: '',
})

export const axiosNpmjs = {
  signUp(data:SignUpDataType){
    return(
      myAxios.post('auth/signUp', {...data})
      .then(response=>response.data.resultCode)
    )
  }
}