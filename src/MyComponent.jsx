//Onchange Event handler -- evenet handler used primarly with form elements.
//                          ex : <input>,<textarea>,<select>,<radio>,...
//                          Triggers a function every time the value of the input changes.

import React,{useState} from 'react';
function MyComponent(){
    const [name,setName] = useState("Guest");
    const [quantity,setQuantity] = useState(0);
    const [comment,setComment] = useState("");
    const [payment,setPayment] = useState("UPI");
    const [shipping,setShipping] = useState("");
    function handleNameChange(event){
        setName(event.target.value);
    }
    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }
    function handleCommentChange(event){
        setComment(event.target.value);
    }
    function handlePaymentMehtod(event){
        setPayment(event.target.value);
    }
    function handleShippingChange(event){
        setShipping(event.target.value);
    }
    return(
        <div>
            <input value = {name} onChange={handleNameChange}></input>
            <p>Name : {name}</p>
            <input value = {quantity} onChange = {handleQuantityChange} type = "number"></input>
            <p>Quantity : {quantity}</p>
            <textarea value = {comment} onChange = {handleCommentChange} 
                placeholder = "Enter Delivery intructions">      
            </textarea>
            <p>Comment : {comment}</p>
            <select value = {payment} onChange={handlePaymentMehtod}>
                <option value = "">Select an option</option>
                <option value = "ATM">ATM</option>
                <option value = "VISA">VISA</option>
                <option value = "UPI">UPI</option>
            </select>
            <p>Payment Method : {payment}</p>
            <label>
                <input type = "radio" value = "Pick Up"
                    checked = {shipping === "Pick Up"}
                    onChange={handleShippingChange}
                ></input>
                Pick Up
            </label>
            <label>
                <input type = "radio" value = "Delivery"
                    checked = {shipping === "Delivery"}
                    onChange={handleShippingChange}
                ></input>
                Delivery
            </label>
            <p>Shipping : {shipping}</p>
        </div>
    )
}
export default MyComponent;