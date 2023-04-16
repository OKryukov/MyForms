import {FC, Suspense} from 'react'
import { PreLoader } from './preLoader'

export function withSuspense(Component:FC){
  const NewComponent:FC = (props:any)=>{
    return <Suspense fallback={<PreLoader/>}><Component {...props}/></Suspense>
  }
  return NewComponent
}