import { useContext } from "react";
import { AppContext } from "../Context/Context";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png"

export const Class = () =>{
    const {state,handleChange} = useContext(AppContext);
    console.log("class",state);
    return(
        <div>
            <img className="logo" src={logo} alt="" />
            <Link id="maintext" className="text" to="/login">Principal</Link>
            <Link className="text" to="/login">Staff</Link>
            <Link className="text" to="/login">Student</Link>
            <Link className="text" to="/login">Parent</Link>
            <h1>{state}</h1>          
        </div>
    );
}