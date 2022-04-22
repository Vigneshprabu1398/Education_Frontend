import { Link } from "react-router-dom"
import logo from "../Images/logo.png"
import "./Viewstudent.css";

export const Viewstudent = ()=>{

    return(
        <div id="viewstudent">
            
            <div id="pri-navbar">
              <Link to="/login"><img className="logo" src={logo} alt="" /></Link>
            </div>

        </div>
    )
}