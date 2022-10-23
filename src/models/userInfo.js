export default function({close,name,payment}){


    return(
        <div>
            <div className="user-info">
                <div className="info-container">
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                    <h1>{name}</h1>
                    <h2 style={{cursor:'pointer'}} onClick={close}>X</h2>
                    </div>
                    
                        <label>Name</label><br/>
                        <input type='text'></input><br/>
                        <label>Mobile Number</label><br/>
                        <input type='text'></input><br/>
                        <label>Address</label><br/>
                        <textarea type='text'></textarea><br/>
                        <button onClick={payment}>Proceed</button>
                   
                </div>
            </div>
        </div>
    )
}