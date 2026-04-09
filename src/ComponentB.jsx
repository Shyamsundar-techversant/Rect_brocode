import ComponentC from "./ComponentC.jsx";
function ComponentB(props){
    return(
        <div className="box">
            <h1>ComponentB</h1>
            <ComponentC user={props.user}/>  //prop drilling
        </div>
    )
}
export default ComponentB;

// Prop drilling : passing props down each of the nested component