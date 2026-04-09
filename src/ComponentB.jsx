import ComponentC from "./ComponentC.jsx";
function ComponentB(){
    return(
        <div className="box">
            <h1>ComponentB</h1>
            <ComponentC/>
        </div>
    )
}
export default ComponentB;

// Prop drilling : passing props down each of the nested component