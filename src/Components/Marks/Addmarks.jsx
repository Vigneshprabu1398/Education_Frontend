import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import logo from "../Images/logo.png"
import { useNavigate } from "react-router";
import "./Addmarks.css"

export const Addmarks = ()=>{


    const [formData, setFormData] = useState({
        mark_id: "",
        tamil: "",
        english: "",
        maths: "",
        science: "",
        social_science: ""
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
        axios.post("https://education-backend.herokuapp.com/marks", formData)
        .then(()=>{
            setFormData({
                mark_id: "",
        tamil: "",
        english: "",
        maths: "",
        science: "",
        social_science: ""
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
        axios.get("https://education-backend.herokuapp.com/marks")
        .then((res)=>{
            setData(res.data)
        })
    }

    
    return(
        <div id="addmarks">

            <div id="pri-navbar">
              <Link to="/staff"><img className="logo" src={logo} alt="" /></Link>
            </div>

            <div id="addmarks-content">

                <h1 className="addmarks-content-head">Add Student Marks</h1>


                <div>
                    <label className="addmarks-content-label">Student ID</label>
                    <br />
                    <input id="mark_id"
                        value={formData.mark_id}
                        onChange={handleChange}
                        placeholder="enter student roll number"
                        className="addmarks-content-input"
                        type="number" />
                </div>
                <div>
                    <label className="addmarks-content-label">Tamil</label>
                    <br />
                    <input id="tamil"
                        value={formData.tamil}
                        onChange={handleChange}
                        className="addmarks-content-input"
                        type="number" />
                </div>
                <div>
                    <label className="addmarks-content-label">English</label>
                    <br />
                    <input id="english"
                        value={formData.english}
                        onChange={handleChange}
                        className="addmarks-content-input"
                        type="number" />
                </div>
                <div>
                    <label className="addmarks-content-label">Maths</label>
                    <br />
                    <input id="maths"
                        value={formData.maths}
                        onChange={handleChange}
                        className="addmarks-content-input" type="number" />
                </div>
                <div>
                    <label className="addmarks-content-label">Science</label>
                    <br />
                    <input id="science"
                        value={formData.science}
                        onChange={handleChange}
                        className="addmarks-content-input" type="number" />
                </div>
                <div>
                    <label className="addmarks-content-label">Social Science</label>
                    <br />
                    <input id="social_science"
                        value={formData.social_science}
                        onChange={handleChange}
                        className="addmarks-content-input" type="number" />
                </div>
                <br />
                <input type="submit"
                    value="submit"
                    onClick={handleSubmit}
                    id="addmarks-content-submit" />

            </div>

            

        </div>
    )
}