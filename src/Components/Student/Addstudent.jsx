import { Link } from "react-router-dom"
import logo from "../Images/logo.png"
import "./Addstudent.css";

export const Addstudent = ()=>{

    return(
        <div id="addstudent">

            <div id="pri-navbar">
              <Link to="/principal"><img className="logo" src={logo} alt="" /></Link>
            </div>

            <div id="addstudent-content">
                <h4 className="addstudent-content-head">Add Student</h4>
                <br />
                <label className="addstudent-content-label">Student ID</label>
                <br />
                <input className="addstudent-content-input" type="number" />
                <br />
                <br />
                <label className="addstudent-content-label">Student Name</label>
                <br />
                <input className="addstudent-content-input" type="text" />
                <br />
                <br />
                <label className="addstudent-content-label">Student Email</label>
                <br />
                <input className="addstudent-content-input" type="text" />
                <br />
                <br />
                <label className="addstudent-content-label">Age</label>
                <br />
                <input className="addstudent-content-input" type="number" />
                <br />
                <br />
                <label className="addstudent-content-label">Date of Birth</label>
                <br />
                <input className="addstudent-content-input" type="date" />
                <br />
                <br />
                <label className="addstudent-content-label">Student Mobile No</label>
                <br />
                <input className="addstudent-content-input" type="number" />
                <br />
                <br />
                <label className="addstudent-content-label">Student Class</label>
                <br />
                <input className="addstudent-content-input" type="text" />
                <br />
                <br />
                <label className="addstudent-content-label">Student Section</label>
                <br />
                <input className="addstudent-content-input" type="text" />
                <br />
                <br />
                <label className="addstudent-content-label">Student Address</label>
                <br />
                <textarea className="addstudent-content-input" />
                <br />
                <br />
                <label className="addstudent-content-label">Father's Name</label>
                <br />
                <input className="addstudent-content-input" type="text" />
                <br />
                <br />
                <label className="addstudent-content-label">Father's Email</label>
                <br />
                <input className="addstudent-content-input" type="text" />
                <br />
                <br />
                <label className="addstudent-content-label">Father's Mobile No</label>
                <br />
                <input className="addstudent-content-input" type="number" />
                <br />
                <br />
                <label className="addstudent-content-label">Student occupation</label>
                <br />
                <input className="addstudent-content-input" type="text"/>
                <br />
                <br />
                <label className="addstudent-content-label">Mother's Name</label>
                <br />
                <input className="addstudent-content-input" type="text" />
                <br />
                <br />
                <label className="addstudent-content-label">Mother's Email</label>
                <br />
                <input className="addstudent-content-input" type="text" />
                <br />
                <br />
                <label className="addstudent-content-label">Mother's Mobile No</label>
                <br />
                <input className="addstudent-content-input" type="text" />
                <br />
                <br />
                <label className="addstudent-content-label">Mother's Occupation</label>
                <br />
                <input className="addstudent-content-input" type="text" />
                <br />
                <input type="submit" name="" id="addstudent-content-submit" />
            </div>

        </div>
    )
}