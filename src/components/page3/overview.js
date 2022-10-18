export default function(props){
    return(
        <div className="overview">
            <h1>About this place</h1>

            <div className="cuisine">
            <h2>Cuisine</h2>
            <h3>{props.cuisine}</h3>
            </div>
           
            <div className="cost">
            <h2>Average Costs</h2>
            <h3>{props.cost}</h3>
            </div>
            
        </div>
    )
}