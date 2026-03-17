import React,{useState} from 'react';
function MyComponent(){
    // below name -- stateful variable, setName - setter function.
    //when we use a setter funciton of a stateful variable it will trigger a rerender of the virtual dom. Normal variable don't.

    const [name,setName] = useState(); 
    const updateName = () => {
        setName("Spongebob")
    }
    return(<div>
        <p>Name : {name}</p>
        <button onClick={updateName}>Set Name</button>
    </div>)

}
export default MyComponent;