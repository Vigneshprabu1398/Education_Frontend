import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import logo from "../Images/logo.png"
import "./Viewstudent.css";
import { useContext } from "react";
import { AppContext } from "../Context/Context";
import { SortAndFilterButtons } from "../Sorting/Sorting";

export const Viewstudent = ()=>{
    const [list, setList] = useState([])
    const {state,handleChange} = useContext(AppContext)

    useEffect(()=>{
        axios.get("https://education-backend.herokuapp.com/student")
        .then((res)=>{
            setList(res.data)
        })
    }, [])

    function handleSort(nameBy, order) {
        if (nameBy === 'student_name' && order === 1)
            setList((prev) =>
                [...prev.sort((a, b) => a.student_name > b.student_name ? 1 : -1)])
        else if (nameBy === 'student_name' && order === -1)
            setList((prev) =>
                [...prev.sort((a, b) => a.student_name > b.student_name ? -1 : 1)])
    }

    return(
        <div id="viewstudent">
            
            <div id="view-navbar">
              <Link to="/principal"><img className="logo" src={logo} alt="" /></Link>
            </div>

            <h2 className="viewstudent-head">Student Details of X : {state}</h2>
            <SortAndFilterButtons
                handleSort={handleSort}
            />
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
                {
                    list.filter(e =>{
                        if(state==="Viewall"){
                            return e;
                        }
                        else if(e.student_section===state){
                            return e;
                        }
                        
                    }).map((e)=>{
                        
                        return(
                            <tbody
                            key={e.student_id}>
                            <tr>
                                <td className="viewstudent-table-td1">{e.student_id}</td>
                                <td className="viewstudent-table-td2">{e.student_name}</td>
                                <td className="viewstudent-table-td1">{e.student_email}</td>
                                <td className="viewstudent-table-td2">{e.student_age}</td>
                                <td className="viewstudent-table-td1">{e.student_DOB}</td>
                                <td className="viewstudent-table-td2">{e.student_mobileNo}</td>
                                <td className="viewstudent-table-td1">{e.student_class}</td>
                                <td className="viewstudent-table-td2">{e.student_section}</td>
                                <td className="viewstudent-table-td1">{e.student_address}</td>
                                <td className="viewstudent-table-td2">{e.student_FathersName}</td>
                                <td className="viewstudent-table-td1">{e.student_FathersEmail}</td>
                                <td className="viewstudent-table-td2">{e.student_FathersMobileNo}</td>
                                <td className="viewstudent-table-td1">{e.student_FathersOccupation}</td>
                                <td className="viewstudent-table-td2">{e.student_MothersName}</td>
                                <td className="viewstudent-table-td1">{e.student_MothersEmail}</td>
                                <td className="viewstudent-table-td2">{e.student_MothersMobileNo}</td>
                                <td className="viewstudent-table-td1">{e.student_MothersOccupation}</td>
                            </tr>
                        </tbody>
                        );
                    })}
            </table>
        </div>
    )
}