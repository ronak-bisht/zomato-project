import React,{useState} from "react"
export default function Order({foods,name,close,pay,auth}){
 
   const [orderNum,setOrderNum]=useState({
      "Gobi Manchurian":0,
      "Panner":0,
      "Naan":0,
      "Samosa":0
   })
   const [total,setTotal]=useState(0)

   
   function increament(name,price){
      setOrderNum((pre)=>{
         
         return {
            ...pre,
            [name]:pre[name]+1
         }
      })

      
      setTotal((pre)=>{
         
         return pre+price
      })
      
   }
   function decreament(name,price){

      if(orderNum[name]>0){
         setOrderNum((pre)=>{
         
            return {
               ...pre,
               [name]:pre[name]-1
            }
         })
         
        
         setTotal((pre)=>{
            
            return pre-price
         })
      }
      
        
      
      
   }


 return(
    <div className="food-list-container">
      <div className="food-list">
         <div style={{display:'flex',justifyContent:'space-between'}}>
         <div className="head" style={{fontSize:'1.3rem',marginBottom:'1.7rem'}}>{name}</div>
         <div style={{cursor:'pointer',fontSize:'1.5rem'}} onClick={close}>x</div>
         </div>
         <div className="food-item">
        {
         foods.map((item)=>{
            return(
               <div className="food-container" style={{display:'flex',justifyContent:"space-between"}}>
               <div className="food">
                 <div> {item.name} </div>
                 <div> {item.price} </div>
                  <div> {item.desc} </div>
               </div>

               <div className="add-btn" style={{backgroundColor:'white'}}>
                  <div className="img" style={{width:'100px'}}>
                     image
                  </div>
                  <div style={{display:'flex'}}>
                     <button onClick={()=>{decreament(item.name,item.price)}}>-</button>
                     <div>{orderNum[item.name]}</div>
                     <button onClick={()=>{increament(item.name,item.price)}}>+</button>
                  </div>
               </div>
               
               </div>
            )
         })
        }

        </div>

        <div className="subtotal">
           
            <h2>Subtotal</h2>
            <h2>₹{total}</h2>
            <button onClick={pay}>Pay Now</button>
        </div>
        {auth && <div style={{color:'red'}}>Please Login First</div>}
        </div>
        
    </div>
 )
}