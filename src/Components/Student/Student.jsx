import { Link } from "react-router-dom";
import logo from "../Images/logo.png"
import "./Student.css"

export const Student = () =>{
    return(
        <div id="student">

            <div id="pri-navbar">
                <Link to="/staff"><img className="logo" src={logo} alt="" /></Link>
            </div>

            <div id="student-content">
                <div className="staff">
                    <Link className="stu-link1" to="/studentdetails"><h1>View Deatils</h1></Link>
                </div>
                <div className="student">
                   <Link className="stu-link2" to="/timetable"><h1>View Timetale</h1></Link>
                </div>
            </div>

        </div>
    );
}