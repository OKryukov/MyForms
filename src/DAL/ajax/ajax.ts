import axios from "axios";

const baseUrl = 'http://localhost:4000/graphql'
const MyQuery = `
query{
  articles(id:2){
    id
    title
    text
    author{
      name
      id
    }
    }
  }
`
const myAxios = axios.create({baseURL:baseUrl})
export const getFromGraphQL = ()=>{
  return(
    myAxios.post('',{query:MyQuery})
    .then(res=>console.log(res.data.data))
  )
}