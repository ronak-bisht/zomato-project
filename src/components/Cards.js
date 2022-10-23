import {Link} from 'react-router-dom'
export default function(props){
    return(
        <div className="card">
            <div className="img">
                 <img src={props.img}></img>
            </div>
           
            <div className="card-content">
               <Link to={`/filter/${props.title}`}> <h2>{props.title}</h2></Link>
                <p>{props.para}</p>
            </div>
        </div>
    )
}