export default function(props){
    return(
        <div className="contact">
            <h3>Phone Number</h3>
            <h3 style={{color:'red',marginBottom:'0.6rem'}}>{props.phone}</h3>

            <div className="address">
                <h2>{props.name}</h2>
                <h3>{props.address}</h3>
                <h3>{props.city}</h3>
            </div>
        </div>
    )
}