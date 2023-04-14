import axios from "axios";

const baseUrl = 'http://localhost:4000/graphql'
const MyQuery = `
query{
  string
  integer
  float
  boolean
  list
}
`
const myAxios = axios.create({baseURL:baseUrl})
export const getFromGraphQL = ()=>{
  return(
    myAxios.post('',{query:MyQuery})
    .then(res=>console.log(res.data.data))
  )
}