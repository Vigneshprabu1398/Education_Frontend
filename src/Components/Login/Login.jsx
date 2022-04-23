import "./Login.css";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';
import { useState } from 'react'

export const Login = ()=>{
    const initialLoginForm = {
        name: '',
        password: '',
      };

    const [loginForm, setLoginForm] = useState(initialLoginForm);
    const { name, password } = loginForm;
    const navigate = useNavigate();

    const handleLoginFormChange = (e) => {
        const { name, value } = e.target;
        setLoginForm({ ...loginForm, [name]: value });
        
      };

    const handleLogin = (e) => {
    e.preventDefault();
    if(name==="vicky" && password==="vicky@123"){
        alert("Logined as Principal!")
        navigate('/principal');
    }else if(name==="mugil" && password==="mugil@123"){
        alert("Logined as Teacher!")
        navigate('/staff');
    }else if(name==="student" && password==="student@123"){
        alert("Logined as Student!")
        navigate('/student');
    }else if(name==="parent" && password==="parent@123"){
        alert("Logined as Parent!")
        navigate('/parent');
    }
    else{
        alert("invalid Name or Password!")
    }
    };


    return(
        <div className="login">

            <div id="pri-navbar">
              <Link to="/"><img className="logo" src={logo} alt="" /></Link>
            </div>
            
            <form id="login-div" onSubmit={handleLogin}>
                <h1>Login</h1>
                <br />
                <label>email</label>
                <br />
                <input
                type='text'
                name='name'
                value={name}
                className="email"
                onChange={handleLoginFormChange}
                required
                />
                <br />
                <label>password</label>
                <br />
                <input
                type='password'
                className="pwd"
                name='password'
                value={password}
                onChange={handleLoginFormChange}
                required
                />
                <br />
                <input type='submit' className='submitLoginForm' />
            </form>
        </div>
        
    )
}