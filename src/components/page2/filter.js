import Nav from './navbar.js'
import { useState,useEffect,useContext } from 'react'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Paginate from './paginationBtn.js'
import { UserContext } from '../../App.js'


export default function Filter(){
    const {state,dispatch}=useContext(UserContext)
    const {meal}=useParams()
    
  const [restaurant,setRestaurant]=useState([])
  const [inputName,setInputName]=useState('')
  const [itemPerPage,setItemPerPage]=useState(2)
  const [pageNum,setPageNum]=useState(1)
  
  const [filter,setFilter]=useState({
    cuisine:'North Indian',
    lowCost:0,
    highCost:10000,
    ascending:'true'
  })



 useEffect(()=>{
    const getData=async ()=>{
        // const data=await axios.get(`http://localhost:5000/restaurants`)
        const data=await axios.get(`/restaurants`)
        
        setRestaurant(data.data.filter((d)=>{
            return d.meal===meal
        }))
    }
    getData()
 },[filter])

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

const handleSearch=()=>{
    const getData=async ()=>{

        const data=await axios.get(`http://localhost:5000/restaurants?q=${inputName}
        `)
       
        setRestaurant(data.data)
    }
    getData()
}

const handleFilter=(event)=>{
    const {name,value,type,lowcost,highcost}=event.target
    
    if(name==='price'){
        const arr=value.split(' ')
        
        setFilter((pre)=>{
            return {
                ...pre,
                'lowCost':Number(arr[0]),
                'highCost':Number(arr[1])
            }
        })
    }
    
    else{
        setFilter((pre)=>{
            return {
                ...pre,
               [name]:value
            }
        })
    }
   
    
}


const last=pageNum*itemPerPage
const first=last-itemPerPage
 const paginateRestaurants=restaurant.slice(first,last)
 const handlePage=(index)=>{
    setPageNum(index)
 }

    return(
        <div>
         <Nav />
         
         <div className='filter-container'>
            <div className='filter'>
                <h3>Filters</h3>
                
            <input type='text' placeholder='Enter restaurant'  onChange={(e)=>{setInputName(e.target.value)}}></input>
            <button onClick={handleSearch}>Search</button>
                <div className='cuisine'>
                    <h3>Cuisine</h3>
                    <input type="radio" name="cuisine" value='North Indian' onChange={handleFilter}/>
                    <label>North Indian</label><br/>
                    <input type="radio" name="cuisine" value='South Indian' onChange={handleFilter}/>
                    <label>South Indian</label><br/>
                    <input type="radio" name="cuisine" value='Chinese' onChange={handleFilter}/>
                    <label>Chinese</label><br/>
                    <input type="radio" name="cuisine" value='Fast Food' onChange={handleFilter}/>
                    <label>Fast Food</label><br/>
                    <input type="radio" name="cuisine" value='Street Food' onChange={handleFilter}/>
                    <label>Street Food</label><br/>
                </div>

                <div className='cost'>
                    <h3>Cost For Two</h3>
                    <input type="radio" name="price" onChange={handleFilter} value='0 500'/>
                    <label>Less than 500</label><br/>
                    <input type="radio" name="price" onChange={handleFilter} value='500 1000'/>
                    <label>500 to 1000</label><br/>
                    <input type="radio" name="price" onChange={handleFilter} value='1000 1500'/>
                    <label>1000 to 1500</label><br/>
                    <input type="radio" name="price" onChange={handleFilter} value='1500 2000'/>
                    <label>1500 to 2000</label><br/>
                    <input type="radio" name="price"  onChange={handleFilter} value='2000 10000'/>
                    <label>2000+</label><br/>
                </div>
               
               <div className='sort'>
                <h3>Sort</h3>
                <input type="radio" name="ascending" value='true' onChange={handleFilter}/>
                    <label>Price low to high</label><br/>
                    <input type="radio" name="ascending" value='false' onChange={handleFilter}/>
                    <label>Price high to low</label><br/>
               </div>

            </div>
            <div className='filter-food'>
                   {
                    paginateRestaurants.map((obj)=>{
                        return(
                            <div className='restaurant'>
                            <div className='inner' style={{display:'flex'}}>
                                <img src={obj.img} width='300px' style={{margin:'0 1rem'}}></img>
                                <div className='inner-content'>
                                    <Link to={`/detail/${obj.id}`} style={{textDecoration:"none"}}><h1>{obj.name}</h1></Link>
                                    <h3>FORT</h3>
                                    <h3>{`${obj.address}`}{`, ${obj.city}`}</h3>
                                </div>
                            </div>
                            <div className='bottom' style={{borderTop:'1px solid #00000029',  lineHeight:'30px'}}>
                                <span>CUISINES:</span>
                                <span> {obj.cuisines}</span><br/>
                                <span>COST FOR TWO:</span>
                                <span> ₹{obj.cost}</span>
                            </div>
                        </div>
                        )
                    })
                   }

                   <Paginate total={restaurant.length} paginate_item={itemPerPage} handlePage={handlePage}/>
               
            </div>
         </div>
        </div>
    )
}