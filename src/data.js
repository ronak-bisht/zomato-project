const pr=fetch('http://localhost:5000/restaurants').then((res)=>res.json()).catch((err)=>{
    console.log(err)
})
export default pr