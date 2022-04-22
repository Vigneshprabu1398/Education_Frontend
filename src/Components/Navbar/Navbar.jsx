import { Link } from "react-router-dom";
import "./Navbar.css"

export const Navbar = () =>{
    return(
        <div id="nav">
            <Link to="/">Home</Link>
            <Link to="/login">Principal</Link>
            <Link to="/login">Staff</Link>
            <Link to="/login">Student</Link>
            <Link to="/login">Parent</Link>
            <Link to="/login">Parent</Link>
        </div>
    );
}