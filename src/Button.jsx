function Button(){
    const handleClick = () => console.log("OUCH");
    const handleClick2 = (name) => console.log(`${name} stop clicking me`);
    // onClick={handleClick2("BRO")} -- Runs immediately when the component renders (not on click)
    // onClick={handleClick2} -- Runs only when clicked, but passes no argument
    // onClick={() => handleClick2("BRO")} -- Creates a new small function → runs only on click → then calls your real function with "BRO"
    // onClick={(e) => handleClick2("BRO", e)} -- same as above but also get the event object
    return(
        <button onClick={() => handleClick2("BRO")}>Click me</button>
    )
}
export default Button;