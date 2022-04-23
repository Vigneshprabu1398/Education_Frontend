import { Link } from "react-router-dom"
import logo from "../Images/logo.png"
import "./Studentdetails.css"

export const Studentdetails = ()=>{

    

    return(
        <div id="studentdetails">

            <div id="view-navbar">
                <Link to="/student"><img className="logo" src={logo} alt="" /></Link>
            </div>

            <div id="studentform">
                <div id="student-nav">
                    <h3>
                        Student Detail
                    </h3>
                </div>

                <div id="studentform-info">
                <div id="left">
                        <div id="left1">
                            <h2 className="left-name">Student Name</h2>
                            <p className="left-para">Mugilarasan</p>
                        </div>
                        <div id="left2">
                            <h2 className="left-name">Student Email</h2>
                            <p className="left-para">mugil@gmail.com</p>
                        </div>
                        <div id="left3">
                            <h2 className="left-name">Student DOB</h2>
                            <p className="left-para">28/03/1996</p>
                        </div>
                </div>

                <div id="right">
                    <img className="right-img" src="https://png.pngtree.com/element_origin_min_pic/16/08/18/1157b52614712cb.jpg" alt="" />
                </div>
                </div>

                <div id="form1">
                    <h2 className="left-name">Student Address</h2>
                    <p className="left-para">Dharmapuri, Tamilnadu</p>
                </div>
                <div id="form1">
                    <h2 className="left-name">Student Contact Number</h2>
                    <p className="left-para">6374488232</p>
                </div>
                <div id="form1">
                    <h2 className="left-name">Student Class</h2>
                    <p className="left-para">10</p>
                </div>
                <div id="form1">
                    <h2 className="left-name">Student Section</h2>
                    <p className="left-para">A</p>
                </div>
                <div id="form1">
                    <h2 className="left-name">Father's Name</h2>
                    <p className="left-para">Senthilkumar</p>
                </div>
                <div id="form1">
                    <h2 className="left-name">Father's Contact Number</h2>
                    <p className="left-para">9876543210</p>
                </div>
                <div id="form1">
                    <h2 className="left-name">Father's Email</h2>
                    <p className="left-para">senthil@gmail.com</p>
                </div>
                <div id="form1">
                    <h2 className="left-name">Father's Occupation</h2>
                    <p className="left-para">Farmer</p>
                </div>
                <div id="form1">
                    <h2 className="left-name">Mother's Name</h2>
                    <p className="left-para">Malathi</p>
                </div>
                <div id="form1">
                    <h2 className="left-name">Mother's Mobile Number</h2>
                    <p className="left-para">9087654321</p>
                </div>
                <div id="form1">
                    <h2 className="left-name">Mother's Email</h2>
                    <p className="left-para">malathi@gmail.com</p>
                </div>
                <div id="form1">
                    <h2 className="left-name">Mother's Occupation</h2>
                    <p className="left-para">House Wife</p>
                </div>

            </div>

        </div>
    )
}