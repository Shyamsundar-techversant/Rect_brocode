import { useState } from "react";

/* 
Updater function - A function passed as an argument to setState() usually
ex. setYear(arrow function).
Allow for safe updates based on the previous state Used with multiple state
and asynchronous functions . Good practice to use updater functions.
*/
function MyComponent(){
    const[count,setCount] = useState(0);
    function increment(){
        /* 
            Suppose i want to increment by two, then 
            
            setCount(count+1);
            setCount(count+1);
            setCount(count+1);
        */

        /* 
            But, 
            React Uses the CURRENT state to calculate the NEXT state. After 
            using a set functions , it do not trigger an update.
            React batches together state updates for performance reasons.
            NEXT state becomes CURRENT state after update.
        */

    }
}
export default MyComponent;