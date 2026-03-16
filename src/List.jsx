import PropTypes from "prop-types";
function List(props){
    const category = props.category;
    const itemList = props.items;
    const listItmes = itemList.map(item => <li key = {item.id}>
                                            {item.name}: {item.calories}
                                            </li>
                                )
    return(<>
        <h3 className="list-category">{category}</h3>
        <ul className="list-items">{listItmes}</ul>        
    </>);
}
    List.propTypes = {
        category : PropTypes.string,
        items : PropTypes.arrayOf(PropTypes.shape({id : PropTypes.number,
                                                    name : PropTypes.string,
                                                    calories : PropTypes.number,
                                                    }
        )),
    }
console.log(List.propTypes);
export default List;
/* 
React 19 (released mid-2024) completely removed the built-in PropTypes runtime checking system.
The old Component.propTypes mechanism no longer triggers console warnings — even if you install and use the separate prop-types package.
Warnings simply don't exist anymore in React ≥19 for propTypes. */