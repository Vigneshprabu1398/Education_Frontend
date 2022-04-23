import "./Standard.css"
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import { useContext, useState } from "react";
import { AppContext } from "../Context/Context";
import { useNavigate } from "react-router";

export const Standard = () =>{
    const stand=["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII" ]
    const {state,handleChange} = useContext(AppContext)
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate('/class');
    }

    return(
        <div>
             <div id="principal-navbar">
                <Link to="/login"><img className="logo" src={logo} alt="" /></Link>
                <Link to="/addStudent"><button id="addview-first" className="addview">Add Student</button></Link>
                <Link to="/addStaff"><button className="addview">Add Staff</button></Link>
                <Link to="/login"><button className="addview">Logout</button></Link>
            </div>
            <div className="smain">
                {stand.map((sec) => (
                    <div className="stand"
                    key={sec}
                    onClick={()=>{
                        handleChange(sec);
                        handleClick();
                        
                    }}>
                        <p>{sec}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}