import React from 'react'
import {useNavigate} from 'react-router-dom'
import { UserContext } from '../App';
import { useContext } from 'react';
export default function(){

  const {state,dispatch} = useContext(UserContext);

  const navigate=useNavigate()
    React.useEffect(() => {
        
       fetch('/logout',{
        method:'GET',
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        credentials:"include"
       }).then((res)=>{
        dispatch({type:"USER",payload:false})
         navigate('/')
         if(res.status!=200){
            console.log('error')
            const err=new Error(res.error)
            throw err
         }
       }).catch((err)=>{
        console.log('err')
       })
    }, []);

    return(
        <div>
            logout
        </div>
    )
}