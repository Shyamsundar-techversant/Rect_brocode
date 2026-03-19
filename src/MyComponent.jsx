import React,{useState} from 'react';
function MyComponent(){
    // below name -- stateful variable, setName - setter function.
    //when we use a setter funciton of a stateful variable it will trigger a rerender of the virtual dom. Normal variable don't.

    const [name,setName] = useState("Guest");
    const [age,setAge] = useState(0) ;
    const [isEmployed,setIsEmployed] = useState(false);
    const updateName = () => {
        setName("Spongebob")
    }
    const incrementAge = () =>{
        setAge(age+1)
    }
    const toggleEmployedStatus = () =>{
        setIsEmployed(!isEmployed)
    }
    return(<div>
        <p>Name : {name}</p>
        <button onClick={updateName}>Set Name</button>
        <p>Age : {age}</p>
        <button onClick={incrementAge}>Increment Age</button>
        <p>Isemployed : {isEmployed?"Yes":"No"}</p>
        <button onClick={toggleEmployedStatus}>Toggle status</button>
    </div>)

}
export default MyComponent;