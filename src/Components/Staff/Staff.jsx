import { Link } from "react-router-dom";
import "./Staff.css"
import logo from "../Images/logo.png";

export const Staff = () =>{
    return(
        <div id="staffpage">
            
            <div id="staff-navbar">
                <Link to="/login"><img className="logo" src={logo} alt="" /></Link>
                <Link to="/addMarks"><button id="addmark-first" className="addview">Add Marks</button></Link>
                <Link to="/addTimetable"><button className="addview">Add Timetable</button></Link>
                <Link to="/viewStaffDetails"><button className="addview">View Staff Details</button></Link>
                <Link to="/login"><button className="addview">Logout</button></Link>
            </div>

            <div id="staff-content">
                <div className="staff">
                    <Link className="staff-link1" to="/viewStudent"><h1>View Student Deatils</h1></Link>
                </div>
                <div className="student">
                    <Link className="staff-link2" to="/viewMarks"><h1>View Student Marks</h1></Link>
                </div>
            </div>

        </div>
    );
}