export default function Paginate({paginate_item,total,handlePage}){
    
    const arr=[]
    for(let i=1;i<=Math.ceil(total/paginate_item);i++){
        arr.push(i)
    }
return(
    <div style={{display:'flex'}}>
       {
        arr.map((num)=>{
            return(
                <div style={{padding:'0.3rem 0.6rem',backgroundColor:'red',marginLeft:'2px',color:'white',cursor:'pointer'}} onClick={()=>{handlePage(num)}}>

                    {num}
                </div>
            )
        })
       }
    </div>
)
}