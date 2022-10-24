export default function({close}){
    return(
        <div>
            <div className="payment-container">
                <div className="payment">
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                    <h1>Payment Options</h1>
                    <h2 style={{cursor:'pointer'}} onClick={close}>X</h2>
                    </div>
                    
                    <input type='text' placeholder='Card number'></input><br/>
                    <input type='text' placeholder='Valid through (mm/yy)'></input>
                    <input type='text' placeholder='CVV'></input><br/>
                    <input type='text' placeholder='Name on card'></input>
                    <button>Pay</button>
                </div>
                
            </div>
        </div>
    )
}