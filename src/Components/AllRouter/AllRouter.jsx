import { Route, Routes } from "react-router";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { Principal } from "../Principal/Principal";
import { Staff } from "../Staff/Staff";
import { Student } from "../Student/Student";
import { Parent } from "../Parent/Parent"

export const AllRouter=()=>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/principal" element={<Principal/>}/>
                <Route path="/staff" element={<Staff />}/>
                <Route path="/student" element={<Student />}/>
                <Route path="/parent" element={<Parent />}/>
                <Route  path="/login" element={<Login />}/>
            </Routes>
        </div>
    );
}