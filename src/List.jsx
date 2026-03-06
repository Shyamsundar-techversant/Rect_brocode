function List(){
    const fruits = [{id :1,name : "apple",calories : 95},
                    {id:2,name : "orange",calories:45},
                    {id:3,name : "banana",calories:345}
                ];
    // fruits.sort((a,b)=>a.name.localeCompare(b.name)); //Sort alphabetic
    fruits.sort((a,b)=>a.calories - b.calories);
    const lowCalFruits = fruits.filter(fruit =>fruit.calories <100);
    const listItmes = lowCalFruits.map(fruit =><li key={fruit.id}>{fruit.name} : {fruit.calories}</li>)
    return(<ul>{listItmes}</ul>);
}
export default List;