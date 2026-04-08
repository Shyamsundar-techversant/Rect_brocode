/* 
    useEffect() - React hook that tells React to Do Some code when

    1. This comoponent re renders.
    2.This comoponent mounts.
    3.The state of a value changes.

 -- useEffect(function,[dependencies])

 -- 1. useEffect(() => {}) // Runs after every re-render
    2. useEffect(() => {},[]) ; // Runs only on mount;
    3. useEffect(() =>{},[value]); // Runs on mount + when value changes

    -- USES
    1.Event Listeners.
    2.DOM manipulation.
    3.Subscriptions(real-time updates).
    4.Fetching Data from an API.
    5.Clean up when a component unmounts.
*/

import { useEffect, useState } from "react";


function MyComponent(){
    const [count,setCount] = useState(0);
    const[color,setColor] = useState("green");
    //using useEffect hook
    useEffect(() =>{
        document.title = `Count : ${count} ${color}`
    },[count,color])

    function addCount(){
        setCount(c => c+1);
    }
    function substractCount(){
        setCount(c => c-1);
    }
    function changeColor(){
        setColor(c => c==="green" ? "red" : "green");
    }
    return(
        <>
            <p style = {{color : color}}>Count : {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={substractCount}>Substract</button>
            <button onClick={changeColor}>Change Color</button>
        </>
    )
}
export default MyComponent;