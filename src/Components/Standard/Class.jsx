import "./Class.css"
import logo from "../Images/logo.png"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../Context/Context";
import { useNavigate } from "react-router";


export const Class = () =>{
    
    const section = ["A", "B", "C", "D", "Viewall"]
    const {state,handleChange} = useContext(AppContext)
    const standard = state;
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate('/students');
    }
    return(
        <div className="class">
             <div id="navbar">
                <img className="logo" src={logo} alt="" />
                <Link id="maintext" className="text" to="/login">Principal</Link>
                <Link className="text" to="/login">Staff</Link>
                <Link className="text" to="/login">Student</Link>
                <Link className="text" to="/login">Parent</Link>
            </div>
            <div className="head">
                <h1>Select the section</h1>
                <h1>{standard}</h1>

            </div>
            <div className="section">
                {section.map((sec) => (
                        <div className="stand"
                        key={sec}
                        onClick={()=>{
                            handleChange(sec);
                            handleClick();
                            
                        }}>
                            <h1>{sec}</h1>
                        </div>
                    ))}
            </div>
        </div>
    );
}