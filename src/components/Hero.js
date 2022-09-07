import Button from './Button.js'
import zomato from '../assets/Zomato-Logo.png'
import Model from '../models/login.js'
import React, {useState} from 'react'
export default function Hero(){

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
    
    return(
       
       <div className='hero-section'>
        

         <div className='buttons'>
            <Button 
            isOutline="0"
            isBackground='0'
            size=''
            text='Login'
            openLogin={openLogin}
              />

              <Button 
               isOutline='1'
               isBackground='0'
               size='lg'
               text='Create an account'
               openLogin={openRegister}
              />
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
        />}

        {register && <Model closeLogin={closeLogin}
           register="Sign UP"
           login="Login"
        />}
       

       </div>
        
    )
}