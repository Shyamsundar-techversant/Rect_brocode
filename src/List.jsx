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