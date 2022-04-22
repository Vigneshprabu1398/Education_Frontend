import { Link } from "react-router-dom";
import "./Home.css"
import logo from "../Images/logo.png"
import gif from "../Images/homepage.jpg"

export const Home = () =>{
    return(
        <div>

            <div id="navbar">
                <img className="logo" src={logo} alt="" />
                <Link id="maintext" className="text" to="/login">Principal</Link>
                <Link className="text" to="/login">Staff</Link>
                <Link className="text" to="/login">Student</Link>
                <Link className="text" to="/login">Parent</Link>
            </div>
            <div id="content">
                <img className="content-img" src={gif} alt="" />
                <h1 id="home">Virtual Schooling</h1>
                <div id="home-div">
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto veniam fugit quaerat iusto quae debitis, fugiat ab possimus exercitationem obcaecati harum hic quisquam accusamus necessitatibus labore officiis, dolorum numquam. Iste.</div>
                <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione unde itaque, laudantium laboriosam sint suscipit labore molestiae esse rerum sapiente a aliquid, dolor aliquam eveniet minima, libero ex non excepturi!</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat incidunt itaque quia dignissimos, atque aperiam praesentium vero quam sapiente, magnam minima cupiditate a et est maxime tempore laborum consequatur impedit?</div>
                <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium cum velit praesentium. Et pariatur quae molestias libero, explicabo maxime. Commodi veritatis odio autem ea labore molestias quibusdam, doloremque quas omnis.</div>
                <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae soluta recusandae numquam distinctio culpa, asperiores eos et quo saepe animi. Sunt et assumenda nesciunt rem obcaecati voluptates quia commodi repudiandae!</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nemo recusandae reiciendis reprehenderit, aspernatur mollitia accusantium velit alias? Odit ipsam molestias consequatur nam, earum hic debitis eius facere inventore aspernatur.</div>
                </div>
            </div>
        </div>
    );
}

//testing...
