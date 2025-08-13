import PropTypes from 'prop-types';


function List({items=[],category = "Category" }) {
    // const fruits = [
    //     {name: "appe", calories: 95},
    //     {name: "orange", calories: 62},
    //     {name: "banana", calories: 105},
    //     {name: "coconut", calories: 118},
    //     {name: "pineapple", calories: 82}
    // ];
    
    // fruits.sort((a,b) => a.name.localeCompare(b.name))//alphabetical sort
    // fruits.sort((a,b) => b.name.localeCompare(a.name))// reverse alphabetical sort
    // fruits.sort((a, b) => a.calories - b.calories)//numeric sort
    //fruits.sort((a,b) => b.calories-a.calories)//reverse numeric sort
    
    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)//filter
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100)//filter
    
    // const listItems = highCalFruits.map(highCalFruits => (
    // <li key={highCalFruits.name}>
    //     {highCalFruits.name}: <b>{highCalFruits.calories} calories</b>
    // </li>
    // ));
    
    
    const listItems = items.map(item => ( <li key={item.id}>
                                            {item.name}: 
                                            <b>{item.calories} calories</b></li>
    ));

    return (
        <>
            <h3 className="list-category">{category}</h3>
            <ul className="list-items">{listItems}</ul>
        </>
    )
    
}
List.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.number.isRequired,
            calories:PropTypes.number.isRequired
       })
    ).isRequired,
    category:PropTypes.string
    
    
}

export default List