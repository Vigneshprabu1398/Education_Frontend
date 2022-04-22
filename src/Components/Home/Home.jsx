import { Link } from "react-router-dom";
import "./Home.css"
import logo from "../Images/logo.png"
import gif from "../Images/homepage.jpg"

export const Home = () =>{
    return(
        <div>
            <div id="navbar">
                <img className="logo" src={logo} alt="" />
                <Link id="maintext" className="text" to="/principal">Principal</Link>
                <Link className="text" to="/staff">Staff</Link>
                <Link className="text" to="/student">Student</Link>
                <Link className="text" to="/parent">Parent</Link>
            </div>
            <div id="content">
                <img src={gif} alt="" />
                <h1 id="home">Home Page</h1>
            </div>
        </div>
    );
}

//testing...
