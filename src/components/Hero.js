import Button from './Button.js'
import zomato from '../assets/Zomato-Logo.png'
export default function hero(){
    return(
       
       <div className='hero-section'>


         <div className='buttons'>
            <Button 
            isOutline="0"
            isBackground='0'
            size=''
            text='Login'
              />

              <Button 
               isOutline='1'
               isBackground='0'
               size='lg'
               text='Create an account'
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


       

       </div>
        
    )
}