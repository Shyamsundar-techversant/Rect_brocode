function List(){
    const fruits = ["a","b","c","d","e"];
    const listItmes = fruits.map(fruit =><li>{fruit}</li>)
    return(<ul>{listItmes}</ul>);
}
export default List;