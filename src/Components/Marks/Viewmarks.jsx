import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import logo from "../Images/logo.png"
import "./Viewmarks.css"

export const Viewmarks = ()=>{

    const [list, setList] = useState([])

    useEffect(()=>{
        axios.get("https://education-backend.herokuapp.com/marks")
        .then((res)=>{
            setList(res.data)
        })
    }, [])

    return (
        <div id="viewmarks">

            <div id="view-mark">
                <Link to="/staff"><img className="logo" src={logo} alt="" /></Link>
            </div>

            <h2 className="viewstudent-head">Marks Details</h2>

            <table className="viewmark-table">
                <thead>
                    <tr>
                        <td>Student ID</td>
                        <td>Tamil</td>
                        <td>English</td>
                        <td>Maths</td>
                        <td>Science</td>
                        <td>Social Science</td>
                    </tr>
                </thead>
                {
                    list.map(e=>
                        <tbody>
                    <tr>
                        <td className="viewstudent-table-td1">{e.mark_id}</td>
                        <td className="viewstudent-table-td2">{e.tamil}</td>
                        <td className="viewstudent-table-td1">{e.english}</td>
                        <td className="viewstudent-table-td2">{e.maths}</td>
                        <td className="viewstudent-table-td1">{e.science}</td>
                        <td className="viewstudent-table-td2">{e.social_science}</td>
                    </tr>
                </tbody>
                        )
                }
            </table>

        </div>
    )
}