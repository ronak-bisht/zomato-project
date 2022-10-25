import Button from './Button.js'
import zomato from '../assets/Zomato-Logo.png'
import Model from '../models/login.js'
import Nav from './page2/navbar.js'
import React, {useState,useContext,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { UserContext } from '../App.js'

export default function Hero(){

    const {state,dispatch}=useContext(UserContext)
    const [open,setOpen]=React.useState(false)
    const [register,setRegister]=React.useState(false)
    function openRegister(){
        setRegister(true)
    }
    function openLogin(){
        setOpen(true)
       
    }
    function closeLogin(){
        setOpen(false)
        setRegister(false)
    }
    
    useEffect(()=>{
        const auth=async ()=>{
            try{
                const res=await fetch('/payment',{
                    method:'GET',
                    headers:{
                        Accept:"application/json",
                        "Content-Type":"application/json"
                    },
                    credentials:"include"
                })
        
                const data= await res.json()
                if(!res.status===200){
                    dispatch({type:"USER",payload:false})
                    const err=new Error(res.error)
                    throw err
                }
                else{
                    dispatch({type:"USER",payload:true})
                   
                }
        
            }catch(err){
                console.log("user not loged in")
                
            }
           }
           auth()
     },[])
    

    return(
       
       <div className='hero-section'>
        
        
         <div className='buttons'>
           { state || <Button 
            isOutline="0"
            isBackground='0'
            size=''
            text='Login'
            openLogin={openLogin}
              />}

              {state || <Button 
               isOutline='1'
               isBackground='0'
               size='lg'
               text='Create an account'
               openLogin={openRegister}
              />}
            {state && <Link to='/logout'>
            <Button
              isOutline='1'
              isBackground='0'
              size=''
              text='Logout'
              />
              </Link>}
         </div>
        

        <div className='hero-content'>
            <div>
                <img src={zomato} width='250px'></img>
            </div>
            <div>
                <h1>Find the best restaurant, cafes, and bars</h1>
            </div>
            <div className='hero-input'>
                <input type="text" placeholder='Please type a location'/>
                <input type="text" placeholder='search for restaurants'/>
                
           </div>
        </div>

        {open && <Model closeLogin={closeLogin}
           register="Login"
           login="Sign UP"
           extra={()=>setOpen(!open)}
        />}

        {register && <Model closeLogin={closeLogin}
            name='name'
           register="Sign UP"
           login="Login"
           extra={()=>setRegister(!register)}
        />}
       

       </div>
        
    )
}