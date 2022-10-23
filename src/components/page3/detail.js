 import Nav from '../page2/navbar.js'
 import axios from 'axios'
 import Order from '../../models/order.js'
 import Info from '../../models/userInfo.js'
 import React,{useState,useEffect} from 'react'
 import Overview from './overview.js'
 import Contact from './constact.js'
 import prom from '../../data.js'
 import data from '../data.js'
 import { useParams } from 'react-router-dom'
export default function Detail(){
   
    
    
    const {id}=useParams()
    const obj=data.find((res)=>{
        return res.id==id
    })
    console.log('after find')
    const [overview,setOverview]=React.useState(true)
    const [contact,setContact]=React.useState(false)
    const [showOrder,setShowOrder]=React.useState(false)
   
   function handleChange(e){
    if(e.target.id==='overview'){
        setOverview(true)
        setContact(false)
    }
    else if(e.target.id==='contact'){
       setContact(true)
        setOverview(false)
    }
   }
   
    
    return(
        <div>
             
            <Nav />
            <div className='detail'>
               <div>
                 <img src={obj.img} width='500px'></img>
               </div>

               <h1 style={{margin:'1rem 1rem',letterSpacing:'2px'}}>{obj.name}</h1>
               <div className='btns'>
               <button onClick={handleChange} id='overview' style={{borderBottom: overview?'red 2px solid':'none'}}>Overview</button>
                <button onClick={handleChange} id='contact' style={{borderBottom: contact?'red 2px solid':'none'}}>Contact</button>
               
                <button id='orderbtn' onClick={()=>{setShowOrder(!showOrder)}}>Place Order Online</button>
                
                
               </div>
               
               {overview && <Overview cuisine={obj.cuisines} cost={obj.cost}/>}
               {contact && <Contact phone={obj.phone} city={obj.city} address={obj.address} name={obj.name}/>}
               
               {showOrder && <Order foods={obj.food} name={obj.name} close={()=>setShowOrder(!showOrder)}/>}
               <Info/>
            </div> 
        </div>
    )
}