import Card from './Cards.js'

const data=[
    {
        img:require('../assets/shutterstock_348320018.png'),
        title:'Breakfast',
        para:'Start your day with exclusive breakfast options',
        
    },
    {
        img:require('../assets/shutterstock_476864884.png'),
        title:'Lunch',
        para:'Start your day with exclusive breakfast options',
        
    },
    {

        img:require('../assets/shutterstock_1130181932.png'),
        title:'Snacks',
        para:'Start your day with exclusive breakfast options',
    
    },
    {
        img:require('../assets/shutterstock_351721442.png'),
        title:'Dinner',
        para:'Start your day with exclusive breakfast options',
        
    },
    {
        img:require('../assets/shutterstock_1304064250.png'),
        title:'Nightlife',
        para:'Start your day with exclusive breakfast options',
        
    },
    {
        img:require('../assets/shutterstock_305270834.png'),
        title:'Drinks',
        para:'Start your day with exclusive breakfast options'
    }
]
export default function(){
    return(
        <div className='foods'>

            <h1>Quick Searches</h1>
            <h3>Discover restaurants by type of meal</h3>
             <div className='card-container'> 

            {data.map((arr)=>{
                 return <Card title={arr.title} para={arr.para} img={arr.img}/>
                })}
             </div>
        </div>
       
    )
}