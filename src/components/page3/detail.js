 import Nav from '../page2/navbar.js'
 import axios from 'axios'
 import Order from '../../models/order.js'
 import Info from '../../models/userInfo.js'
 import React,{useState,useEffect,useContext} from 'react'
 import { UserContext } from '../../App.js'
 import Overview from './overview.js'
 import Contact from './constact.js'
 import Payment from '../../models/payment.js'
 import data from '../data.js'
 import { useParams } from 'react-router-dom'
export default function Detail(){
   
    const {state,dispatch}=useContext(UserContext)
    
    const {id}=useParams()
    // const obj=data.find((res)=>{
    //     return res.id==id
    // })

    
    const [overview,setOverview]=React.useState(true)
    const [contact,setContact]=React.useState(false)
    const [showOrder,setShowOrder]=React.useState(false)
    const [showUser,setShowUser]=React.useState(false)
    const [showPayment,setshowPayment]=React.useState(false)
    const [auth,setAuth]=React.useState(false)
    const [obj,setObj]=React.useState({})
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
   

useEffect(()=>{
    const getData=async ()=>{
        // const data=await axios.get(`http://localhost:5000/restaurants`)
        const data=await axios.get(`/restaurants`)
       
         const obj=data.data.find((res)=>{
         return res.id==id
          })
       
        setObj(obj)
    }
    getData()
 },[])
 console.log(obj)
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


   const handleModel=async ()=>{
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
           
            const err=new Error(res.error)
            throw err
        }
        else{
           
            setShowOrder(!showOrder)
            setShowUser(!showUser)
        }

    }catch(err){
        console.log("user not loged in")
        setAuth(true)
    }
   }

 function handlePayment(){
    setshowPayment(!showPayment)
    setShowUser(!showUser)
 }
 function extra(){
    setShowOrder(!showOrder)
    setAuth(false)
 }
    
    return(
        <div>
             
            <Nav />
            <div className='detail'>
               <div>
                 <img src={obj.img} width='500px'></img>
               </div>
                
               <h1 style={{margin:'0rem 1rem',letterSpacing:'2px'}}>{obj.name}</h1>
               <div className='btns'>
               <button onClick={handleChange} id='overview' style={{borderBottom: overview?'red 2px solid':'none'}}>Overview</button>
                <button onClick={handleChange} id='contact' style={{borderBottom: contact?'red 2px solid':'none'}}>Contact</button>
               
                <button className='orderbtn' onClick={()=>{setShowOrder(!showOrder)}}>Place Order Online</button>
                
                
               </div>
               
               {overview && <Overview cuisine={obj.cuisines} cost={obj.cost}/>}
               {contact && <Contact phone={obj.phone} city={obj.city} address={obj.address} name={obj.name}/>}
               
               {showOrder && <Order foods={obj.food} name={obj.name} close={extra} pay={handleModel} auth={auth}/>}
               {showUser && <Info close={()=>setShowUser(!showUser)} name={obj.name} payment={handlePayment}/>}
               {showPayment && <Payment close={()=>setshowPayment(!showPayment)}/>}
            </div> 
        </div>
    )
}