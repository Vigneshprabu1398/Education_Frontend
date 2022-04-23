import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import logo from "../Images/logo.png"
import "./Addstudent.css";

export const Addstudent = ()=>{


    const [formData, setFormData] = useState({
        student_id: "",
        student_name: "",
        student_email: "",
        student_age: "",
        student_DOB: "",
        student_mobileNo: "",
        student_class: "",
        student_section: "",
        student_address: "",
        student_FathersName: "",
        student_FathersOccupation: "",
        student_FathersEmail: "",
        student_FathersMobileNo: "",
        student_MothersName: "",
        student_MothersOccupation: "",
        student_MothersEmail: "",
        student_MothersMobileNo: ""
    });

    const [data, setData] = useState({});

    const handleChange = (e)=>{
        const {id, value} = e.target;
        setFormData({
            ...formData,
            [id]:value
        })
    }

    const handleSubmit = (e)=>{
        axios.post("https://education-backend.herokuapp.com/student", formData)
        .then(()=>{
            setFormData({
                student_id: "",
                student_name: "",
                student_email: "",
                student_age: "",
                student_DOB: "",
                student_mobileNo: "",
                student_class: "",
                student_section: "",
                student_address: "",
                student_FathersName: "",
                student_FathersOccupation: "",
                student_FathersEmail: "",
                student_FathersMobileNo: "",
                student_MothersName: "",
                student_MothersOccupation: "",
                student_MothersEmail: "",
                student_MothersMobileNo: ""
            })
        })
        .then(()=>{
            getData();
        })
    }

    useEffect(()=>{
        getData();
    }, []);

    const getData = ()=>{
        axios.get("https://education-backend.herokuapp.com/student")
        .then((res)=>{
            setData(res.data)
        })
    }

    return(
        <div id="addstudent">

            <div id="pri-navbar">
              <Link to="/principal"><img className="logo" src={logo} alt="" /></Link>
            </div>

            <div id="addstudent-content">
                
            <h1 className="addstudent-content-head">Add New Student</h1>

                
                <div>
                    <label className="addstudent-content-label">Student ID</label>
                    <br />
                    <input id="student_id"
                        value={formData.student_id}
                        onChange={handleChange}
                        placeholder="enter student roll number"
                        className="addstudent-content-input"
                        type="number" />
                </div>
                <div>
                    <label className="addstudent-content-label">Student Name</label>
                    <br />
                    <input id="student_name"
                        value={formData.student_name}
                        onChange={handleChange}
                        className="addstudent-content-input"
                        type="text" />
                </div>
                <div>
                    <label className="addstudent-content-label">Student Email</label>
                    <br />
                    <input id="student_email"
                        value={formData.student_email}
                        onChange={handleChange}
                        className="addstudent-content-input"
                        type="text" />
                </div>
                <div>
                    <label className="addstudent-content-label">Age</label>
                    <br />
                    <input id="student_age"
                        value={formData.student_age}
                        onChange={handleChange}
                        className="addstudent-content-input" type="number" />
                </div>
                <div>
                    <label className="addstudent-content-label">Date of Birth</label>
                    <br />
                    <input id="student_DOB"
                        value={formData.student_DOB}
                        onChange={handleChange}
                        className="addstudent-content-input" type="date" />
                </div>
                <div>
                    <label className="addstudent-content-label">Student Mobile No</label>
                    <br />
                    <input id="student_mobileNo"
                        value={formData.student_mobileNo}
                        onChange={handleChange}
                        className="addstudent-content-input" type="number" />
                </div>
                <div>
                    <label className="addstudent-content-label">Student Class</label>
                    <br />
                    <input id="student_class"
                        value={formData.student_class}
                        onChange={handleChange}
                        className="addstudent-content-input" type="text" />
                </div>
                <div>
                    <label className="addstudent-content-label">Student Section</label>
                    <br />
                    <input id="student_section"
                        value={formData.student_section}
                        onChange={handleChange}
                        className="addstudent-content-input" type="text" />
                </div>
                <div>
                    <label className="addstudent-content-label">Student Address</label>
                    <br />
                    <textarea id="student_address"
                        value={formData.student_address}
                        onChange={handleChange}
                        className="addstudent-content-input" />
                </div>
                <div>
                    <label className="addstudent-content-label">Father's Name</label>
                    <br />
                    <input id="student_FathersName"
                        value={formData.student_FathersName}
                        onChange={handleChange}
                        className="addstudent-content-input" type="text" />
                </div>
                <div>
                    <label className="addstudent-content-label">Father's Email</label>
                    <br />
                    <input id="student_FathersEmail"
                        value={formData.student_FathersEmail}
                        onChange={handleChange}
                        className="addstudent-content-input" type="text" />
                </div>
                <div>
                    <label className="addstudent-content-label">Father's Mobile No</label>
                    <br />
                    <input id="student_FathersMobileNo"
                        value={formData.student_FathersMobileNo}
                        onChange={handleChange}
                        className="addstudent-content-input" type="number" />
                </div>
                <div>
                    <label className="addstudent-content-label">Student occupation</label>
                    <br />
                    <input id="student_FathersOccupation"
                        value={formData.student_FathersOccupation}
                        onChange={handleChange}
                        className="addstudent-content-input" type="text" />
                </div>
                <div>
                    <label className="addstudent-content-label">Mother's Name</label>
                    <br />
                    <input id="student_MothersName"
                        value={formData.student_MothersName}
                        onChange={handleChange}
                        className="addstudent-content-input" type="text" />
                </div>
                <div>
                    <label className="addstudent-content-label">Mother's Email</label>
                    <br />
                    <input id="student_MothersEmail"
                        value={formData.student_MothersEmail}
                        onChange={handleChange}
                        className="addstudent-content-input" type="text" />
                </div>
                <div>
                    <label className="addstudent-content-label">Mother's Mobile No</label>
                    <br />
                    <input id="student_MothersMobileNo"
                        value={formData.student_MothersMobileNo}
                        onChange={handleChange}
                        className="addstudent-content-input" type="text" />
                </div>
                <div>
                    <label className="addstudent-content-label">Mother's Occupation</label>
                    <br />
                    <input id="student_MothersOccupation"
                        value={formData.student_MothersOccupation}
                        onChange={handleChange}
                        className="addstudent-content-input" type="text" />
                </div>
                <br />
                <input type="submit"
                    value="submit"
                    onClick={handleSubmit}
                    id="addstudent-content-submit" />
                
            </div>

        </div>
    )
}