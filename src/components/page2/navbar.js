import Button from '../Button.js'
import Model from '../../models/login.js'
import React from 'react'
import {Link} from 'react-router-dom'
export default function Nav(){

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
        <div>
            <div className='navbar'>
            <img src={require('../../assets/Zomato-Logo.png')} width="100px"></img>
            {/* <div>
                <Button 
                text='Login'
                size='md'
                />
                <Button 
                isOutline='1'
                text='Create an account'
                size='md'
                />
            </div> */}


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

               <Link to='/logout'>
              <Button
              isOutline='1'
              isBackground='0'
              size=''
              text='Logout'
              />
              </Link> 

         </div>
            </div>
           

         {open && <Model closeLogin={closeLogin}
           register="Login"
           login="Sign UP"
        />}

        {register && <Model closeLogin={closeLogin}
            name='name'
           register="Sign UP"
           login="Login"
        />}
        </div>
    )
}