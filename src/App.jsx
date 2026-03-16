import List from './List.jsx';
    const fruits = [{id :1,name : "apple",calories : "s"},
                    {id:2,name : "orange",calories:45},
                    {id:3,name : "banana",calories:345}
                ];
    const vegetables = [{id :6,name : "potato",calories : 115},
                    {id:7,name : "celery",calories:15},
                    {id:8,name : "carrots",calories:25}
                ];


function App() {
  return(
    <>
      {fruits.length > 0 ?<List items = {fruits} category = "Fruits" /> : null}
      {/* Without ternary operator -- using logical AND  */}
      {vegetables.length > 0 && <List items = {vegetables} category = "Vegetables" />}
    </>
  )
}

export default App
