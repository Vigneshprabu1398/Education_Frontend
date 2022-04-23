import { useContext } from "react";
import { AppContext } from "../Context/Context";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png"

export const Class = () =>{
    const {state,handleChange} = useContext(AppContext);
    console.log("class",state);
    return(
        <div>
            <div id="principal-navbar">
                <Link to="/login"><img className="logo" src={logo} alt="" /></Link>
                <Link to="/addStudent"><button id="addview-first" className="addview">Add Student</button></Link>
                <Link to="/addStaff"><button className="addview">Add Staff</button></Link>
                <Link to="/login"><button className="addview">Logout</button></Link>
            </div>
            <h1>{state}</h1>          
        </div>
    );
}