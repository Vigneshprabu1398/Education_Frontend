import { Route, Routes } from "react-router";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { Principal } from "../Principal/Principal";
import { Staff } from "../Staff/Staff";
import { Student } from "../Student/Student";
import { Parent } from "../Parent/Parent"
import { Addstudent } from "../Student/Addstudent";
import { Viewstudent } from "../Student/Viewstudent";
import { Standard } from "../Standard/Standard";
import { Class } from "../Class/Class";

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
                <Route  path="/standard" element={<Standard />}/>
                <Route  path="/viewStudent" element={<Viewstudent />}/>
                <Route  path="/class" element={<Class/>}/>
            </Routes>
        </div>
    );
}