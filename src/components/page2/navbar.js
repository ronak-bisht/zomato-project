import Button from '../Button.js'
export default function Nav(){
    return(
        <div className='navbar'>
            <img src={require('../../assets/Zomato-Logo.png')} width="100px"></img>
            <div>
                <Button 
                text='Login'
                size='md'
                />
                <Button 
                isOutline='1'
                text='Create an account'
                size='md'
                />
            </div>
        </div>
    )
}