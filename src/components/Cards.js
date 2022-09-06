export default function(props){
    return(
        <div className="card">
            <img src={props.img}></img>
            <div className="card-content">
                <h2>{props.title}</h2>
                <p>{props.para}</p>
            </div>
        </div>
    )
}