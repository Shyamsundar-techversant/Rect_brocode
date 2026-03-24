import { useState } from "react";

function MyComponent(){
    const[car,setCar] = useState(
                                    {
                                        year:2024,
                                        make:"Ford",
                                        model:"Mustang",
                                    }
                                );
    function handleYearChange(event){
        // setCar({year:2025}); other properties are not updating.

        setCar(c => ({...car,year:event.target.value})); //if we have an object with same name, js use the last by disgrading the first
    }   
    function handleMakeChange(event){
        setCar(c => ({...car,make : event.target.value}))
    }   
    function handleModelChange(){
        setCar(c => ({...car,model : event.target.value}))
    }                      
    return(
        <div>
            <p>Your favorite car is : {car.year} {car.make} {car.model}</p>
            <input type = "number" value = {car.year} onChange={handleYearChange}></input><br/>
            <input type = "text" value = {car.make} onChange={handleMakeChange}></input><br/>
            <input type = "text" value = {car.model} onChange={handleModelChange}></input>
        </div>
    )
}
export default MyComponent;