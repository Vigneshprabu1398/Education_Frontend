import { Link } from "react-router-dom"
import "./Viewtimetable.css"
import logo from "../Images/logo.png"

export const Viewtimetable = ()=>{

    return (
        <div id="timetable">

            <div id="view-navbar">
                <Link to="/student"><img className="logo" src={logo} alt="" /></Link>
            </div>

            <h2 id="timetable-head">Time Table</h2>
            
            <table id="timetable-table">
                <thead>
                    <tr>
                        <td>Days</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{backgroundColor:"#5855bb", color:"white", height:"40px"}}>
                        <td>Monday</td>
                        <td>Tam</td>
                        <td>Mat</td>
                        <td>Mat</td>
                        <td>Sci</td>
                        <td>Eng</td>
                        <td>Soc</td>
                        <td>Pet</td>
                        <td>Pet</td>
                    </tr>
                    <tr style={{backgroundColor:"#f1ad2d", color:"white", height:"40px"}}>
                        <td>Tuesday</td>
                        <td>Eng</td>
                        <td>Eng</td>
                        <td>Mat</td>
                        <td>Soc</td>
                        <td>Sci</td>
                        <td>Tam</td>
                        <td>Mat</td>
                        <td>Sci</td>
                    </tr>
                    <tr style={{backgroundColor:"#be262a", color:"white", height:"40px"}}>
                        <td>Wednesday</td>
                        <td>Pet</td>
                        <td>Sci</td>
                        <td>Sci</td>
                        <td>Eng</td>
                        <td>Soc</td>
                        <td>Soc</td>
                        <td>Tam</td>
                        <td>Mat</td>
                    </tr>
                    <tr style={{backgroundColor:"#f17c1b", color:"white", height:"40px"}}>
                        <td>Thursday</td>
                        <td>Mat</td>
                        <td>Mat</td>
                        <td>Sci</td>
                        <td>Soc</td>
                        <td>Tam</td>
                        <td>Sci</td>
                        <td>Soc</td>
                        <td>Tam</td>
                    </tr>
                    <tr style={{backgroundColor:"#e65db7", color:"white", height:"40px"}}>
                        <td>Friday</td>
                        <td>Mat</td>
                        <td>Sci</td>
                        <td>Sci</td>
                        <td>Soc</td>
                        <td>Tam</td>
                        <td>Tam</td>
                        <td>Eng</td>
                        <td>Mat</td>
                    </tr>
                    <tr style={{backgroundColor:"#21a7c4", color:"white", height:"40px"}}>
                        <td>Saturday</td>
                        <td>Pet</td>
                        <td>Yoga</td>
                        <td>Mat</td>
                        <td>Mat</td>
                        <td>Sci</td>
                        <td>Soc</td>
                        <td>Tam</td>
                        <td>Eng</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}