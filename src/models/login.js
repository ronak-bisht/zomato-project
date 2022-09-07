
export default function login(props){
    
    return(
        <div className="model-container">
            <div className="model">
                <div className='header'>
                    <h1>{props.register}</h1>
                    <button className="close" onClick={props.closeLogin}>X</button>
                </div>
                <button className='gmail'>Continue with Gmail</button>
                <button className='facebook'>Continue with Facebook</button>
                <div className='footer' >
                    <h2>Don't have account? <span>{props.login}</span></h2>
                </div>
            </div>
        </div>
    )
}