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
            </div>
            <div id="content">
                <img className="content-img" src={gif} alt="" />
                <h1 id="home">Virtual Schooling</h1>
                <div id="home-div">
                <div>
                    <h1>Vision</h1>
                    <p>Our vision is to empower students to acquire, demonstrate, articulate
                       and value knowledge and skills that will support them, as life-long
                       learners, to participate in and contribute to the global world and
                       practise the core values of the school: respect, tolerance & 
                       inclusion, and excellence.</p>
                </div>
                <div>
                    <h1>Mision</h1>
                    <p>We strive to provide our graduates with an academic foundation 
                       that will enable them to gain admission to the colleges or 
                       universities of their choice as well as to succeed in those
                       institutions.</p>
                </div>
                
                </div>
            </div>
        </div>
    );
}

//testing...
