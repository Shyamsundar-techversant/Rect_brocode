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
    const [width,setWidth] = useState(window.innerWidth);
    const [height,setHeight] = useState(window.innerHeight);
    window.addEventListener("resize",handleResize);
    console.log("EVENT LISTENER ADDED");  
    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    return(
        <>
            <p>Window Width {width} px</p>
            <p>Window Height {height} px</p>
        </>
    )
}
export default MyComponent;