import axios from "axios";

const baseUrl = 'http://localhost:4000/graphql'
const MyQuery = `query($id:ID=2){
  articles(id:$id){
    id
    title
    text
    author{
      name
      id
    }
  }
}`
const myAxios = axios.create({baseURL:baseUrl})
export const getFromGraphQL = ()=>{
  return(
    myAxios.post('',{query:MyQuery, variables:{id:3}})
    .then(res=>console.log(res.data.data))
    .catch(error=>console.log(error))
  )
}