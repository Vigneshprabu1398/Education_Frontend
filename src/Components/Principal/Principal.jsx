import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import { useNavigate } from "react-router";
import "./Principal.css"


export const Principal = () =>{

    const navigate = useNavigate();
    const handleStudent =(e)=>{
        navigate("/standard");
    }
    return(

        <div className="principalpage">

            <div id="principal-navbar">
                <Link to="/login"><img className="logo" src={logo} alt="" /></Link>
                <Link to="/addStudent"><button id="addview-first" className="addview">Add Student</button></Link>
                <Link to="/addStaff"><button className="addview">Add Staff</button></Link>
                <Link to="/login"><button className="addview">Logout</button></Link>
                <Link to="/viewStudent"><button className="addview">View</button></Link>
            </div>

            <h4 className="hello">Hello Principal,</h4>

            <div id="principal-content">
                <div className="staff">
                    <h1>View staff Deatils</h1>
                </div>
                <div className="student" onClick={handleStudent}>
                    <h1>View Student Deatils</h1>
                </div>
            </div>

        </div>
    );
}