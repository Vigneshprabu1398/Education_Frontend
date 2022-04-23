import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom"
import logo from "../Images/logo.png"
import "./Addstudent.css";

export const Addstudent = ()=>{


    const [formData, setFormData] = useState({
        id:"",
        name:"",
        email:"",
        age:"",
        dob:"",
        mobile:"",
        class:"",
        section:"",
        address:"",
        fname:"",
        femail:"",
        fmobile:"",
        foccupation:"",
        mname:"",
        memail:"",
        mmobile:"",
        moccupation:""
    });

    const handleChange = (e)=>{
        const {id, value} = e.target;
        setFormData({
            ...formData,
            [id]: value
        })
    }



    const handleSubmit = (e)=>{
        e.eventDefault();
        axios.post("https://education-backend.herokuapp.com/student", formData)
        .then(()=>{
            setFormData({
                id: "",
                name: "",
                email: "",
                age: "",
                dob: "",
                mobile: "",
                class: "",
                section: "",
                address: "",
                fname: "",
                femail: "",
                fmobile: "",
                foccupation: "",
                mname: "",
                memail: "",
                mmobile: "",
                moccupation: ""
            })
        })
    }


    return(
        <div id="addstudent">

            <div id="pri-navbar">
              <Link to="/principal"><img className="logo" src={logo} alt="" /></Link>
            </div>

            <div id="addstudent-content">

                <form onSubmit={handleSubmit}>
                    <h4 className="addstudent-content-head">Add Student</h4>
                    <br />
                    <label className="addstudent-content-label">Student ID</label>
                    <br />
                    <input id="id"
                        value={formData.id}
                        onChange={handleChange}
                        placeholder="enter student roll number"
                        className="addstudent-content-input" 
                        type="number" />
                    <br />
                    <br />
                    <label className="addstudent-content-label">Student Name</label>
                    <br />
                    <input id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="addstudent-content-input" 
                        type="text" />
                    <br />
                    <br />
                    <label className="addstudent-content-label">Student Email</label>
                    <br />
                    <input id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="addstudent-content-input" 
                        type="text" />
                    <br />
                    <br />
                    <label className="addstudent-content-label">Age</label>
                    <br />
                    <input id="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="addstudent-content-input" type="number" />
                    <br />
                    <br />
                    <label className="addstudent-content-label">Date of Birth</label>
                    <br />
                    <input id="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        className="addstudent-content-input" type="date" />
                    <br />
                    <br />
                    <label className="addstudent-content-label">Student Mobile No</label>
                    <br />
                    <input id="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="addstudent-content-input" type="number" />
                    <br />
                    <br />
                    <label className="addstudent-content-label">Student Class</label>
                    <br />
                    <input id="class"
                        value={formData.class}
                        onChange={handleChange}
                        className="addstudent-content-input" type="text" />
                    <br />
                    <br />
                    <label className="addstudent-content-label">Student Section</label>
                    <br />
                    <input id="section"
                        value={formData.section}
                        onChange={handleChange}
                        className="addstudent-content-input" type="text" />
                    <br />
                    <br />
                    <label className="addstudent-content-label">Student Address</label>
                    <br />
                    <textarea id="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="addstudent-content-input" />
                    <br />
                    <br />
                    <label className="addstudent-content-label">Father's Name</label>
                    <br />
                    <input id="fname"
                        value={formData.fname}
                        onChange={handleChange}
                        className="addstudent-content-input" type="text" />
                    <br />
                    <br />
                    <label className="addstudent-content-label">Father's Email</label>
                    <br />
                    <input id="femail"
                        value={formData.femail}
                        onChange={handleChange}
                        className="addstudent-content-input" type="text" />
                    <br />
                    <br />
                    <label className="addstudent-content-label">Father's Mobile No</label>
                    <br />
                    <input id="fmobile"
                        value={formData.fmobile}
                        onChange={handleChange}
                        className="addstudent-content-input" type="number" />
                    <br />
                    <br />
                    <label className="addstudent-content-label">Student occupation</label>
                    <br />
                    <input id="foccupation"
                        value={formData.foccupation}
                        onChange={handleChange}
                        className="addstudent-content-input" type="text" />
                    <br />
                    <br />
                    <label className="addstudent-content-label">Mother's Name</label>
                    <br />
                    <input id="mname"
                        value={formData.mname}
                        onChange={handleChange}
                        className="addstudent-content-input" type="text" />
                    <br />
                    <br />
                    <label className="addstudent-content-label">Mother's Email</label>
                    <br />
                    <input id="memail"
                        value={formData.memail}
                        onChange={handleChange}
                        className="addstudent-content-input" type="text" />
                    <br />
                    <br />
                    <label className="addstudent-content-label">Mother's Mobile No</label>
                    <br />
                    <input id="mmobile"
                        value={formData.mmobile}
                        onChange={handleChange}
                        className="addstudent-content-input" type="text" />
                    <br />
                    <br />
                    <label className="addstudent-content-label">Mother's Occupation</label>
                    <br />
                    <input id="moccupation"
                        value={formData.moccupation}
                        onChange={handleChange}
                        className="addstudent-content-input" type="text" />
                    <br />
                    <input type="submit"
                        value="submit"
                        id="addstudent-content-submit" />

                </form>
                
            </div>

        </div>
    )
}