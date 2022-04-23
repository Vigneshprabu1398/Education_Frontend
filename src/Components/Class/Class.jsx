import { useContext } from "react";
import { AppContext } from "../Context/Context";

export const Class = () =>{
    const {state,handleChange} = useContext(AppContext);
    console.log("class",state);
    return(
        <div>
            <h1>{state}</h1>          
        </div>
    );
}