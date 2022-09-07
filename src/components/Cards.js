export default function(props){
    return(
        <div className="card">
            <div className="img">
                 <img src={props.img}></img>
            </div>
           
            <div className="card-content">
                <h2>{props.title}</h2>
                <p>{props.para}</p>
            </div>
        </div>
    )
}