import "./Login.css"
import logo from "../Images/logo.png"
import { Link } from "react-router-dom"

export const Login = ()=>{
    return(
        <div className="login">

            <div id="pri-navbar">
              <Link to="/"><img className="logo" src={logo} alt="" /></Link>
            </div>

            <div id="login-div">
            <h4>LOGIN</h4>
            <br />
            <label>email</label>
            <br />
            <input className="email" type="text" />
            <br />
            <label>Password</label>
            <br />
            <input className="pwd" type="text" />
            <br />
            <input className="submit" type="Submit"/>
            </div>
        </div>
    )
}