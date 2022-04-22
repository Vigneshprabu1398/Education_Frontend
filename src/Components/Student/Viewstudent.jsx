import { Link } from "react-router-dom"
import logo from "../Images/logo.png"
import "./Viewstudent.css";

export const Viewstudent = ()=>{

    return(
        <div id="viewstudent">
            
            <div id="view-navbar">
              <Link to="/login"><img className="logo" src={logo} alt="" /></Link>
            </div>

            <h2 className="viewstudent-head">Student Details</h2>

            <table className="viewstudent-table">
                <thead>
                    <tr>
                        <td>Student ID</td>
                        <td>Student Name</td>
                        <td>Student Email</td>
                        <td>Age</td>
                        <td>Date of Birth</td>
                        <td>Student Mobile No</td>
                        <td>Class</td>
                        <td>Section</td>
                        <td>Address</td>
                        <td>Father's Name</td>
                        <td>Father's Email</td>
                        <td>Father's Mobile No</td>
                        <td>Father's Occupation</td>
                        <td>Mother's Name</td>
                        <td>Mother's Email</td>
                        <td>Mother's Mobile No</td>
                        <td>Mother's Occupation</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="viewstudent-table-td1">06001</td>
                        <td className="viewstudent-table-td2">Mugil</td>
                        <td className="viewstudent-table-td1">mugil@gmail.com</td>
                        <td className="viewstudent-table-td2">26</td>
                        <td className="viewstudent-table-td1">28/03/1996</td>
                        <td className="viewstudent-table-td2">6374488232</td>
                        <td className="viewstudent-table-td1">Sixth</td>
                        <td className="viewstudent-table-td2">A</td>
                        <td className="viewstudent-table-td1">Dharmapuri, Tamilnadu</td>
                        <td className="viewstudent-table-td2">Senthilkumar</td>
                        <td className="viewstudent-table-td1">senthil@gmail.com</td>
                        <td className="viewstudent-table-td2">1234567890</td>
                        <td className="viewstudent-table-td1">Farmer</td>
                        <td className="viewstudent-table-td2">Malathi</td>
                        <td className="viewstudent-table-td1">malathi@gmail.com</td>
                        <td className="viewstudent-table-td2">0987654321</td>
                        <td className="viewstudent-table-td1">Home Maker</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}