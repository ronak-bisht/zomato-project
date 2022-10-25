
import React from "react"
import { UserContext } from "../App.js";
import { useContext } from "react";

export default function Login(props){
    const {state,dispatch} = useContext(UserContext);

    const [user,setUser]=React.useState({
        name:'',
        email:'',
        password:''
    })
    const [error,setError]=React.useState(false)
    function handleChange(e){
        const {name,value}=e.target
        setUser((pre)=>{
            return {
                ...pre,
                [name]:value

            }

        })
        console.log(user)
        

    }
    
    async function register(){
        const {name,email,password}=user
        const res=await fetch('/register',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,password
            })
        })

        const data=await res.json()
        if(res.status===422 || !data){
           setError(true)
        }
        else{
            setUser({
                name:'',
                email:'',
                password:''
            })
            window.alert('successflul')
        }
    }

  async function login(e){
    const {email,password}=user
    e.preventDefault();
    const res=await fetch('/signin',{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            email,
            password
        })
    })

    const data=res.json()
    
    if(res.status===400||!data){
        setError(true)
    }
    else{
        dispatch({type:'USER',payload:true})
        props.extra()
        setUser({
            name:'',
            email:'',
            password:''
        })
        
        
        
    }

 }
    
    return(
        <div className="model-container">
            <div className="model">
                <div className='header'>
                    <h1>{props.register}</h1>
                    <button className="close" onClick={props.closeLogin}>X</button>
                </div>

                {
                        props.name && (
                            <div>
                                <label>Name: </label>
                                <input type='text' name="name" onChange={handleChange} value={user.name}></input>
                            </div>
                        )
                    }
                <div>                    
                <label>Email: </label>
                <input typeof="text" name="email" onChange={handleChange} value={user.email}></input>
                </div>
                <div>
                <label>Password: </label>
                <input typeof="password" name="password" onChange={handleChange} value={user.password}></input>
                </div>
                <div>
                    {props.name?<button className="login" onClick={register}>Register</button>:<button className="login" onClick={login}>Login</button>}
                </div>
                {/* <button className='gmail'>Continue with Gmail</button>
                <button className='facebook'>Continue with Facebook</button> */}
                <div className='footer' >
                    <h2>Don't have account? <span>{props.login}</span></h2>
                </div>

                {error && <div style={{color:'red'}}>Invalid Credentials</div>}
            </div>
        </div>
    )
}