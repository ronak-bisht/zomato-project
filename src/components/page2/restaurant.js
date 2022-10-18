import axios from "axios"

 
  
  var data
    axios.get('http://localhost:5000/restaurants').then((res)=>{
        
         data=res.data
    })
             
      export default data  
      
     


