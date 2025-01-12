import { useState } from "react"
import Login from "./Login"
import { Link } from "react-router-dom"


const Signup = () =>{

    let[status,setStatus] = useState(false) 
    let[inputdata,setInp] = useState({
        "name":'',
        "age":'',
        "city":'',
        "numb":'',
        "psw":'',
        "psw2":''
    })

    const hinput = (e) =>{
        const{name,value} = e.target;
        console.log(e.target.value);
        setInp({
            ...inputdata,
            [name]:value
        })

    }
    const finalsubmit = (e) =>{
        e.preventDefault();
        console.log(inputdata);
        if(inputdata.name === "" || inputdata.age === "" || inputdata.city === "" || inputdata.numb === "" || inputdata.psw === "" || inputdata.psw2 === "")
        {
            alert("All fields are required")
        }
        else{
            alert("Signed Up Successfully")
        localStorage.setItem("data",JSON.stringify(inputdata))  
        setStatus(true)      
       }
}
        if(status)
        {
           return <Login />
        }
    
    return(
        <>
            <div className="main">
                <h1>Sign Up</h1>

                <form onSubmit={finalsubmit}>
                    <label htmlFor="">Name</label>
                    <input type="text" name="name" value={inputdata.name} placeholder="Enter your Name" onChange={hinput}  /> <br />

                    <label htmlFor="">Age</label>
                    <input type="text" name="age" value={inputdata.age} placeholder="Enter your Age" onChange={hinput} /> <br />
                    
                    <label htmlFor="">City</label>
                    <input type="text" name="city" value={inputdata.city} placeholder="Enter your City" onChange={hinput} /> <br />
                    
                    <label htmlFor="">Number</label>
                    <input type="text" name="numb" value={inputdata.numb} placeholder="Enter your Number" onChange={hinput} /> <br />
                    
                    <label htmlFor="">Password</label>
                    <input type="text" name="psw" value={inputdata.psw} placeholder="Enter new Password" onChange={hinput} /> <br />
                    
                    <label htmlFor="">Confirm Password</label>
                    <input type="text" name="psw2" value={inputdata.psw2} placeholder="Confirm Password" onChange={hinput} /> <br />
                    
                    <input type="submit"  />
                </form>
                <h1>ALready an Account? Login here- <Link to={'/login'}>Login</Link></h1>
            </div>
        </>
    )
}

export default Signup