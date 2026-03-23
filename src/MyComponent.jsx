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
            When you call the setter function from useState (e.g. setCount), 
            React doesn't update the state immediately. 
            Instead:It queues the update
            Multiple updates in the same event can be batched (combined)
            When React finally applies them, it does so one after another
        */
        setCount(c => c +1);
        setCount(c => c +1);
        setCount(c => c +1);
    }
}
export default MyComponent;