import { Link } from "react-router-dom";
import "./Home.css"
import logo from "../Images/logo.png"
import gif from "../Images/homepage.jpg"

export const Home = () =>{
    return(
        <div>

            <div id="navbar">
                <img className="logo" src={logo} alt="" />
                <Link id="maintext" className="text" to="/login">Principal</Link>
                <Link className="text" to="/login">Staff</Link>
                <Link className="text" to="/login">Student</Link>
                <Link className="text" to="/login">Parent</Link>
                <Link className="text" to="/login">Parent</Link>
            </div>
            <div id="content">
                <img src={gif} alt="" />
                <h1 id="home">Home Page</h1>
            </div>
        </div>
    );
}

//testing...
