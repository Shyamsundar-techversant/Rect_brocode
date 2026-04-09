import React,{useContext} from "react";
import { UserContext } from "./ComponentA.jsx";
function ComponentD(){
    const user = useContext(UserContext);
    return(
        <div className="box">
            <h1>ComponentD</h1>
            <h2>{user}</h2>
        </div>
    )
}
export default ComponentD;

/* 
    Whoever not able to found "prop-types" file in there node_modules file 
    Follw these steps :

    1. Open terminal

    2. cd folder name ( change your directory to current one.)

    3. Run command:
    > npm install prop-types 

    Congrats your prop-types file is now installed successfully
*/