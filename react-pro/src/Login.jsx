import { useEffect, useState } from "react";
import Home from "./Home";
import { useNavigate } from "react-router-dom";

const Login = () =>{

        let navigate = useNavigate();
        let[getdata,setData] = useState(null)
        let[status,setStatus] = useState(false) 
        let[inputdata,setInp] = useState({
            "name":'',
            "numb":'',
            "psw":'',
        })
    
        const hinput = (e) =>{
            const{name,value} = e.target;
            console.log(e.target.value);
            setInp({
                ...inputdata,
                [name]:value
            })
    
        }
        const validform = (e) =>{
            e.preventDefault();
            console.log(inputdata);
            if(inputdata.name === getdata.name 
                && inputdata.numb === getdata.numb 
                  && inputdata.psw === getdata.psw)
            {
                alert("Successfull")
                setStatus(true)
            }
            else{
                alert("Data not matched")      
           }
    }
            if(status)
            {
               navigate('/home')
            }
        
            useEffect(()=>{
                let getd = JSON.parse(localStorage.getItem("data"))
                setData(getd)
            })
        return(
            <>
                <div className="main">
                    <h1>Login</h1>
    
                    <form onSubmit={validform}>
                        <label htmlFor="">Name</label>
                        <input type="text" name="name" value={inputdata.name} placeholder="Enter your Name" onChange={hinput}  /> <br />
    
                        <label htmlFor="">Number</label>
                        <input type="text" name="numb" value={inputdata.numb} placeholder="Enter your Number" onChange={hinput} /> <br />
                        
                        <label htmlFor="">Password</label>
                        <input type="text" name="psw" value={inputdata.psw} placeholder="Enter Your Password" onChange={hinput} /> <br />
                        
                        
                        <input type="submit"  />
                    </form>
                </div>
            </>
        )
}

export default Login