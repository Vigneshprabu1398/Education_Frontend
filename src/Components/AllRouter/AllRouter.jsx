import { Route, Routes } from "react-router";
import { Home } from "../Home/Home";
import { Navbar } from "../Navbar/Navbar";
import { Parent } from "../Parent/Parent";
import { Principal } from "../Principal/Principal";
import { Staff } from "../Staff/Staff";
import { Student } from "../Student/Student";

export const AllRouter=()=>{
    return(
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/principal" element={<Principal />}/>
                <Route path="/staff" element={<Staff />}/>
                <Route path="/student" element={<Student />}/>
                <Route path="/parent" element={<Parent />}/>
            </Routes>
        </div>
    );
}