/* 
    // useState() - Re-renders the component when the state value changes

    // useRef() - "use Reference" Does not cause re-renders when its value changes.
                    when we want a component to "remember" some information but
                    we don't want that information to trigger new renders.

    // 1. Accessing/Interacting with DOM elements.
    // 2. Handling Focus, Animations and Transitions.
    // 3. Managing Timers and Intervals.
*/
import React , {useState,useEffect,useRef} from "react";

function MyComponent(){
    const inputRef = useRef(null);

    useEffect(() => {
       console.log("COMPONENT RENDERED"); 
    });

    function handleClick(){
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow";
    }
    return(
        <div>
            <button onClick={handleClick}>
                Click me!
            </button>
            <input ref={inputRef}></input>
        </div>

    )
}
export default MyComponent;