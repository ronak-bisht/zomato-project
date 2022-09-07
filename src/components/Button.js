export default function button(props){

    const color=props.isBackground==1?'btn-red':''
    const outline=props.isOutline==1?'btn-outline':''
    

   
    return(
      <button className={`btn ${color} ${outline} ${props.size}`} onClick={props.openLogin}>{props.text}</button>
    )
}