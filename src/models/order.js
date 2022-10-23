import React,{useState} from "react"
export default function Order({foods,name,close,pay}){
 
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
         console.log(pre)
         return pre+price
      })
      
   }
   function decreament(name,price){
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

  
 return(
    <div className="food-list-container">
      <div className="food-list">
         <div style={{display:'flex',justifyContent:'space-between'}}>
         <div style={{fontSize:'1.8rem',marginBottom:'2rem'}}>{name}</div>
         <div style={{cursor:'pointer',fontSize:'2rem'}} onClick={close}>x</div>
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
            <h2>${total}</h2>
            <button onClick={pay}>Pay Now</button>
        </div>
        </div>
    </div>
 )
}