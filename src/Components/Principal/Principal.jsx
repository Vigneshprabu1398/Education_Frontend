import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import "./Principal.css"


export const Principal = () =>{

    const [data, setData] = useState("")
    
    return(

        <div className="principalpage">

            <div id="principal-navbar">
                <Link to="/login"><img className="logo" src={logo} alt="" /></Link>
                <Link to="/addStudent"><button id="addview-first" className="addview">Add Student</button></Link>
                <Link to="/addStaff"><button className="addview">Add Staff</button></Link>
                <Link to="/viewStudent"><button className="addview">View Student Details</button></Link>
                <Link to="/viewStaff"><button className="addview">View Staff Details</button></Link>
                <Link to="/login"><button className="addview">Logout</button></Link>
            </div>

            <h4 className="hello">Hello Principal,</h4>

            <div id="principal-content">
                <div className="principal-content1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur distinctio eligendi aspernatur praesentium eaque labore facere inventore, officiis aperiam qui atque velit minima sed, illo deserunt quam ab voluptates voluptatum!</div>
                <div className="principal-content2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus at eligendi consectetur facilis minus, deserunt similique blanditiis, exercitationem omnis sint voluptas amet ullam voluptatem, quas atque dolorum laborum quia. Vitae!</div>
                <div className="principal-content3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam doloribus quod ratione cupiditate delectus dolor temporibus vero repellat! Temporibus, incidunt molestiae ipsa ex sunt adipisci harum illo debitis ullam.</div>
                <div className="principal-content4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consectetur quod alias unde blanditiis voluptate sint amet adipisci maxime eaque, doloribus, praesentium delectus a laborum. Rerum ab quisquam ipsam nobis?</div>
                <div className="principal-content5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint repudiandae omnis id nesciunt! Tempore beatae in voluptas ducimus veritatis, hic odit corporis rem a quos possimus culpa earum voluptatibus aperiam.</div>
                <div className="principal-content6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ullam velit vel officia delectus quae illo necessitatibus recusandae a, perferendis est incidunt, tempore modi. Sunt voluptatem eos assumenda magni fugit?</div>
            </div>

        </div>
    );
}