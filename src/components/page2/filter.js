import Nav from './navbar.js'
import { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Paginate from './paginationBtn.js'



export default function Filter(){
  const [restaurant,setRestaurant]=useState([])
  const [inputName,setInputName]=useState('')
  const [itemPerPage,setItemPerPage]=useState(2)
  const [pageNum,setPageNum]=useState(1)
  const [filter,setFilter]=useState({
    cuisine:'North',
    lowCost:0,
    highCost:10000,
    ascending:'true'
  })

 useEffect(()=>{
    const getData=async ()=>{
        const data=await axios.get('http://localhost:5000/restaurants')
       
        setRestaurant(data.data)
    }
    getData()
 },[])


const handleSearch=()=>{
    const getData=async ()=>{

        const data=await axios.get(`http://localhost:5000/restaurants?q=${inputName}
        `)
       console.log(data.data)
        setRestaurant(data.data)
    }
    getData()
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
         <h1>Breakfast Places in Mumbai</h1>
         <div className='filter-container'>
            <div className='filter'>
                <h3>Filters</h3>
                
            <input type='text' onChange={(e)=>{setInputName(e.target.value)}}></input>
            <button onClick={handleSearch}>Search</button>
                <div className='cuisine'>
                    <h3>Cuisine</h3>
                    <input type="radio" name="cuisine"/>
                    <label>North Indian</label><br/>
                    <input type="radio" name="cuisine"/>
                    <label>South Indian</label><br/>
                    <input type="radio" name="cuisine"/>
                    <label>Chinese</label><br/>
                    <input type="radio" name="cuisine"/>
                    <label>Fast Food</label><br/>
                    <input type="radio" name="cuisine"/>
                    <label>Street Food</label><br/>
                </div>

                <div className='cost'>
                    <h3>Cost For Two</h3>
                    <input type="radio" name="price"/>
                    <label>Less than 500</label><br/>
                    <input type="radio" name="price"/>
                    <label>500 to 1000</label><br/>
                    <input type="radio" name="price"/>
                    <label>1000 to 1500</label><br/>
                    <input type="radio" name="price"/>
                    <label>1500 to 2000</label><br/>
                    <input type="radio" name="price"/>
                    <label>2000+</label><br/>
                </div>
               
               <div className='sort'>
                <h3>Sort</h3>
                <input type="radio" name="sort"/>
                    <label>Price low to high</label><br/>
                    <input type="radio" name="sort"/>
                    <label>Price high to low</label><br/>
               </div>

            </div>
            <div className='filter-food'>
                   {
                    paginateRestaurants.map((obj)=>{
                        return(
                            <div className='restaurant'>
                            <div style={{display:'flex', margin:'1rem 0'}}>
                                <img src={obj.img} width='300px' style={{margin:'0 1rem'}}></img>
                                <div >
                                    <Link to={`/detail/${obj.id}`}><h1>{obj.name}</h1></Link>
                                    <h3>FORT</h3>
                                    <h3>{obj.address + obj.city}</h3>
                                </div>
                            </div>
                            <div style={{borderTop:'1px solid #00000029', padding:'1rem 2rem', lineHeight:'30px'}}>
                                <span>CUISINES:</span>
                                <span>Bakery</span><br/>
                                <span>COST FOR TWO:</span>
                                <span> ${obj.cost}</span>
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