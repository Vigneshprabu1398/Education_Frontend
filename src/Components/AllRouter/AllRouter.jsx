import { Route, Routes } from "react-router";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { Navbar } from "../Navbar/Navbar";
import { Parent } from "../Parent/Parent";
import { Principal } from "../Principal/Principal";
import { Staff } from "../Staff/Staff";
import { Student } from "../Student/Student";

export const AllRouter=()=>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/principal" element={<Login />}/>
                <Route path="/staff" element={<Login />}/>
                <Route path="/student" element={<Login />}/>
                <Route path="/parent" element={<Login />}/>
            </Routes>
        </div>
    );
}