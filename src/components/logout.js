import React from 'react'
export default function(){

    React.useEffect(() => {
       fetch('/logout',{
        method:'GET',
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        credentials:"include"
       }).then((res)=>{
         console.log('succesfull')
         if(res.status!=200){
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